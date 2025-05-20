import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
// import Flutterwave from "flutterwave-node-v3";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const flw = new Flutterwave(
  process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
  process.env.NEXT_PUBLIC_FLUTTERWAVE_SECRET_KEY!
);

export async function POST(request: Request) {
  try {
    const body: { transaction_id: string; email: string; name: string } =
      await request.json();
    const { transaction_id, email, name } = body;

    if (!transaction_id || !email || !name) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: transaction_id, email, and name are required",
        },
        { status: 400 }
      );
    }

    // Verify transaction
    const response = await flw.Transaction.verify({ id: transaction_id });

    if (response.data.status === "successful") {
      console.log("Transaction verified successfully");
      // Insert into Supabase
      const { data, error } = await supabase.from("pre_orders").insert([
        {
          email: email,
          name: name,
          verified: true,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        message: "Transaction verified and recorded",
        data,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Transaction verification failed",
      },
      { status: 400 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
