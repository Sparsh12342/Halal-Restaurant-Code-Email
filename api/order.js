// api/order.js (ESM-style for Vercel)
// If your package.json has "type": "module", keep this.
// If not, you can still use this (Vercel compiles ESM → CJS).

import nodemailer from "nodemailer";

function bool(val, def = false) {
  if (val === undefined) return def;
  if (typeof val === "string") return ["1","true","yes","on"].includes(val.toLowerCase());
  return !!val;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name, phone, preferredTime = "", contactMethod = "", notes = "",
      items = [], subtotal, tax, total
    } = req.body || {};

    if (!name || !phone || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Missing name/phone/items" });
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = port === 465 ? true : false; // Gmail: 465=SSL, 587=STARTTLS
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to   = process.env.ORDER_INBOX || user;

    if (!user || !pass) {
      return res.status(500).json({ error: "SMTP_USER/SMTP_PASS not set" });
    }

    const transporter = nodemailer.createTransport({
      host, port, secure,
      auth: { user, pass },
    });

    // Helpful: verify connection first (gives clear errors)
    await transporter.verify();

    // Recalculate totals server-side (optional but safer)
    const calcSubtotal = items.reduce(
      (s, it) => s + (Number(it.unitPrice) || 0) * (Number(it.qty) || 1), 0
    );
    const taxRate = Number(process.env.TAX_RATE || 0);
    const calcTax = Math.round(calcSubtotal * taxRate * 100) / 100;
    const calcTotal = Math.round((calcSubtotal + calcTax) * 100) / 100;

    const useSubtotal = typeof subtotal === "number" ? subtotal : calcSubtotal;
    const useTax      = typeof tax === "number" ? tax : calcTax;
    const useTotal    = typeof total === "number" ? total : calcTotal;

    const lines = items.map((it, i) => {
      const base = `${i+1}. ${it.name} (${it.category || "-"}) — ${it.weight || ""} x ${it.qty || 1} @ $${(it.unitPrice || 0).toFixed(2)}`;
      const opts = [it.cut && `Cut: ${it.cut}`, it.pieces && `Pieces: ${it.pieces}`, it.skin && `Skin: ${it.skin}`]
        .filter(Boolean).join(", ");
      return opts ? `${base} (${opts})` : base;
    }).join("\n");

    const text = `Customer: ${name}
Phone: ${phone}
Preferred time: ${preferredTime || "-"}
Contact: ${contactMethod || "-"}
Notes: ${notes || "-"}

Items:
${lines}

Subtotal: $${useSubtotal.toFixed(2)}
Tax: $${useTax.toFixed(2)}
Total: $${useTotal.toFixed(2)}
`;

    await transporter.sendMail({
      from: `"Sheran's Halal Meat" <${user}>`, // Gmail must match authenticated user
      to,
      subject: `New order — ${name} (${phone})`,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    // Surface the actual reason in the response for easy debugging
    console.error("Email error:", err);
    const msg = err?.response?.toString?.() || err?.message || "Email failed";
    return res.status(500).json({ error: msg });
  }
}
