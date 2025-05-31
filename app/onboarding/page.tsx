"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, Upload, Sparkles, Target, User, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    location: "",
    email: "",
    goalName: "",
    goalAmount: "",
    goalDate: "",
    goalCategory: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handleComplete = () => {
    // In a real app, you would save the user data here
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2 border-primary/20 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white text-center">
                <h1 className="text-2xl font-bold mb-2">Begin Your Money Adventure!</h1>
                <p className="text-white/80">Track expenses, find jobs, and reach your goals - all in one place</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse-slow"></div>
                    <img
                      src="/placeholder.svg?height=160&width=160"
                      alt="Teen with money"
                      className="relative z-10 rounded-full"
                    />
                    <div className="absolute -top-2 -right-2 bg-secondary text-white p-1 rounded-full z-20">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Your financial adventure awaits! No real names required.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2 border-primary/20">
              <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                <h2 className="text-xl font-bold flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Create Your Character
                </h2>
                <div className="w-full bg-white/10 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: "33%" }}></div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Choose a Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="CoolSaver123"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Your Age</Label>
                  <Select value={formData.age} onValueChange={(value) => handleSelectChange("age", value)}>
                    <SelectTrigger id="age">
                      <SelectValue placeholder="Select your age" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 7 }, (_, i) => i + 13).map((age) => (
                        <SelectItem key={age} value={age.toString()}>
                          {age}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    Zip Code
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="90210"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-muted-foreground">For account recovery only</p>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  >
                    Next: Set Your Quest
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground">Your information stays private and secure</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2 border-primary/20">
              <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                <h2 className="text-xl font-bold flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Set Your First Quest
                </h2>
                <div className="w-full bg-white/10 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: "66%" }}></div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="goalName">What are you saving for?</Label>
                  <Input
                    id="goalName"
                    name="goalName"
                    placeholder="New skateboard, concert tickets, etc."
                    value={formData.goalName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goalAmount">Target Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="goalAmount"
                      name="goalAmount"
                      type="number"
                      placeholder="150"
                      className="pl-7"
                      value={formData.goalAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goalDate">Target Date</Label>
                  <Input id="goalDate" name="goalDate" type="date" value={formData.goalDate} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goalCategory">Category</Label>
                  <Select
                    value={formData.goalCategory}
                    onValueChange={(value) => handleSelectChange("goalCategory", value)}
                  >
                    <SelectTrigger id="goalCategory">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Tech</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center">
                    <Upload className="mr-1 h-4 w-4" />
                    Add an Image (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="goal-image"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          console.log("Image selected:", file.name)
                          // In a real app, you would upload the file here
                        }
                      }}
                    />
                    <label htmlFor="goal-image" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mt-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={handleComplete}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  >
                    Create My Adventure
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
