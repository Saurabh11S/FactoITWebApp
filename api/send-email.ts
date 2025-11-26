import sgMail from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Email template for user confirmation
function getUserEmailTemplate(name: string, subject: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Facto Technologies</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0f;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0f;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);">
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(176, 38, 255, 0.1) 100%);">
              <div style="margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #00d4ff 0%, #b026ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                  Facto Technologies
                </h1>
              </div>
              <div style="width: 2px; height: 40px; background: linear-gradient(135deg, #00d4ff 0%, #b026ff 100%); margin: 0 auto;"></div>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; font-size: 24px; font-weight: bold; color: #ffffff;">
                Thank You, ${name}!
              </h2>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #e0e0e0;">
                We've received your message and will get back to you as soon as possible.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background: rgba(0, 212, 255, 0.05); border-left: 3px solid #00d4ff; border-radius: 8px;">
                <p style="margin: 0 0 10px; font-size: 14px; font-weight: 600; color: #00d4ff; text-transform: uppercase; letter-spacing: 1px;">
                  Your Message Details
                </p>
                <p style="margin: 5px 0; font-size: 14px; color: #b0b0b0;"><strong style="color: #ffffff;">Subject:</strong> ${subject}</p>
                <p style="margin: 5px 0; font-size: 14px; color: #b0b0b0;"><strong style="color: #ffffff;">Message:</strong></p>
                <p style="margin: 10px 0 0; font-size: 14px; line-height: 1.6; color: #e0e0e0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="margin: 30px 0 0; font-size: 14px; line-height: 1.6; color: #b0b0b0;">
                Our team typically responds within 24-48 hours. If your inquiry is urgent, please feel free to reach out directly.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background: rgba(0, 212, 255, 0.05); border-top: 1px solid rgba(0, 212, 255, 0.2);">
              <p style="margin: 0 0 10px; font-size: 14px; color: #ffffff; font-weight: 600;">
                Facto Technologies
              </p>
              <p style="margin: 0 0 10px; font-size: 12px; color: #b0b0b0;">
                Empowering businesses with modern, scalable technology solutions
              </p>
              <p style="margin: 10px 0 0; font-size: 12px; color: #808080;">
                © ${new Date().getFullYear()} Facto Technologies Pvt Ltd. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Email template for company notification
function getCompanyEmailTemplate(name: string, email: string, subject: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - Facto Technologies</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0f;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0f;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);">
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(176, 38, 255, 0.1) 100%);">
              <div style="margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #00d4ff 0%, #b026ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                  Facto Technologies
                </h1>
              </div>
              <div style="width: 2px; height: 40px; background: linear-gradient(135deg, #00d4ff 0%, #b026ff 100%); margin: 0 auto;"></div>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; font-size: 24px; font-weight: bold; color: #ffffff;">
                New Contact Form Submission
              </h2>
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6; color: #e0e0e0;">
                You have received a new message from your website contact form.
              </p>
              
              <div style="margin: 20px 0; padding: 20px; background: rgba(0, 212, 255, 0.05); border-left: 3px solid #00d4ff; border-radius: 8px;">
                <p style="margin: 0 0 15px; font-size: 14px; font-weight: 600; color: #00d4ff; text-transform: uppercase; letter-spacing: 1px;">
                  Contact Information
                </p>
                <p style="margin: 8px 0; font-size: 14px; color: #b0b0b0;"><strong style="color: #ffffff;">Name:</strong> ${name}</p>
                <p style="margin: 8px 0; font-size: 14px; color: #b0b0b0;"><strong style="color: #ffffff;">Email:</strong> <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a></p>
                <p style="margin: 8px 0; font-size: 14px; color: #b0b0b0;"><strong style="color: #ffffff;">Subject:</strong> ${subject}</p>
              </div>
              
              <div style="margin: 20px 0; padding: 20px; background: rgba(176, 38, 255, 0.05); border-left: 3px solid #b026ff; border-radius: 8px;">
                <p style="margin: 0 0 15px; font-size: 14px; font-weight: 600; color: #b026ff; text-transform: uppercase; letter-spacing: 1px;">
                  Message
                </p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e0e0e0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin: 30px 0 0; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 8px; text-align: center;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #00d4ff 0%, #b026ff 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  Reply to ${name}
                </a>
                <p style="margin: 10px 0 0; font-size: 12px; color: #b0b0b0;">
                  Or reply directly to: <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a>
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background: rgba(0, 212, 255, 0.05); border-top: 1px solid rgba(0, 212, 255, 0.2);">
              <p style="margin: 0 0 10px; font-size: 14px; color: #ffffff; font-weight: 600;">
                Facto Technologies
              </p>
              <p style="margin: 0 0 10px; font-size: 12px; color: #b0b0b0;">
                Empowering businesses with modern, scalable technology solutions
              </p>
              <p style="margin: 10px 0 0; font-size: 12px; color: #808080;">
                © ${new Date().getFullYear()} Facto Technologies Pvt Ltd. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({ error: 'SendGrid API key not configured' });
    }

    // Using Gmail address for sending emails
    const fromEmail = 'factoitinfo@gmail.com'; // FROM address (must be verified in SendGrid)
    const replyToEmail = 'factoitinfo@gmail.com'; // REPLY-TO address
    const notificationEmail = 'factoitinfo@gmail.com'; // Where to send notifications

    // Prepare emails
    const emails = [
      // Email to user (confirmation)
      {
        to: email,
        from: fromEmail, // Must be verified in SendGrid
        replyTo: replyToEmail,
        subject: `Thank you for contacting Facto Technologies - ${subject}`,
        html: getUserEmailTemplate(name, subject, message),
      },
      // Email to company (notification)
      {
        to: notificationEmail, // Send notifications to support email
        from: fromEmail,
        replyTo: email, // Reply directly to the user
        subject: `New Contact Form: ${subject}`,
        html: getCompanyEmailTemplate(name, email, subject, message),
      },
    ];

    // Send emails
    await sgMail.send(emails);

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error: any) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.response?.body?.errors || error.message 
    });
  }
}

