import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    // Enhanced logging with more details
    const timestamp = new Date().toISOString()
    const submissionId = `CONTACT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    console.log("=== CONTACT FORM SUBMISSION (SIMPLE API) ===")
    console.log("Submission ID:", submissionId)
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company || "Not provided")
    console.log("Message Length:", message.length, "characters")
    console.log("Message:", message)
    console.log("Timestamp:", timestamp)
    console.log("IP:", request.headers.get("x-forwarded-for") || "Unknown")
    console.log("User-Agent:", request.headers.get("user-agent") || "Unknown")
    console.log("Referer:", request.headers.get("referer") || "Unknown")
    console.log("===========================================")

    // You could also write to a file here if needed
    // await writeToFile(submissionData)

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. We'll get back to you within 24 hours.",
      submissionId: submissionId,
      timestamp: timestamp,
    })
  } catch (error) {
    console.error("❌ Error in simple contact API:", error)
    return NextResponse.json(
      {
        error: "Sorry, there was an error processing your request.",
      },
      { status: 500 },
    )
  }
}
