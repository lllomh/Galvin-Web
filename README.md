# John Galvin Fine Art

A Next.js e-commerce website for Irish artist John Galvin, featuring original oil paintings and prints with integrated Stripe payments and email notifications.

## Features

- **Original Art & Prints**: Browse and purchase original oil paintings and limited edition prints
- **Shopping Cart**: Persistent cart using localStorage
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Email Notifications**: Automated order confirmations for customers and admin
- **Interactive Gallery**: Responsive image gallery with hover effects
- **Stockists Map**: Interactive map showing retail locations using Leaflet
- **Contact Form**: Direct email contact functionality
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16.1.6 (React 19.2.3)
- **Styling**: Tailwind CSS 4
- **Payments**: Stripe
- **Email**: Nodemailer
- **Maps**: React Leaflet
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Stripe account
- Email service (Gmail or SendGrid)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
cd nextjs-site
npm install
```

3. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=John Galvin Fine Art <your_email@gmail.com>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nextjs-site/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/               # API routes (Stripe, email)
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout flow
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── original-art/      # Original artwork listings
│   ├── prints/            # Print listings
│   └── stockists/         # Stockists map page
├── components/            # React components
├── contexts/              # React context (CartContext)
├── lib/                   # Utilities (Stripe, email)
├── public/                # Static assets
└── scripts/               # Build scripts
```

## Configuration

See [ECOMMERCE_SETUP.md](nextjs-site/ECOMMERCE_SETUP.md) for detailed setup instructions including:
- Stripe API configuration
- Email service setup (Gmail/SendGrid)
- Testing with Stripe test cards
- Production deployment checklist

## Development

```bash
npm run dev      # Start development server for dev
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

1. Update environment variables for production
2. Replace Stripe test keys with live keys
3. Configure production email service
4. Build and deploy:
```bash
npm run build
npm run start
```

## License

Private - All rights reserved
