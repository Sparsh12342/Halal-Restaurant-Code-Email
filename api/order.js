// api/order.js
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const {
      name, phone, time, contact, notes,
      items = [], subtotal = 0, tax = 0, total = 0
    } = req.body || {};

    const lines = items.map(
      it => `• ${it.name} — ${it.qty} × ${it.price.toFixed(2)} = ${(it.qty * it.price).toFixed(2)}`
    ).join("\n");

    const text = `
New order from Sherin's Halal Meat

Customer: ${name || "-"}
Phone: ${phone || "-"}
Preferred Time: ${time || "-"}
Contact Method: ${contact || "-"}
Notes: ${notes || "-"}

Items:
${lines || "(none)"}

Subtotal: $${subtotal.toFixed(2)}
Tax:      $${tax.toFixed(2)}
TOTAL:    $${total.toFixed(2)}
`.trim();

    await resend.emails.send({
      // For production, verify a domain in Resend and use that From.
      from: "Orders <orders@yourdomain.com>",
      to: "sherinhalal2024@gmail.com",
      subject: `New Order — ${name || "Customer"}`,
      text
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }
}
