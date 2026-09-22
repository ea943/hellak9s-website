import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { isNonEmptyString, isValidEmail } from "@/lib/validate";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !isNonEmptyString(body.name) || !isValidEmail(body.email) || !isNonEmptyString(body.subject) || !isNonEmptyString(body.message)) {
    return NextResponse.json({ error: "Please fill out all required fields with a valid email." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "The contact form isn't connected to a database yet. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("contact_messages").insert({
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    subject: body.subject,
    message: body.message,
    topic: body.topic ?? null,
  });

  if (error) {
    return NextResponse.json({ error: "Something went wrong saving your message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
