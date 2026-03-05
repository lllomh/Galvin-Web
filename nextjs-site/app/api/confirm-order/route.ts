import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { sendOrderConfirmation, sendAdminNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { sessionId, shippingInfo } = await req.json();

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
      
      const items = lineItems.data.map(item => ({
        title: item.description || '',
        price: (item.amount_total || 0) / 100,
        quantity: item.quantity || 1,
      }));

      const orderDetails = {
        orderId: sessionId.slice(-8).toUpperCase(),
        customerEmail: session.customer_email || shippingInfo.email,
        customerName: shippingInfo.name,
        items,
        total: (session.amount_total || 0) / 100,
        shippingAddress: {
          address: shippingInfo.address,
          city: shippingInfo.city,
          postalCode: shippingInfo.postalCode,
          country: shippingInfo.country,
        },
      };

      await Promise.all([
        sendOrderConfirmation(orderDetails),
        sendAdminNotification(orderDetails),
      ]);

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Payment not completed' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
