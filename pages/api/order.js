import nodemailer from "nodemailer";
import { z } from "zod";

// --- Validation schema ---
const ItemSchema = z.object({
  name: z.string().min(1, "Item name required").max(100),
  qty: z.coerce.number().int().min(1, "Quantity must be >= 1"),
  price: z.coerce.number().min(0, "Price must be >= 0"),
});

const OrderSchema = z.object({
  name: z.string().min(1, "Customer name required").max(100),
  phone: z.string().max(40).optional(),     // keep loose; phone formats vary
  email: z.string().email().optional(),     // for replyTo if provided
  time: z.string().max(100).optional(),
  contact: z.string().max(50).optional(),   // e.g., "Call", "Text", etc.
  notes: z.string().max(1000).optional(),
  items: z.array(ItemSchema).min(1, "At least one item"),
  // Client totals are ignored if TAX_RATE is set; otherwise they’re used.
  subtotal: z.coerce.number().min(0).default(0),
  tax: z.coerce.number().min(0).default(0),
  total: z.coerce.number().min(0).default(0),
  // Optional honeypot to deter bots: field must be empty if present
  hp: z.string().max(0).optional(),
});

// --- Utils ---
const currency = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

// --- Mail transporter (Gmail App Password or SMTP provider) ---
function makeTransporter() {
  // Prefer explicit SMTP settings over "service" for reliability.
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true, // 465 = true, 587 = false (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 1) Validate input
    const parsed = OrderSchema.safeParse(req.body || {});
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        error: "Invalid request",
        issues: parsed.error.issues.map(i => ({ path: i.path, message: i.message })),
      });
    }
    const { name, phone, email, time, contact, notes, items } = parsed.data;

    // 2) Compute totals on the server
    const computedSubtotal = items.reduce((s, it) => s + it.qty * it.price, 0);
    const TAX_RATE = process.env.TAX_RATE != null ? Number(process.env.TAX_RATE) : null;
    const computedTax =
      Number.isFinite(TAX_RATE) ? Number((computedSubtotal * TAX_RATE).toFixed(2)) : parsed.data.tax;
    const computedTotal = Number((computedSubtotal + computedTax).toFixed(2));

    // 3) Build email content
    const lineText = items
      .map(it => `• ${it.name} — ${it.qty} × ${it.price.toFixed(2)} = ${(it.qty * it.price).toFixed(2)}`)
      .join("\n");

    const text = `
New order from Sherin's Halal Meat

Customer: ${name}
Phone: ${phone || "-"}
Email: ${email || "-"}
Preferred Time: ${time || "-"}
Contact Method: ${contact || "-"}
Notes: ${notes || "-"}

Items:
${lineText}

Subtotal: ${currency(computedSubtotal)}
Tax:      ${currency(computedTax)}
TOTAL:    ${currency(computedTotal)}
`.trim();

    const lineHtml = items
      .map(
        it => `
          <tr>
            <td style="padding:6px 8px;border-bottom:1px solid #eee;">${esc(it.name)}</td>
            <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;">${it.qty}</td>
            <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;">${currency(it.price)}</td>
            <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;">${currency(it.qty * it.price)}</td>
          </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.45;">
        <h2>New order from Sherin's Halal Meat</h2>
        <p><strong>Customer:</strong> ${esc(name)}</p>
        <p><strong>Phone:</strong> ${esc(phone || "-")}<br/>
           <strong>Email:</strong> ${esc(email || "-")}<br/>
           <strong>Preferred Time:</strong> ${esc(time || "-")}<br/>
           <strong>Contact Method:</strong> ${esc(contact || "-")}</p>
        <p><strong>Notes:</strong><br/>${esc(notes || "-")}</p>

        <table style="border-collapse:collapse;width:100%;max-width:640px;margin-top:12px;">
          <thead>
            <tr>
              <th style="text-align:left;padding:6px 8px;border-bottom:2px solid #333;">Item</th>
              <th style="text-align:right;padding:6px 8px;border-bottom:2px solid #333;">Qty</th>
              <th style="text-align:right;padding:6px 8px;border-bottom:2px solid #333;">Price</th>
              <th style="text-align:right;padding:6px 8px;border-bottom:2px solid #333;">Line Total</th>
            </tr>
          </thead>
          <tbody>${lineHtml}</tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="text-align:right;padding:6px 8px;"><strong>Subtotal:</strong></td>
              <td style="text-align:right;padding:6px 8px;"><strong>${currency(computedSubtotal)}</strong></td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;padding:6px 8px;"><strong>Tax:</strong></td>
              <td style="text-align:right;padding:6px 8px;"><strong>${currency(computedTax)}</strong></td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;padding:6px 8px;"><strong>Total:</strong></td>
              <td style="text-align:right;padding:6px 8px;"><strong>${currency(computedTotal)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    `.trim();

    // 4) Send mail
    const transporter = makeTransporter();
    const TO = process.env.ORDER_INBOX || process.env.SMTP_USER; // configurable recipient
    const subject = `New Order — ${name} — ${currency(computedTotal)}`;

    await transporter.sendMail({
      from: `"Sherin's Orders" <${process.env.SMTP_USER}>`,
      to: TO,
      replyTo: email || undefined, // lets you reply straight to the customer, if provided
      subject,
      text,
      html,
    });

    return res.status(200).json({
      ok: true,
      totals: { subtotal: computedSubtotal, tax: computedTax, total: computedTotal },
    });
  } catch (e) {
    console.error("Email send failed:", e);
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }
}
