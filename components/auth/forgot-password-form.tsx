"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail } from "lucide-react"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Alert className="bg-primary/10 border-primary text-foreground">
        <AlertDescription className="text-center py-4">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Check your email</h3>
          <p>
            We've sent a password reset link to <span className="font-medium">{email}</span>. Please check your inbox
            and follow the instructions to reset your password.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Didn't receive an email? Check your spam folder or{" "}
            <button onClick={() => setIsSubmitted(false)} className="text-primary hover:underline">
              try again
            </button>
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background"
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Reset Password"}
      </Button>
    </form>
  )
}
