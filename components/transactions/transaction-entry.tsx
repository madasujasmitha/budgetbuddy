"use client"

import type React from "react"

import { useState } from "react"
import { PlusCircle, MinusCircle, Calendar, Tag, Smile, SmilePlus, MinusIcon as SmileMinus, Meh } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const expenseCategories = [
  { value: "food", label: "Food & Drinks" },
  { value: "entertainment", label: "Entertainment" },
  { value: "shopping", label: "Shopping" },
  { value: "transport", label: "Transportation" },
  { value: "education", label: "Education" },
  { value: "tech", label: "Tech & Gadgets" },
  { value: "other", label: "Other" },
]

const incomeCategories = [
  { value: "allowance", label: "Allowance" },
  { value: "job", label: "Job" },
  { value: "gift", label: "Gift" },
  { value: "selling", label: "Selling Items" },
  { value: "other", label: "Other" },
]

const emotions = [
  { value: "excited", label: "Excited", icon: SmilePlus, description: "Thrilled about this transaction" },
  { value: "happy", label: "Happy", icon: Smile, description: "Feeling good about this" },
  { value: "neutral", label: "Neutral", icon: Meh, description: "Neither good nor bad" },
  { value: "anxious", label: "Anxious", icon: SmileMinus, description: "A bit worried about spending" },
  { value: "regret", label: "Regret", icon: Meh, description: "Wish I hadn't spent this" },
]

export function TransactionEntry() {
  const [transactionType, setTransactionType] = useState("expense")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [emotion, setEmotion] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [showXpAnimation, setShowXpAnimation] = useState(false)

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput])
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the transaction here
    console.log({
      type: transactionType,
      amount,
      category,
      description,
      date,
      emotion,
      tags,
    })

    // In a real app, you would analyze emotional patterns here
    if (emotion) {
      console.log(`Emotional insight: User feels ${emotion} about this ${transactionType}`)
    }

    // Show XP animation
    setShowXpAnimation(true)
    setTimeout(() => setShowXpAnimation(false), 2000)

    // Reset form
    setAmount("")
    setCategory("")
    setDescription("")
    setDate("")
    setEmotion("")
    setTags([])
  }

  return (
    <Card className="border-2 border-primary/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <CardTitle className="flex items-center">
          <PlusCircle className="mr-2 h-5 w-5 text-primary" />
          Add New Adventure
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <Tabs value={transactionType} onValueChange={setTransactionType} className="mb-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="expense" className="flex items-center">
                <MinusCircle className="mr-2 h-4 w-4" />
                Expense
              </TabsTrigger>
              <TabsTrigger value="income" className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Income
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="pl-7"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {(transactionType === "expense" ? expenseCategories : incomeCategories).map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="What was this for?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                Date
              </Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Tag className="mr-1 h-4 w-4" />
                Tags (Optional)
              </Label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Add a tag"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                />
                <Button type="button" variant="outline" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="flex items-center gap-1">
                      {tag}
                      <button
                        type="button"
                        className="ml-1 rounded-full hover:bg-muted p-0.5"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        ✕
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Smile className="mr-1 h-4 w-4" />
                How does this {transactionType === "expense" ? "purchase" : "income"} make you feel?
              </Label>
              <div className="grid grid-cols-5 gap-2">
                {emotions.map((emo) => (
                  <Button
                    key={emo.value}
                    type="button"
                    variant={emotion === emo.value ? "default" : "outline"}
                    className={`flex flex-col items-center p-2 h-auto ${
                      emotion === emo.value ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => setEmotion(emo.value)}
                    title={emo.description}
                  >
                    <emo.icon className="h-6 w-6 mb-1" />
                    <span className="text-xs">{emo.label}</span>
                  </Button>
                ))}
              </div>
              {emotion && (
                <div className="mt-2 text-sm text-muted-foreground">
                  <p>{emotions.find((e) => e.value === emotion)?.description}</p>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
            >
              {transactionType === "expense" ? "Add Expense" : "Add Income"}
            </Button>
          </div>
        </form>

        {showXpAnimation && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-primary/90 text-white px-4 py-2 rounded-full text-lg font-bold animate-bounce-slow">
              +15 XP
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
