# John Galvin Fine Art - E-commerce Setup Guide

## Stripe Payment Integration

### 1. Get Stripe API Keys
1. Go to https://dashboard.stripe.com/register
2. Create an account or sign in
3. Navigate to Developers > API keys
4. Copy your **Publishable key** and **Secret key**

### 2. Configure Environment Variables
Update `.env.local` with your Stripe keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

## Email Notifications Setup

### Option 1: Gmail (Recommended for testing)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account > Security > 2-Step Verification > App passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the generated password

3. Update `.env.local`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
EMAIL_FROM=John Galvin Fine Art <your_email@gmail.com>
```

### Option 2: SendGrid (Recommended for production)
1. Sign up at https://sendgrid.com
2. Create an API key
3. Update `.env.local`:
```
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
EMAIL_FROM=John Galvin Fine Art <noreply@johngalvinfineart.com>
```

## Site URL Configuration
Update `.env.local` with your site URL:
```
# For development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# For production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Testing the System

### Test Mode (Stripe)
Use these test card numbers:
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002
- Use any future expiry date and any 3-digit CVC

### Test the Flow
1. Add artwork to cart
2. Go to checkout
3. Fill in shipping information
4. Click "Proceed to Payment"
5. Use test card on Stripe checkout
6. Verify order confirmation page
7. Check email for confirmation

## Production Checklist
- [ ] Replace test Stripe keys with live keys
- [ ] Configure production email service
- [ ] Update NEXT_PUBLIC_SITE_URL to production domain
- [ ] Test full checkout flow
- [ ] Set up Stripe webhooks for order tracking
- [ ] Configure shipping rates
- [ ] Add terms and conditions
- [ ] Set up SSL certificate

## Features Implemented
✅ Shopping cart with localStorage
✅ Stripe payment integration
✅ Email notifications (customer + admin)
✅ Order confirmation page
✅ Secure checkout flow
✅ Responsive design
