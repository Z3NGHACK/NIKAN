import { NextResponse } from "next/server"

// Helper function to send email with timeout
async function sendEmailWithTimeout(emailData: any, timeoutMs = 5000) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

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

    // Always log the submission first (so we never lose it)
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company || "Not provided")
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("IP:", request.headers.get("x-forwarded-for") || "::1")
    console.log("User-Agent:", request.headers.get("user-agent") || "Unknown")
    console.log("=====================================")

    // Business email HTML
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #1e40af;">
            This email was sent from your website contact form.
          </p>
        </div>
      </div>
    `

    // User confirmation email HTML
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Thank you for your message!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <div style="margin: 20px 0; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #1e40af; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold;">Your message:</p>
          <p style="margin: 10px 0 0 0; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? "..." : ""}"</p>
        </div>
        <p>Best regards,<br>Your Company Team</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280;">
          If you need immediate assistance, please contact us at:<br>
          📧 zenghack1@gmail.com<br>
          📞 (+81) 90-8521-5588
        </p>
      </div>
    `

    // Try to send emails with shorter timeout
    let emailSent = false
    let emailError = null

    try {
      console.log("Attempting to send business email...")

      const businessEmailResponse = await sendEmailWithTimeout(
        {
          from: "wewewe@resend.dev",
          to: ["zenghack1@gmail.com"],
          subject: `New Contact Form Submission from ${name}`,
          html: businessEmailHtml,
        },
        3000,
      ) // 3 second timeout

      if (businessEmailResponse.ok) {
        console.log("✅ Business email sent successfully")
        emailSent = true

        // Try to send confirmation email (don't wait too long for this)
        try {
          console.log("Attempting to send confirmation email...")
          const userEmailResponse = await sendEmailWithTimeout(
            {
              from: "onboarding@resend.dev",
              to: [email],
              subject: "Thank you for contacting us",
              html: userEmailHtml,
            },
            2000,
          ) // 2 second timeout

          if (userEmailResponse.ok) {
            console.log("✅ Confirmation email sent successfully")
          } else {
            console.log("⚠️ Confirmation email failed, but continuing...")
          }
        } catch (confirmationError) {
          console.log("⚠️ Confirmation email timeout/error, but continuing...")
        }
      } else {
        const errorData = await businessEmailResponse.json()
        emailError = errorData
        console.log("❌ Business email failed:", errorData)
      }
    } catch (fetchError) {
      emailError = fetchError
      console.log("❌ Email sending failed due to network/timeout:", fetchError)
    }

    // Always return success since we logged the submission
    if (emailSent) {
      console.log("📧 EMAIL SENT SUCCESSFULLY + LOGGED")
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        emailSent: true,
      })
    } else {
      console.log("📝 EMAIL FAILED BUT SUBMISSION LOGGED - WILL FOLLOW UP MANUALLY")
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been received. We'll get back to you within 24 hours.",
        emailSent: false,
        note: "Submission logged for manual follow-up",
      })
    }
  } catch (error) {
    console.error("❌ CRITICAL ERROR in contact API:", error)
    return NextResponse.json(
      {
        error: "Sorry, there was an error processing your request. Please try again or contact us directly.",
      },
      { status: 500 },
    )
  }
}
