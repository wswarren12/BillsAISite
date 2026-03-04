interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export function ContactNotificationHtml({
  name,
  email,
  message,
}: ContactNotificationProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1e293b;">
  <div style="border-bottom: 3px solid #4f46e5; padding-bottom: 16px; margin-bottom: 24px;">
    <h1 style="margin: 0; font-size: 24px; color: #0f172a;">New Contact Form Submission</h1>
    <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">via billsclub.ai</p>
  </div>

  <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <p style="margin: 0 0 8px; font-size: 14px; color: #64748b;">From</p>
    <p style="margin: 0 0 16px; font-size: 16px; font-weight: 600;">${name}</p>

    <p style="margin: 0 0 8px; font-size: 14px; color: #64748b;">Email</p>
    <p style="margin: 0 0 16px; font-size: 16px;">
      <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
    </p>

    <p style="margin: 0 0 8px; font-size: 14px; color: #64748b;">Message</p>
    <p style="margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
  </div>

  <p style="font-size: 12px; color: #94a3b8; text-align: center;">
    Reply directly to this email to respond to ${name}.
  </p>
</body>
</html>
  `.trim();
}
