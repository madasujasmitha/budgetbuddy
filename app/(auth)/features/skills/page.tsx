import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Rocket, Code, Camera, Palette, TrendingUp, Award, Star } from "lucide-react"

export default function SkillsFeaturePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Build Your Skill Tree</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Level up your abilities like in an RPG game. Each skill unlocks new job opportunities and higher earnings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Level Up Like a Video Game</h2>
            <p className="text-muted-foreground mb-4">
              Your skills grow as you complete jobs and learning challenges. Watch your abilities level up from beginner
              to expert, unlocking new opportunities and higher pay rates along the way.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                <span>Progressive skill development</span>
              </li>
              <li className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span>XP rewards for learning</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-primary mr-2" />
                <span>Unlock higher-paying jobs</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Interactive skill tree showing different abilities and levels"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Coding</h3>
              <p className="text-sm text-muted-foreground">
                Learn web development, app creation, and programming fundamentals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">
                Master digital art, logo design, and visual communication skills.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Photography</h3>
              <p className="text-sm text-muted-foreground">
                Develop professional photography and photo editing abilities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Marketing</h3>
              <p className="text-sm text-muted-foreground">
                Learn social media, content creation, and digital marketing.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Leveling Up?</h2>
          <p className="text-muted-foreground mb-6">
            Begin your skill development journey and unlock new earning opportunities.
          </p>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
              <Rocket className="mr-2 h-4 w-4" />
              Start Building Skills
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
