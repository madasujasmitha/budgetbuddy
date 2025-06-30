"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, DollarSign, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BackButton } from "@/components/ui/back-button"

export default function RegisterPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    newsletter: true,
  })

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create safe user object without Object.entries
  const createSafeUser = (userData: any) => {
    const safeUser = {
      id: userData.id || "user_" + Date.now(),
      username: userData.username || "BudgetHero",
      email: userData.email || "demo@budgetbuddy.com",
      firstName: userData.firstName || "Budget",
      lastName: userData.lastName || "Hero",
      level: userData.level || 1,
      xp: userData.xp || 0,
      coins: userData.coins || 100,
      totalSaved: userData.totalSaved || 0,
      goalsCompleted: userData.goalsCompleted || 0,
      joinDate: userData.joinDate || new Date().toISOString(),
      avatar: userData.avatar || "starter",
      achievements: userData.achievements || ["welcome_aboard"],
      currentStreak: userData.currentStreak || 0,
      isPrototype: true,
      isNewUser: true,
      stats: {
        totalTransactions: 0,
        savingsRate: 0,
        budgetAccuracy: 0,
        goalCompletionRate: 0,
      },
      preferences: {
        theme: "light",
        notifications: true,
        currency: "USD",
      },
    }

    // Ensure all values are not null or undefined
    const cleanUser = {}
    const keys = [
      "id",
      "username",
      "email",
      "firstName",
      "lastName",
      "level",
      "xp",
      "coins",
      "totalSaved",
      "goalsCompleted",
      "joinDate",
      "avatar",
      "achievements",
      "currentStreak",
      "isPrototype",
      "isNewUser",
      "stats",
      "preferences",
    ]

    keys.forEach((key) => {
      if (safeUser[key] !== null && safeUser[key] !== undefined) {
        cleanUser[key] = safeUser[key]
      } else {
        // Provide safe defaults
        if (key === "achievements") {
          cleanUser[key] = []
        } else if (typeof safeUser[key] === "number") {
          cleanUser[key] = 0
        } else if (typeof safeUser[key] === "object") {
          cleanUser[key] = {}
        } else {
          cleanUser[key] = ""
        }
      }
    })

    return cleanUser
  }

  // Password strength calculation
  const getPasswordStrength = (password: string) => {
    if (!password) return 0
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    return strength
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const getStrengthLabel = (strength: number) => {
    if (strength === 0) return ""
    if (strength <= 25) return "Weak"
    if (strength <= 50) return "Fair"
    if (strength <= 75) return "Good"
    return "Strong"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isClient) return

    setIsLoading(true)
    setError("")

    try {
      // Validation
      if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill in all fields")
        setIsLoading(false)
        return
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        setIsLoading(false)
        return
      }

      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long")
        setIsLoading(false)
        return
      }

      if (!formData.terms) {
        setError("Please accept the terms and conditions")
        setIsLoading(false)
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address")
        setIsLoading(false)
        return
      }

      // Simulate registration process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create safe user data
      const userData = createSafeUser({
        username: formData.username,
        email: formData.email,
      })

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("budgetbuddy_logged_in", "true")
          localStorage.setItem("budgetbuddy_user", JSON.stringify(userData))
          localStorage.setItem(
            "budgetbuddy_session",
            JSON.stringify({
              loginTime: new Date().toISOString(),
              sessionId: `session_${Date.now()}`,
              isNewUser: true,
              newsletter: formData.newsletter,
              registrationMethod: "dedicated_register",
            }),
          )

          // Force navigation
          window.location.href = "/onboarding"
        } catch (storageError) {
          console.error("Storage error:", storageError)
          setError("Unable to save registration data. Please try again.")
        }
      }
    } catch (error) {
      console.error("Registration error:", error)
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <BackButton className="mb-6" />

        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="rounded-full bg-primary p-2">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">BudgetBuddy</h1>
            </div>
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>Start your financial adventure today</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Choose a unique username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Password strength:</span>
                      <span
                        className={`font-medium ${
                          passwordStrength <= 25
                            ? "text-red-500"
                            : passwordStrength <= 50
                              ? "text-yellow-500"
                              : passwordStrength <= 75
                                ? "text-blue-500"
                                : "text-green-500"
                        }`}
                      >
                        {getStrengthLabel(passwordStrength)}
                      </span>
                    </div>
                    <Progress value={passwordStrength} className="h-2" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="flex items-center text-green-600 text-sm">
                    <Check className="h-4 w-4 mr-1" />
                    Passwords match
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked as boolean }))}
                    disabled={isLoading}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm font-normal leading-5">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))}
                    disabled={isLoading}
                  />
                  <Label htmlFor="newsletter" className="text-sm font-normal">
                    Send me financial tips and updates
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
