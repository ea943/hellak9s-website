import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { isNonEmptyString, isValidEmail } from "@/lib/validate";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !isValidEmail(body.email) || !isNonEmptyString(body.phone)) {
    return NextResponse.json({ error: "Please provide a valid email and phone number." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "The franchise form isn't connected to a database yet. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("franchise_inquiries").insert({
    full_name: body.fullName ?? null,
    email: body.email,
    phone: body.phone,
    desired_location: body.desiredLocation ?? null,
    message: body.message ?? null,
  });

  if (error) {
    return NextResponse.json({ error: "Something went wrong submitting your request. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
