import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, service, project, budget } = await req.json();

  // Validate required fields
  if (!name || !email || !service || !project || !budget) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // Send email using Resend
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing Resend API key.' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['syntaxleap@gmail.com'],
        subject: `Contact Us: ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Project Description:</strong></p>
          <p>${project}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 500 });
    }

    // Send auto-reply to user
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SyntaxLeap <syntaxleap@gmail.com>', // must be your verified domain
          to: [email],
          subject: "We've received your message!",
          html: `<p>Hi ${name},</p>
                 <p>Thank you for contacting SyntaxLeap! We’ve received your message and will get back to you within 24 hours.</p>
                 <p>Best,<br/>The SyntaxLeap Team</p>`
        }),
      });
    } catch (autoReplyError) {
      // Optionally log auto-reply error, but do not block main response
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error.' }, { status: 500 });
  }
} 