"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Smile, Meh, Frown, Star, Trash2 } from "lucide-react"

type Entry = {
  id: string
  date: string // YYYY-MM-DD
  text: string
  mood: "happy" | "okay" | "sad"
  color: string
}

const colors = ["#FEF3C7", "#E0F2FE", "#EDE9FE", "#DCFCE7", "#FFE4E6"] // sticky note pastels

export function MoneyJournal() {
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10))
  const [text, setText] = useState<string>("")
  const [mood, setMood] = useState<Entry["mood"]>("happy")
  const [color, setColor] = useState<string>(colors[0])
  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    const raw = localStorage.getItem("journal-entries")
    if (raw) {
      setEntries(JSON.parse(raw))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("journal-entries", JSON.stringify(entries))
  }, [entries])

  const todaysEntries = useMemo(() => entries.filter((e) => e.date === date), [entries, date])

  function addEntry() {
    if (!text.trim()) return
    const entry: Entry = {
      id: crypto.randomUUID(),
      date,
      text: text.trim(),
      mood,
      color,
    }
    setEntries((prev) => [entry, ...prev])
    setText("")
  }

  function removeEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Daily Money Journal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Mood</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={mood === "happy" ? "default" : "outline"}
                  onClick={() => setMood("happy")}
                  aria-pressed={mood === "happy"}
                  className="flex-1"
                >
                  <Smile className="mr-2 h-4 w-4" />
                  Happy
                </Button>
                <Button
                  type="button"
                  variant={mood === "okay" ? "default" : "outline"}
                  onClick={() => setMood("okay")}
                  aria-pressed={mood === "okay"}
                  className="flex-1"
                >
                  <Meh className="mr-2 h-4 w-4" />
                  Okay
                </Button>
                <Button
                  type="button"
                  variant={mood === "sad" ? "default" : "outline"}
                  onClick={() => setMood("sad")}
                  aria-pressed={mood === "sad"}
                  className="flex-1"
                >
                  <Frown className="mr-2 h-4 w-4" />
                  Sad
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Sticker Color</Label>
              <div className="flex items-center gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    title="Select color"
                    aria-label="Select color"
                    onClick={() => setColor(c)}
                    className="h-8 w-8 rounded-md border"
                    style={{ backgroundColor: c, outline: color === c ? "2px solid hsl(var(--primary))" : "none" }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">What did you do with money today?</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g., Saved $10 from lunch, compared prices before buying headphones..."
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={addEntry}>Add Sticker</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Your Stickers for {date}</CardTitle>
            <Badge variant="outline" className="text-xs">
              <Star className="mr-1 h-3 w-3" />
              {todaysEntries.length} sticker{todaysEntries.length === 1 ? "" : "s"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {todaysEntries.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
              No entries yet. Add your first sticker above!
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {todaysEntries.map((e) => (
                <div
                  key={e.id}
                  className="relative rounded-lg p-3 shadow-sm"
                  style={{
                    background: e.color,
                    transform: `rotate(${(e.id.charCodeAt(0) % 7) - 3}deg)`,
                  }}
                >
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-medium">{e.date}</span>
                    <span className="inline-flex items-center gap-1 rounded bg-white/70 px-2 py-0.5">
                      {e.mood === "happy" && <Smile className="h-3 w-3" />}
                      {e.mood === "okay" && <Meh className="h-3 w-3" />}
                      {e.mood === "sad" && <Frown className="h-3 w-3" />}
                      {e.mood}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap text-sm">{e.text}</p>
                  <button
                    className="absolute right-2 top-2 rounded p-1 text-muted-foreground/80 hover:bg-white/70"
                    aria-label="Delete sticker"
                    title="Delete"
                    onClick={() => removeEntry(e.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
