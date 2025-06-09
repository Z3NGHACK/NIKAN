"use server"

import { Resend } from "resend"
import { ContactEmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return {
      message: "Please fill in all required fields.",
      type: "error" as const,
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      message: "Please enter a valid email address.",
      type: "error" as const,
    }
  }

  try {
    // Send email to your business email
    await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>", // Replace with your verified domain
      to: ["nikantrading-jp@gmail.com"], // Your business email
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        company,
        message,
      }),
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Your Company <noreply@yourdomain.com>", // Replace with your verified domain
      to: [email],
      subject: "Thank you for contacting us",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Thank you for your message!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>Best regards,<br>Your Company Team</p>
        </div>
      `,
    })

    return {
      message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      type: "success" as const,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
      type: "error" as const,
    }
  }
}
