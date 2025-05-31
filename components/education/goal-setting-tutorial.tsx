"use client"

import { useState } from "react"
import {
  ChevronRight,
  ChevronLeft,
  Target,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface GoalSettingTutorialProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

const tutorialSteps = [
  {
    title: "Welcome to Goal Setting! 🎯",
    content: (
      <div className="text-center space-y-4">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
          <Target className="h-16 w-16 mx-auto text-primary mb-4" />
          <h3 className="text-lg font-bold mb-2">Let's Set Your First Goal!</h3>
          <p className="text-muted-foreground">
            Goals help you save money for things you really want. We'll teach you how to set SMART goals that you can
            actually achieve.
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-800">
            🏆 Fun Fact: People who write down their goals are 42% more likely to achieve them!
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "What Makes a SMART Goal? 🧠",
    content: (
      <div className="space-y-4">
        <p className="text-center text-muted-foreground mb-4">
          SMART goals are easier to achieve because they're clear and realistic:
        </p>
        <div className="space-y-3">
          {[
            { letter: "S", word: "Specific", desc: "Exactly what do you want?", example: "New skateboard" },
            { letter: "M", word: "Measurable", desc: "How much does it cost?", example: "$150" },
            {
              letter: "A",
              word: "Achievable",
              desc: "Can you realistically save this?",
              example: "Yes, with my allowance",
            },
            { letter: "R", word: "Relevant", desc: "Do you really want this?", example: "I love skateboarding" },
            { letter: "T", word: "Time-bound", desc: "When do you want it?", example: "In 3 months" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <Badge className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {item.letter}
              </Badge>
              <div className="flex-1">
                <p className="font-medium">{item.word}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <div className="text-xs text-primary font-medium">{item.example}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Breaking Down Your Goal 📊",
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="font-bold mb-2">Let's say you want a $150 skateboard in 3 months</h3>
          <p className="text-muted-foreground">Here's how to break it down:</p>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-bold text-lg">$150 ÷ 12 weeks</p>
                <p className="text-sm text-muted-foreground">= $12.50 per week</p>
              </div>
              <div>
                <Calendar className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-bold text-lg">3 months</p>
                <p className="text-sm text-muted-foreground">= 12 weeks to save</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-800 mb-2">💡 Pro Tips:</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Add 10% extra for unexpected costs ($165 total)</li>
            <li>• Save a bit more each week to reach your goal early</li>
            <li>• Track your progress weekly to stay motivated</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Staying Motivated 🚀",
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <TrendingUp className="h-12 w-12 mx-auto text-primary mb-4" />
          <h3 className="font-bold mb-2">Keep Your Momentum Going!</h3>
        </div>

        <div className="space-y-3">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">📸 Visualize Your Goal</h4>
              <p className="text-sm text-muted-foreground">
                Add a picture of what you're saving for. Seeing it daily keeps you motivated!
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">🎉 Celebrate Milestones</h4>
              <p className="text-sm text-muted-foreground">
                Celebrate when you reach 25%, 50%, and 75% of your goal. You've earned it!
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">👥 Share Your Progress</h4>
              <p className="text-sm text-muted-foreground">
                Tell friends and family about your goal. They can help keep you accountable!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg text-center">
          <p className="font-medium mb-2">Remember: Every dollar saved is a step closer to your dream! 💪</p>
        </div>
      </div>
    ),
  },
  {
    title: "You're Ready! 🎊",
    content: (
      <div className="text-center space-y-4">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
        <h3 className="text-xl font-bold">Congratulations!</h3>
        <p className="text-muted-foreground">
          You now know how to set SMART goals that you can actually achieve. Ready to create your first goal?
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
          <h4 className="font-bold mb-3">🎁 Tutorial Complete Rewards:</h4>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-primary text-white px-3 py-1">+50 XP</Badge>
            <Badge className="bg-accent text-white px-3 py-1">Goal Master Badge</Badge>
            <Badge className="bg-secondary text-white px-3 py-1">Smart Saver Title</Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          These rewards have been added to your profile. Now go set that first goal! 🚀
        </p>
      </div>
    ),
  },
]

export function GoalSettingTutorial({ isOpen, onClose, onComplete }: GoalSettingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
      onClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = ((currentStep + 1) / tutorialSteps.length) * 100

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{tutorialSteps[currentStep].title}</span>
            <Badge variant="outline">
              {currentStep + 1} of {tutorialSteps.length}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="min-h-[300px]">{tutorialSteps[currentStep].content}</div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
            >
              {currentStep === tutorialSteps.length - 1 ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Start Goal Setting!
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
