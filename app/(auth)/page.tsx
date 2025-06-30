"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Award, Rocket, Target, Briefcase, Sparkles, ArrowRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  })
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  })

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Scroll to features section
  const scrollToFeatures = () => {
    if (typeof window !== "undefined") {
      const featuresSection = document.getElementById("features")
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setLoginData((prev) => {
      const newData = { ...prev }
      if (type === "checkbox") {
        newData[name] = checked
      } else {
        newData[name] = value
      }
      return newData
    })
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setRegisterData((prev) => {
      const newData = { ...prev }
      if (type === "checkbox") {
        newData[name] = checked
      } else {
        newData[name] = value
      }
      return newData
    })
  }

  // Create safe user object without Object.entries
  const createSafeUser = (userData: Record<string, any>) => {
    const defaultUser = {
      id: "user_" + Date.now(),
      username: "BudgetHero",
      email: "demo@budgetbuddy.com",
      firstName: "Budget",
      lastName: "Hero",
      level: 1,
      xp: 0,
      coins: 100,
      totalSaved: 0,
      goalsCompleted: 0,
      joinDate: new Date().toISOString(),
      avatar: "starter",
      achievements: ["welcome_aboard"],
      currentStreak: 0,
      isPrototype: true,
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
      if (userData.isNewUser) safeUser.isNewUser = userData.isNewUser
      if (userData.quickStart) safeUser.quickStart = userData.quickStart
    }

    return safeUser
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isClient) return

    setIsLoading(true)

    try {
      // Simulate login process
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create safe user data
      const userData = createSafeUser({
        username: loginData.email.split("@")[0] || "demo_user",
        email: loginData.email,
        level: 5,
        xp: 1250,
        coins: 850,
        totalSaved: 2500,
        goalsCompleted: 3,
        achievements: ["first_save", "goal_crusher", "money_master"],
        currentStreak: 7,
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
              remember: loginData.remember,
            }),
          )

          // Force navigation
          window.location.href = "/dashboard"
        } catch (storageError) {
          console.error("Storage error:", storageError)
          alert("Login failed. Please try again.")
        }
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isClient) return

    setIsLoading(true)

    try {
      // Validate form
      if (!registerData.terms) {
        alert("Please accept the terms and conditions")
        setIsLoading(false)
        return
      }

      // Simulate registration process
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create safe user data
      const userData = createSafeUser({
        username: registerData.username,
        email: registerData.email,
        level: 1,
        xp: 0,
        coins: 100,
        totalSaved: 0,
        goalsCompleted: 0,
        achievements: ["welcome_aboard"],
        currentStreak: 0,
        isNewUser: true,
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
            }),
          )

          // Force navigation
          window.location.href = "/onboarding"
        } catch (storageError) {
          console.error("Storage error:", storageError)
          alert("Registration failed. Please try again.")
        }
      }
    } catch (error) {
      console.error("Registration error:", error)
      alert("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartAdventure = async () => {
    if (!isClient) return

    setIsLoading(true)
    try {
      // Create safe user data
      const userData = createSafeUser({
        username: "new_adventurer",
        email: "adventurer@budgetbuddy.com",
        level: 1,
        xp: 0,
        coins: 100,
        quickStart: true,
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
              quickStart: true,
            }),
          )

          // Force navigation
          window.location.href = "/dashboard"
        } catch (storageError) {
          console.error("Storage error:", storageError)
          window.location.href = "/dashboard"
        }
      }
    } catch (error) {
      console.error("Start adventure error:", error)
      if (typeof window !== "undefined") {
        window.location.href = "/dashboard"
      }
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
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary p-1">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">BudgetBuddy</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <button onClick={scrollToFeatures} className="text-sm font-medium hover:text-primary">
            Features
          </button>
          <Link href="/testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
        </div>
        <Link href="/register">
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </Link>
      </header>

      <main>
        <section className="container mx-auto py-12 px-4 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Level Up Your Money Game with <span className="text-primary">BudgetBuddy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                The fun way for teens to master money, discover jobs, and achieve financial goals - all while earning XP
                and unlocking achievements!
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button
                  onClick={handleStartAdventure}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Starting..." : "Start Your Adventure"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/how-it-works">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1 text-primary" />
                  <span>Earn Achievements</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-1 text-primary" />
                  <span>Track Goals</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1 text-primary" />
                  <span>Find Jobs</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border shadow-lg p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email or Username</Label>
                      <Input
                        id="login-email"
                        name="email"
                        type="text"
                        placeholder="Enter your email or username"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        name="remember"
                        checked={loginData.remember}
                        onCheckedChange={(checked) =>
                          setLoginData((prev) => {
                            const newData = { ...prev }
                            newData.remember = checked as boolean
                            return newData
                          })
                        }
                      />
                      <Label htmlFor="remember" className="text-sm font-normal">
                        Remember me
                      </Label>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("register")}
                        className="text-primary hover:underline"
                      >
                        Register
                      </button>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-username">Username</Label>
                      <Input
                        id="register-username"
                        name="username"
                        type="text"
                        placeholder="Choose a username"
                        value={registerData.username}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input
                        id="register-password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        name="terms"
                        checked={registerData.terms}
                        onCheckedChange={(checked) =>
                          setRegisterData((prev) => {
                            const newData = { ...prev }
                            newData.terms = checked as boolean
                            return newData
                          })
                        }
                        required
                      />
                      <Label htmlFor="terms" className="text-sm font-normal">
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
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("login")}
                        className="text-primary hover:underline"
                      >
                        Login
                      </button>
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="features" className="bg-gradient-to-r from-primary/5 to-accent/5 py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Level Up Your Financial Skills</h2>
              <p className="text-muted-foreground mt-2">
                BudgetBuddy turns money management into an exciting adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Set Epic Quests</h3>
                  <p className="text-muted-foreground">
                    Create savings goals for things you want and track your progress with visual rewards.
                  </p>
                  <Link href="/features/goals">
                    <Button variant="link" className="mt-4">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Discover Job Quests</h3>
                  <p className="text-muted-foreground">
                    Find teen-friendly job opportunities that match your skills and interests.
                  </p>
                  <Link href="/features/jobs">
                    <Button variant="link" className="mt-4">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build Your Skill Tree</h3>
                  <p className="text-muted-foreground">
                    Level up skills that help you earn more and unlock new job opportunities.
                  </p>
                  <Link href="/features/skills">
                    <Button variant="link" className="mt-4">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">How BudgetBuddy Works</h2>
              <p className="text-muted-foreground mt-2">Your journey to financial mastery is just a few steps away</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Character creation interface showing avatar customization and profile setup"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Create Your Character</h3>
                <p className="text-muted-foreground">Sign up and customize your financial adventurer profile.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Goal setting interface with savings targets and quest creation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Set Your First Quest</h3>
                <p className="text-muted-foreground">Choose something you want to save for and create a goal.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Transaction tracking dashboard with XP rewards and level progression"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Track Your Adventures</h3>
                <p className="text-muted-foreground">Log your income and expenses to earn XP and level up.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Achievement gallery showing unlocked badges and completed challenges"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Unlock Achievements</h3>
                <p className="text-muted-foreground">Complete challenges and earn badges as you master money skills.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/register">
                <Button
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  size="lg"
                >
                  Start Your Journey
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-primary/5 to-accent/5 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Financial Adventure?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teens who are learning to save, earn, and manage money while having fun and earning
              rewards.
            </p>
            <Link href="/register">
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                size="lg"
              >
                Create Your Account
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <footer className="bg-primary/5 py-12 px-4 border-t border-muted-foreground/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="rounded-full bg-primary p-1">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold">BudgetBuddy</h1>
                </div>
                <p className="text-sm text-muted-foreground">Making money management fun and rewarding for teens.</p>
              </div>

              <div>
                <h3 className="font-bold mb-4">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/features/goals" className="hover:text-primary">
                      Goal Setting
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/jobs" className="hover:text-primary">
                      Job Discovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/skills" className="hover:text-primary">
                      Skill Building
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/journal" className="hover:text-primary">
                      Money Journal
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/about" className="hover:text-primary">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-primary">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-primary">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="hover:text-primary">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-muted-foreground/20 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} BudgetBuddy. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
