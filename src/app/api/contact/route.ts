import { NextResponse } from "next/server";
import { profile } from "@/lib/content";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    return NextResponse.json({ error: "Mail service is not configured" }, { status: 500 });
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const sentAt = new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(new Date());

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const initial = escapeHtml(name.charAt(0).toUpperCase());

  // Table-based layout with inline styles — the only markup email clients render reliably.
  const htmlContent = `<!doctype html>
<html lang="tr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7f6f1;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${safeName} portfolyo sitenden mesaj gönderdi.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f1;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:2px solid #101010;border-radius:20px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

        <tr><td style="background:#101010;padding:22px 28px;">
          <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.4px;">SY<span style="color:#c8f542;">.</span></span>
          <span style="color:rgba(255,255,255,0.55);font-size:13px;font-weight:600;float:right;padding-top:5px;">YENİ MESAJ</span>
        </td></tr>

        <tr><td style="padding:28px 28px 0 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="52" valign="top">
                <div style="width:44px;height:44px;background:#c8f542;border:2px solid #101010;border-radius:50%;text-align:center;line-height:44px;font-size:18px;font-weight:700;color:#101010;">${initial}</div>
              </td>
              <td valign="middle">
                <div style="font-size:17px;font-weight:700;color:#101010;">${safeName}</div>
                <a href="mailto:${safeEmail}" style="font-size:14px;color:#5b5b5b;text-decoration:none;">${safeEmail}</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:22px 28px 0 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f7f6f1;border-radius:14px;">
            <tr><td style="padding:18px 20px;font-size:15px;line-height:1.65;color:#252525;">${safeMessage}</td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:24px 28px 4px 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr><td style="background:#101010;border-radius:999px;">
              <a href="mailto:${safeEmail}?subject=Re:%20Portfolyo%20mesaj%C4%B1n" style="display:inline-block;padding:13px 30px;font-size:15px;font-weight:700;color:#c8f542;text-decoration:none;">Yanıtla →</a>
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:22px 28px 26px 28px;">
          <div style="border-top:1px solid #e6e4dc;padding-top:14px;font-size:12px;color:#8a8a8a;">
            ${sentAt} · selmanyildiz.vercel.app iletişim formu<br>
            Bu maili yanıtladığında cevabın doğrudan ${safeName} kişisine gider.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const textContent = [
    `YENİ PORTFOLYO MESAJI`,
    ``,
    `Gönderen: ${name} <${email}>`,
    `Tarih: ${sentAt}`,
    ``,
    `------------------------------------`,
    message,
    `------------------------------------`,
    ``,
    `Bu maili yanıtladığında cevabın doğrudan ${name} kişisine gider.`,
    `selmanyildiz.vercel.app iletişim formu`,
  ].join("\n");

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: `${name} · Portfolyo`, email: senderEmail },
      to: [{ email: profile.email, name: profile.name }],
      replyTo: { email, name },
      subject: `💬 ${name} — portfolyo üzerinden mesaj`,
      htmlContent,
      textContent,
    }),
  });

  if (!response.ok) {
    console.error("Brevo error:", response.status, await response.text());
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
