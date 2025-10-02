# Email Setup Guide

## Issue

The email functionality is not working because the serverless API endpoint needs proper configuration.

## Solutions

### Option 1: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add these environment variables in Vercel dashboard:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-gmail-app-password
   ORDER_INBOX=orders@yourdomain.com
   TAX_RATE=0.0
   ```

### Option 2: Use Gmail App Password

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Create a `.env.local` file in your project root:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   ORDER_INBOX=your-email@gmail.com
   TAX_RATE=0.0
   ```

### Option 3: Use Resend API (Alternative)

1. Sign up at https://resend.com
2. Get your API key
3. Update the order.js to use Resend instead of nodemailer
4. Add environment variable: `RESEND_API_KEY=re_your_key_here`

## Current Fallback

If the API fails, the system will automatically open the user's email client with a pre-filled order email to: isparshpatel@gmail.com

## Testing

1. Add items to cart
2. Fill out the checkout form
3. Click "Place Order"
4. Check if email is sent or if mailto fallback opens

## Dependencies

Make sure these are installed:

```bash
npm install nodemailer zod
```
