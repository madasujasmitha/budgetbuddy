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
                      src="data:image/jpeg;base64,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"
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
