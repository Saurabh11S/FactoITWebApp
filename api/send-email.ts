import sgMail from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Escape HTML to prevent injection and formatting issues
function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Get logo URL for emails (using hosted URL to prevent Gmail clipping)
function getLogoUrl(): string {
  // Use hosted URL from Vercel deployment
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : (process.env.VERCEL ? `https://${process.env.VERCEL}` : 'https://factoitwebapp.vercel.app');
  
  // Logo is in public folder, accessible at root
  return `${baseUrl}/logo/Logo2.png`;
}

// Email template for user confirmation
function getUserEmailTemplate(name: string, subject: string, message: string) {
  const logoUrl = getLogoUrl();
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Facto Technologies</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0f;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0f;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #0f0f1a; border-radius: 12px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(176, 38, 255, 0.15) 100%);">
              <img src="${logoUrl}" alt="Facto Technologies" width="150" style="max-width: 150px; width: 150px; height: auto; display: block; margin: 0 auto 20px; border: 0;" />
              <h1 style="margin: 0 0 10px; font-size: 28px; font-weight: 700; color: #ffffff;">Facto Technologies</h1>
              <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #00d4ff 0%, #b026ff 100%); margin: 15px auto 0; border-radius: 2px;"></div>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 15px; font-size: 24px; font-weight: 700; color: #ffffff;">Thank You, ${safeName}!</h2>
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6; color: #d0d0d0;">We've received your message and will get back to you as soon as possible.</p>
              
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: rgba(0, 212, 255, 0.08); border-left: 4px solid #00d4ff; border-radius: 8px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 15px; font-size: 12px; font-weight: 700; color: #00d4ff; text-transform: uppercase; letter-spacing: 1px;">Your Message Details</p>
                    <p style="margin: 8px 0; font-size: 15px; line-height: 1.6; color: #d0d0d0;"><strong style="color: #ffffff;">Subject:</strong> ${safeSubject}</p>
                    <p style="margin: 8px 0 0; font-size: 15px; line-height: 1.6; color: #d0d0d0;"><strong style="color: #ffffff;">Message:</strong></p>
                    <div style="margin-top: 10px; padding: 15px; background: rgba(0, 0, 0, 0.2); border-radius: 6px; font-size: 15px; line-height: 1.7; color: #d0d0d0;">${safeMessage}</div>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: rgba(176, 38, 255, 0.05); border-radius: 8px;">
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #b0b0b0;"><strong style="color: #ffffff;">Response Time:</strong> Our team typically responds within <strong style="color: #00d4ff;">24-48 hours</strong>.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background: rgba(0, 212, 255, 0.05); border-top: 1px solid rgba(0, 212, 255, 0.2);">
              <p style="margin: 0 0 10px; font-size: 16px; color: #ffffff; font-weight: 700;">Facto Technologies</p>
              <p style="margin: 0 0 15px; font-size: 13px; color: #b0b0b0;">Empowering businesses with modern, scalable technology solutions</p>
              <p style="margin: 0; font-size: 11px; color: #808080;">© ${new Date().getFullYear()} Facto Technologies Pvt Ltd. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Email template for company notification
function getCompanyEmailTemplate(name: string, email: string, subject: string, message: string) {
  const logoUrl = getLogoUrl();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - Facto Technologies</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0f;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0f;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #0f0f1a; border-radius: 12px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(176, 38, 255, 0.15) 100%);">
              <img src="${logoUrl}" alt="Facto Technologies" width="150" style="max-width: 150px; width: 150px; height: auto; display: block; margin: 0 auto 20px; border: 0;" />
              <h1 style="margin: 0 0 10px; font-size: 28px; font-weight: 700; color: #ffffff;">Facto Technologies</h1>
              <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #00d4ff 0%, #b026ff 100%); margin: 15px auto 0; border-radius: 2px;"></div>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 15px; font-size: 24px; font-weight: 700; color: #ffffff;">New Contact Form Submission</h2>
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6; color: #d0d0d0;">You have received a new message from your website contact form.</p>
              
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: rgba(0, 212, 255, 0.08); border-left: 4px solid #00d4ff; border-radius: 8px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 15px; font-size: 12px; font-weight: 700; color: #00d4ff; text-transform: uppercase; letter-spacing: 1px;">Contact Information</p>
                    <p style="margin: 8px 0; font-size: 15px; line-height: 1.6; color: #d0d0d0;"><strong style="color: #ffffff;">Name:</strong> ${safeName}</p>
                    <p style="margin: 8px 0; font-size: 15px; line-height: 1.6; color: #d0d0d0;"><strong style="color: #ffffff;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #00d4ff; text-decoration: none;">${safeEmail}</a></p>
                    <p style="margin: 8px 0; font-size: 15px; line-height: 1.6; color: #d0d0d0;"><strong style="color: #ffffff;">Subject:</strong> ${safeSubject}</p>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: rgba(176, 38, 255, 0.08); border-left: 4px solid #b026ff; border-radius: 8px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 15px; font-size: 12px; font-weight: 700; color: #b026ff; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <div style="font-size: 15px; line-height: 1.7; color: #d0d0d0; background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 6px;">${safeMessage}</div>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 0; text-align: center;">
                    <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(safeSubject)}" style="display: inline-block; padding: 14px 35px; background: linear-gradient(135deg, #00d4ff 0%, #b026ff 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 15px;">Reply to ${safeName}</a>
                    <p style="margin: 15px 0 0; font-size: 13px; color: #b0b0b0;">Or reply directly to: <a href="mailto:${safeEmail}" style="color: #00d4ff; text-decoration: none; font-weight: 600;">${safeEmail}</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background: rgba(0, 212, 255, 0.05); border-top: 1px solid rgba(0, 212, 255, 0.2);">
              <p style="margin: 0 0 10px; font-size: 16px; color: #ffffff; font-weight: 700;">Facto Technologies</p>
              <p style="margin: 0 0 15px; font-size: 13px; color: #b0b0b0;">Empowering businesses with modern, scalable technology solutions</p>
              <p style="margin: 0; font-size: 11px; color: #808080;">© ${new Date().getFullYear()} Facto Technologies Pvt Ltd. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({ error: 'SendGrid API key not configured' });
    }

    const fromEmail = 'factoitinfo@gmail.com';
    const replyToEmail = 'factoitinfo@gmail.com';
    const notificationEmail = 'factoitinfo@gmail.com';

    const emails = [
      {
        to: email,
        from: fromEmail,
        replyTo: replyToEmail,
        subject: `Thank you for contacting Facto Technologies - ${subject}`,
        html: getUserEmailTemplate(name, subject, message),
      },
      {
        to: notificationEmail,
        from: fromEmail,
        replyTo: email,
        subject: `New Contact Form: ${subject}`,
        html: getCompanyEmailTemplate(name, email, subject, message),
      },
    ];

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
