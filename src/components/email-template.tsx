interface ContactEmailTemplateProps {
  name: string
  email: string
  company?: string
  message: string
}

export function ContactEmailTemplate({ name, email, company, message }: ContactEmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "#1e40af", borderBottom: "2px solid #e5e7eb", paddingBottom: "10px" }}>
        New Contact Form Submission
      </h2>

      <div style={{ backgroundColor: "#f9fafb", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
        <h3 style={{ color: "#374151", marginTop: "0" }}>Contact Details:</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        {company && (
          <p>
            <strong>Company:</strong> {company}
          </p>
        )}
      </div>

      <div style={{ backgroundColor: "#ffffff", padding: "20px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
        <h3 style={{ color: "#374151", marginTop: "0" }}>Message:</h3>
        <p style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#dbeafe", borderRadius: "8px" }}>
        <p style={{ margin: "0", fontSize: "14px", color: "#1e40af" }}>
          This email was sent from your website contact form.
        </p>
      </div>
    </div>
  )
}
