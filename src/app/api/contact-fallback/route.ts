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
      return NextResponse.json({ error: "Please enter a valid eamail aaddress." }, { status: 400 })
    }

    // Log the contact form submission (you can later check your server logs)
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company || "Not provided")
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("=====================================")

    // For now, we'll just return success
    // You can manually check your server logs for submissions
    return NextResponse.json({
      success: true,
      message: "Your message has been received. We'll get back to you soon!",
    })
  } catch (error) {
    console.error("Error in fallback contact API:", error)
    return NextResponse.json(
      {
        error: "Sorry, there was an error processing your request.",
      },
      { status: 500 },
    )
  }
}
