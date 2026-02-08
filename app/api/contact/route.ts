import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' }, 
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'hello@syntaxleap.com';
    const companyInfo = company ? `<p><strong>Company:</strong> ${company}</p>` : '';

    // Email 1: Send to SyntaxLeap team
    const teamEmailResult = await resend.emails.send({
      from: `SyntaxLeap <${fromEmail}>`,
      to: ['hello@syntaxleap.com'],
      subject: `New Contact Form: ${service} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0f9d9d 0%, #17d3c5 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 6px; }
            .label { font-weight: bold; color: #0f9d9d; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e0e0e0; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🚀 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value" style="font-size: 18px; font-weight: bold; color: #0f9d9d;">${service}</div>
              </div>
              
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              
              <div class="footer">
                <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Email 2: Send auto-reply to user
    const userEmailResult = await resend.emails.send({
      from: `SyntaxLeap <${fromEmail}>`,
      to: [email],
      subject: 'Thanks for reaching out - SyntaxLeap',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0f9d9d 0%, #17d3c5 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #0f9d9d; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; font-size: 13px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ We've Received Your Message!</h1>
            </div>
            <div class="content">
              <p>Hi <strong>${name}</strong>,</p>
              
              <p>Thank you for contacting <strong>SyntaxLeap</strong>! We've received your inquiry about <strong>${service}</strong>.</p>
              
              <p>Our team will review your message and get back to you <strong>within 24 hours</strong> with next steps.</p>
              
              <p>In the meantime, feel free to book a call directly with us:</p>
              
              <div style="text-align: center;">
                <a href="https://calendly.com/sarmadirfan78/30min" class="button" style="color: white;">📅 Schedule a Call</a>
              </div>
              
              <div class="footer">
                <p><strong>Contact Information:</strong></p>
                <p>
                  📧 Email: <a href="mailto:hello@syntaxleap.com">hello@syntaxleap.com</a><br>
                  📱 WhatsApp: <a href="https://wa.me/923368486356">+92 336 8486356</a><br>
                  📞 Phone: <a href="tel:+923247926879">+92 324 7926879</a>
                </p>
                <p style="margin-top: 20px;">
                  Best regards,<br>
                  <strong>The SyntaxLeap Team</strong><br>
                  <em>From MVP to Scale</em>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Check if both emails were sent successfully
    if (teamEmailResult.error) {
      console.error('Failed to send team email:', teamEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or contact us directly.' }, 
        { status: 500 }
      );
    }

    if (userEmailResult.error) {
      console.error('Failed to send user auto-reply:', userEmailResult.error);
      // Don't fail the request if auto-reply fails, but log it
    }

    return NextResponse.json({ 
      success: true,
      message: 'Your message has been sent successfully!'
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred. Please try again.' }, 
      { status: 500 }
    );
  }
}
