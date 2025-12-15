import { NextResponse } from "next/server";
import { extractLeadInfo } from "@/lib/lead-extractor";
import { sendLeadNotification } from "@/lib/email-service";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Invalid messages format" },
                { status: 400 }
            );
        }

        // Extract lead information from conversation
        const leadInfo = extractLeadInfo(messages);

        if (!leadInfo) {
            return NextResponse.json(
                { error: "Could not extract lead information (email required)" },
                { status: 400 }
            );
        }

        // Send email notification to admin
        const emailSent = await sendLeadNotification(leadInfo);

        if (!emailSent) {
            return NextResponse.json(
                { error: "Failed to send notification email" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Lead submitted successfully"
        });

    } catch (error) {
        console.error("Submit lead error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
