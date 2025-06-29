import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BudgetBuddy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our mission is to make financial education fun and accessible for teens.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Story</h2>

                <p className="text-muted-foreground mb-4">
                  BudgetBuddy was founded by me, Jasmitha Madasu, in 2025 after I saw a growing gap in financial
                  literacy among teens. As an officer of the Young Investors Society at my school, I witnessed firsthand
                  how many students lacked a basic understanding of money management.
                </p>

                <p className="text-muted-foreground mb-4">
                  I believed it was essential to create a tool that could make financial education more accessible,
                  engaging, and relevant. In response, I taught over 15 financial literacy classes to more than 30 high
                  school students, helped prepare 50+ students for the CYIA designation (a nationally recognized seal of
                  financial literacy), and organized several charity initiatives, including a holiday donation drive
                  that provided financial literacy books to communities with limited access.
                </p>

                <p className="text-muted-foreground mb-4">
                  BudgetBuddy came out of everything I learned during that time. It's built to make personal finance
                  actually make sense for teens, and even make it fun. No lectures. No boring spreadsheets. Just real
                  tools that help you build good money habits from the start.
                </p>

                <p className="text-muted-foreground">
                  By combining game mechanics with solid financial principles, I created a platform that makes managing
                  money feel like an adventure rather than a chore.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-80 h-80 relative">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQH-T6HqNkGjbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732071513712?e=1756944000&v=beta&t=zwCAPcFW_DDVUFZtZRlLO5ExHkABsJYVFJmZFAC2wmA"
                    alt="Financial education and mentoring"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
