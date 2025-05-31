"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Sparkles, ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const suggestedQuestions = [
  "How much should I save from my allowance?",
  "Is buying a new gaming console worth it?",
  "How can I earn money with my design skills?",
  "Help me spend less on food",
  "What's the best way to save for concert tickets?",
]

export function AiCoach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi there, Money Master! I'm your BudgetBuddy AI Coach. I'm here to help you level up your money game! What financial questions can I help with today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Based on your spending patterns, I recommend saving 20% of your allowance each week. This will help you reach your goals faster!",
        "Looking at your recent purchases, I notice you spend about $15/week on snacks. Try meal prepping to cut this in half!",
        "Great question! For your age, a good rule is to save 30% of any money you receive. This builds good habits early.",
        "I analyzed your spending and noticed you tend to make impulse purchases when stressed about school. Try setting a 24-hour rule before buying non-essentials.",
        "Based on your current saving rate, you'll reach your goal in about 8 weeks. Want to explore ways to speed this up?",
      ]

      const aiMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)]">
      <Card className="flex-1 flex flex-col border-2 border-primary/20 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-primary" />
              Money Mentor
            </CardTitle>
            <Badge className="bg-primary/20 text-primary">
              <Sparkles className="mr-1 h-3 w-3" />
              AI Powered
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-primary/20"
                  }`}
                >
                  <div className="mr-2 mt-0.5">
                    {message.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5 text-primary" />}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground/70">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] rounded-lg p-3 bg-muted border border-primary/20">
                  <div className="mr-2 mt-0.5">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
                      <div
                        className="h-2 w-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="h-2 w-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask your money question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-xs text-muted-foreground mb-1">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-4 border-2 border-primary/20 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
          <CardTitle className="text-base flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-primary" />
            Coach Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <h3 className="text-sm font-bold">Your Financial Habits</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  You're great at tracking expenses consistently
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></span>
                  Your saving rate is 10% (goal: 20%)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                  Food spending increased 15% this week
                </li>
              </ul>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" size="sm" className="text-xs">
                <ThumbsUp className="mr-1 h-3 w-3" />
                Helpful
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <ThumbsDown className="mr-1 h-3 w-3" />
                Not Helpful
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
