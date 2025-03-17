import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, service } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }

    // Create a nodemailer transporter 
    // NOTE: You will need to set up real credentials in a .env file
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.example.com',
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true' ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@kingselectrical.com',
      to: process.env.EMAIL_TO || 'info@kingselectrical.com',
      subject: `New Contact Form Submission: ${service || 'General Inquiry'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service: ${service || 'Not specified'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    // In development, this will likely fail without proper SMTP credentials
    // For testing, you can comment out the actual sending
    await transporter.sendMail(mailOptions);

    // Return success
    return res.status(200).json({ success: true, message: 'Your message has been sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
} 