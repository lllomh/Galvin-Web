import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

interface OrderItem {
  title: string;
  price: number;
  quantity: number;
}

interface OrderDetails {
  orderId: string;
  customerEmail: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export async function sendOrderConfirmation(orderDetails: OrderDetails) {
  const itemsList = orderDetails.items
    .map(item => `${item.title} x ${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: orderDetails.customerEmail,
    subject: `Order Confirmation - ${orderDetails.orderId}`,
    html: `
      <h1>Thank you for your order!</h1>
      <p>Dear ${orderDetails.customerName},</p>
      <p>Your order has been confirmed. Order ID: <strong>${orderDetails.orderId}</strong></p>
      
      <h2>Order Details:</h2>
      <pre>${itemsList}</pre>
      
      <p><strong>Total: €${orderDetails.total.toFixed(2)}</strong></p>
      
      <h2>Shipping Address:</h2>
      <p>
        ${orderDetails.shippingAddress.address}<br>
        ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.postalCode}<br>
        ${orderDetails.shippingAddress.country}
      </p>
      
      <p>We will notify you when your order ships.</p>
      <p>Best regards,<br>John Galvin Fine Art</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendAdminNotification(orderDetails: OrderDetails) {
  const itemsList = orderDetails.items
    .map(item => `${item.title} x ${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_USER,
    subject: `New Order - ${orderDetails.orderId}`,
    html: `
      <h1>New Order Received</h1>
      <p>Order ID: <strong>${orderDetails.orderId}</strong></p>
      
      <h2>Customer:</h2>
      <p>${orderDetails.customerName}<br>${orderDetails.customerEmail}</p>
      
      <h2>Items:</h2>
      <pre>${itemsList}</pre>
      
      <p><strong>Total: €${orderDetails.total.toFixed(2)}</strong></p>
      
      <h2>Shipping Address:</h2>
      <p>
        ${orderDetails.shippingAddress.address}<br>
        ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.postalCode}<br>
        ${orderDetails.shippingAddress.country}
      </p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
