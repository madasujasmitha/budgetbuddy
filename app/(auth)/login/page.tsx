"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BackButton } from "@/components/ui/back-button"

export default function LoginPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create safe user object without Object.entries
  const createSafeUser = (userData: Record<string, any>) => {
    const defaultUser = {
      id: "user_" + Date.now(),
      username: "BudgetHero",
      email: "demo@budgetbuddy.com",
      firstName: "Budget",
      lastName: "Hero",
      level: 5,
      xp: 1250,
      coins: 850,
      totalSaved: 2500,
      goalsCompleted: 3,
      joinDate: new Date().toISOString(),
      avatar: "hero",
      achievements: ["first_save", "goal_crusher", "money_master"],
      currentStreak: 7,
      isPrototype: true,
      stats: {
        totalTransactions: 45,
        savingsRate: 0.25,
        budgetAccuracy: 0.85,
        goalCompletionRate: 0.75,
      },
      preferences: {
        theme: "light",
        notifications: true,
        currency: "USD",
      },
    }

    // Safely merge user data
    const safeUser = { ...defaultUser }

    if (userData && typeof userData === "object") {
      if (userData.id) safeUser.id = userData.id
      if (userData.username) safeUser.username = userData.username
      if (userData.email) safeUser.email = userData.email
      if (userData.firstName) safeUser.firstName = userData.firstName
      if (userData.lastName) safeUser.lastName = userData.lastName
      if (typeof userData.level === "number") safeUser.level = userData.level
      if (typeof userData.xp === "number") safeUser.xp = userData.xp
      if (typeof userData.coins === "number") safeUser.coins = userData.coins
      if (typeof userData.totalSaved === "number") safeUser.totalSaved = userData.totalSaved
      if (typeof userData.goalsCompleted === "number") safeUser.goalsCompleted = userData.goalsCompleted
      if (userData.joinDate) safeUser.joinDate = userData.joinDate
      if (userData.avatar) safeUser.avatar = userData.avatar
      if (Array.isArray(userData.achievements)) safeUser.achievements = userData.achievements
      if (typeof userData.currentStreak === "number") safeUser.currentStreak = userData.currentStreak
    }

    return safeUser
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => {
      const newData = { ...prev }
      if (type === "checkbox") {
        newData[name] = checked
      } else {
        newData[name] = value
      }
      return newData
    })
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isClient) return

    setIsLoading(true)
    setError("")

    try {
      // Basic validation
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields")
        setIsLoading(false)
        return
      }

      // Simulate login process
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create safe user data
      const userData = createSafeUser({
        username: formData.email.split("@")[0] || "demo_user",
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
              remember: formData.remember,
              loginMethod: "dedicated_login",
            }),
          )

          // Force navigation
          window.location.href = "/dashboard"
        } catch (storageError) {
          console.error("Storage error:", storageError)
          setError("Unable to save login data. Please try again.")
        }
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("Login failed. Please check your credentials and try again.")
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
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>Sign in to continue your financial adventure</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email or Username</Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email or username"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => {
                      const newData = { ...prev }
                      newData.remember = checked as boolean
                      return newData
                    })
                  }
                  disabled={isLoading}
                />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me for 30 days
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Create one now
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                By signing in, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo credentials */}
        <Card className="mt-4 bg-muted/50">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Demo:</strong> Use any email and password to sign in
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
