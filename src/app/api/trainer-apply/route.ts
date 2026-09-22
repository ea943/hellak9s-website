import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { isValidEmail, isNonEmptyString } from "@/lib/validate";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !isValidEmail(body.email) || !isNonEmptyString(body.phone)) {
    return NextResponse.json({ error: "Please provide a valid email and phone number." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "The application form isn't connected to a database yet. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("trainer_applications").insert({
    full_name: body.fullName ?? null,
    email: body.email,
    phone: body.phone,
    address: body.address ?? null,
    city: body.city ?? null,
    state: body.state ?? null,
    country: body.country ?? null,
    postal_code: body.postalCode ?? null,
    dog_experience: body.dogExperience ?? null,
    certifications: body.certifications ?? null,
    why_join: body.whyJoin ?? null,
  });

  if (error) {
    return NextResponse.json({ error: "Something went wrong submitting your application. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
