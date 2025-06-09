import { NextResponse } from "next/server"

// Helper function to send email with timeout
async function sendEmailWithTimeout(emailData: any, timeoutMs = 8000) {
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

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.log("❌ RESEND_API_KEY not found in environment variables")
      console.log(
        "Available env vars:",
        Object.keys(process.env).filter((key) => key.includes("RESEND")),
      )

      // Log submission even without API key
      console.log("=== CONTACT FORM SUBMISSION (NO API KEY) ===")
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Company:", company || "Not provided")
      console.log("Message:", message)
      console.log("Timestamp:", new Date().toISOString())
      console.log("===========================================")

      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been received. We'll get back to you within 24 hours.",
        emailSent: false,
        note: "API key not configured - submission logged for manual follow-up",
      })
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    // Always log the submission first
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
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Mail from ${name}</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
          <h2 style="margin: 0;">New Message Form Submission</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Received: ${new Date().toLocaleString()}</p>
        </div>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1e40af;">${email}</a></td>
            </tr>
            ${
              company
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            `
                : ""
            }
          </table>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; white-space: pre-wrap; line-height: 1.6;">${message}</div>
        </div

        <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #1e40af;">
            This email was sent from your website contact form.
          </p>
        </div>
      </body>
      </html>
    `

    // User confirmation email HTML
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for contacting us</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
          <h2 style="margin: 0;">Thank you for your message!</h2>
        </div>

        <div style="background-color: #ffffff; padding: 20px;">
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to us. We have successfully received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-left: 4px solid #1e40af; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #1e40af;">Your message:</p>
            <p style="margin: 10px 0 0 0; font-style: italic; color: #666;">"${message.substring(0, 200)}${message.length > 200 ? "..." : ""}"</p>
          </div>

          <p>If you need immediate assistance, please don't hesitate to contact us directly:</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:nikantrading-jp@gmail.com" style="color: #1e40af;">nikantrading-jp@gmail.com</a></p>
            <p style="margin: 5px 0;"><strong>📞 Phone:</strong> <a href="tel:+819085215588" style="color: #1e40af;">(+81) 90-8521-5588</a></p>
            <p style="margin: 5px 0;"><strong>💬 Telegram:</strong> +855 85 998 299 or +81 90 5492 6905</p>
          </div>

          <p>Best regards,<br><strong>Your Company Team</strong></p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            This is an automated confirmation email.
          </p>
        </div>
      </body>
      </html>
    `

    let emailSent = false
    let confirmationSent = false

    try {
      console.log("Attempting to send business email...")

      const businessEmailResponse = await sendEmailWithTimeout(
        {
          from: `NIKAN-${name}<onboarding@resend.dev>`,
          to: ["nikantrading-jp@gmail.com"],
          subject: `New Message: ${name} from ${company || "Website"} to NiKAN`,
          html: businessEmailHtml,
          reply_to: email,
        },
        10000, // 10 second timeout
      )

      if (businessEmailResponse.ok) {
        const businessResult = await businessEmailResponse.json()
        console.log("✅ Business email sent successfully:", businessResult.id)
        emailSent = true

        // Try to send confirmation email
        try {
          console.log("Attempting to send confirmation email...")
          const userEmailResponse = await sendEmailWithTimeout(
            {
              from: "Your Company <onboarding@resend.dev>",
              to: [email],
              subject: "Thank you for contacting us - We'll be in touch soon!",
              html: userEmailHtml,
            },
            8000,
          )

          if (userEmailResponse.ok) {
            const userResult = await userEmailResponse.json()
            console.log("✅ Confirmation email sent successfully:", userResult.id)
            confirmationSent = true
          } else {
            const userError = await userEmailResponse.json()
            console.log("⚠️ Confirmation email failed:", userError)
          }
        } catch (confirmationError) {
          console.log("⚠️ Confirmation email timeout/error:", confirmationError)
        }
      } else {
        const errorData = await businessEmailResponse.json()
        console.log("❌ Business email failed:", errorData)
      }
    } catch (fetchError) {
      console.log("❌ Email sending failed due to network/timeout:", fetchError)
    }

    // Return appropriate response
    if (emailSent) {
      console.log("📧 SUCCESS: Email sent and logged")
      return NextResponse.json({
        success: true,
        message: confirmationSent
          ? "Thank you! Your message has been sent successfully. Check your email for confirmation."
          : "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        emailSent: true,
        confirmationSent: confirmationSent,
      })
    } else {
      console.log("📝 PARTIAL SUCCESS: Logged but email failed")
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
