
import React from "react"

type ToasterProps = {
  className?: string
  toastOptions?: {
    classNames?: {
      toast?: string
      description?: string
      actionButton?: string
      cancelButton?: string
    }
  }
}

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <div
      className="toaster group"
      {...props}
    />
  )
}

// Simple toast function placeholder
const toast = {
  success: (message: string) => console.log('Success:', message),
  error: (message: string) => console.log('Error:', message),
  info: (message: string) => console.log('Info:', message),
}

export { Toaster, toast }
