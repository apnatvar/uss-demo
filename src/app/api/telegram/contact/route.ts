import { NextRequest, NextResponse } from "next/server";

// Set these in your .env.local
// TELEGRAM_BOT_TOKEN=123456:ABC-YourBotToken
// TELEGRAM_CHAT_ID=123456789  (user/group/channel ID where you want to receive leads)

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, inquiry } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId   = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const text =
      `📞 *New Call Back Request*\n` +
      `*Name:* ${escapeMd(name)}\n` +
      `*Phone:* ${escapeMd(phone)}\n` +
      `*Email:* ${escapeMd(email)}\n` +
      (inquiry ? `*Inquiry:* ${escapeMd(inquiry)}` : "");

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json({ error: "Telegram error", detail: body }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("api-error", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

// Minimal MarkdownV2 escaping for Telegram
function escapeMd(s: string): string {
  return s.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}
