# EmailJS Setup Guide - Automatic Email Sending

## What is EmailJS?

EmailJS allows you to send emails directly from your website without a backend server. It's free for up to 200 emails per month.

## Setup Steps

### 1. Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** `New Order from {{customer_name}} - {{total}}`

**Content:**

```
New Order from Sherin's Halal Meat

Customer Details:
- Name: {{customer_name}}
- Phone: {{customer_phone}}
- Email: {{customer_email}}
- Preferred Time: {{preferred_time}}
- Contact Method: {{contact_method}}
- Order Date: {{order_date}}

Order Items:
{{order_items}}

Order Summary:
- Subtotal: {{subtotal}}
- Tax: {{tax}}
- Total: {{total}}

Notes: {{notes}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### 5. Update Your Code

In `checkout.html`, replace these placeholders:

- `YOUR_PUBLIC_KEY` → Your actual public key
- `YOUR_SERVICE_ID` → Your actual service ID
- `YOUR_TEMPLATE_ID` → Your actual template ID

### 6. Test

1. Add items to cart
2. Fill out checkout form
3. Click "Place Order"
4. Check your email for the order notification

## Example Configuration

```javascript
// Replace these in checkout.html:
emailjs.init("user_abc123def456"); // Your public key

const result = await emailjs.send(
  "service_abc123", // Your service ID
  "template_xyz789", // Your template ID
  templateParams
);
```

## Benefits

- ✅ No server setup required
- ✅ Works on any hosting platform
- ✅ Free for 200 emails/month
- ✅ Reliable delivery
- ✅ Professional email templates
- ✅ Automatic fallback to mailto if service fails

## Troubleshooting

- Make sure all IDs are correct
- Check that your email service is connected
- Verify template variables match the code
- Check browser console for error messages
