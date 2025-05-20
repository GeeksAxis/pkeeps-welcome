import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = (await req.json()) as { email?: string };
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from("pre_orders")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ exists: !!data });
  } catch (error: unknown) {
    console.error("Error checking pre-order:", error);
    return NextResponse.json(
      { error: "Failed to check pre-order" },
      { status: 500 }
    );
  }
}