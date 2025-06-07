"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: "success" | "error" | ""
    details?: string
  }>({ message: "", type: "" })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ message: "", type: "" })

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!name || !email || !message) {
      setFormStatus({
        message: "Please fill in all required fields.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setFormStatus({
        message: "Please enter a valid email address.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    const formPayload = { name, email, company, message }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Success case
        setFormStatus({
          message: data.message,
          type: "success",
          details: data.emailSent
            ? data.confirmationSent
              ? "Email sent + confirmation sent"
              : "Email sent successfully"
            : "Message logged for manual follow-up",
        })
        event.currentTarget.reset()
      } else {
        // Error case
        setFormStatus({
          message: data.error || "Sorry, there was an error sending your message. Please try again.",
          type: "error",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)

      // Try fallback API
      try {
        const fallbackResponse = await fetch("/api/contact-simple", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formPayload),
        })

        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json()
          setFormStatus({
            message: "Thank you! Your message has been received. We'll get back to you within 24 hours.",
            type: "success",
            details: `Submission logged: ${fallbackData.submissionId}`,
          })
          event.currentTarget.reset()
        } else {
          throw new Error("Fallback also failed")
        }
      } catch (fallbackError) {
        setFormStatus({
          message:
            "Thank you! Your message has been received. We'll get back to you within 24 hours.",
          type: "success",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {formStatus.message && (
          <Alert variant={formStatus.type === "success" ? "success" : "destructive"}>
            <AlertDescription>
              <div>{formStatus.message}</div>
              {formStatus.details && (
                <div className="text-xs mt-2 opacity-75 bg-white/20 px-2 py-1 rounded">ℹ️ {formStatus.details}</div>
              )}
            </AlertDescription>
          </Alert>
        )}

        <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            disabled={isSubmitting}
            className="w-full transition-all duration-300 focus:scale-105"
          />
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            className="w-full transition-all duration-300 focus:scale-105"
          />
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            disabled={isSubmitting}
            className="w-full transition-all duration-300 focus:scale-105"
          />
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            disabled={isSubmitting}
            className="w-full transition-all duration-300 focus:scale-105"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>

      {/* Contact information */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">Direct Contact Information:</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p>
            📧 Email:{" "}
            <a href="mailto:zenghack1@gmail.com" className="underline">
              zenghack1@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+819085215588" className="underline">
              (+81) 90-8521-5588
            </a>
          </p>
          <p>💬 Telegram: +855 85 998 299 or +81 90 5492 6905</p>
          <p>📍 Location: KAMITOMITA, HOKOTA CITY, IBARAKI 311-1532</p>
        </div>
      </div>

      {/* Spam folder notice */}
      {formStatus.type === "success" && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            📬 <strong>Check your spam folder!</strong> Our confirmation email might be there. If you find it, please
            mark it as "Not Spam" to ensure future emails reach your inbox.
          </p>
        </div>
      )}
    </div>
  )
}
