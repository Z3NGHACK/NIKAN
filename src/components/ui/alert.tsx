import type React from "react"

interface AlertProps {
  children: React.ReactNode
  variant?: "default" | "destructive" | "success"
  className?: string
}

export function Alert({ children, variant = "default", className = "" }: AlertProps) {
  const variantClasses = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    destructive: "bg-red-50 border-red-200 text-red-800",
    success: "bg-green-50 border-green-200 text-green-800",
  }

  return (
    <div role="alert" className={`relative w-full rounded-lg border p-4 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

export function AlertTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>
}

export function AlertDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-sm ${className}`}>{children}</div>
}
