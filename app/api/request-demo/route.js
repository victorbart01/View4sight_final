import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to validate environment variables
function validateEnvVars() {
  const requiredVars = [
    'EMAIL_SERVER_HOST',
    'EMAIL_SERVER_PORT',
    'EMAIL_SERVER_USER',
    'EMAIL_SERVER_PASSWORD',
    'EMAIL_FROM',
  ];
  const missingVars = requiredVars.filter((v) => !process.env[v]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

export async function POST(request) {
  try {
    validateEnvVars();

    const body = await request.json();
    const { firstName, lastName, email, phone, company, message } = body;

    // Basic input validation
    if (!firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER, // Sending to yourself
      replyTo: email,
      subject: `New Demo Request from ${firstName} ${lastName}`,
      html: `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Demo request sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error handling demo request:', error.message);
    if (error.message.includes('Missing required environment variables')) {
        return NextResponse.json({ error: `Server configuration error: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}
