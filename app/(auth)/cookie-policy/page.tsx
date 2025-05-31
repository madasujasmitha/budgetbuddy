import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-4">Last updated: May 20, 2024</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p>
            We use cookies to understand how you use our website and to improve your experience. This includes
            personalizing content, providing social media features, and analyzing our traffic.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
          <p>
            We use both session cookies, which expire when you close your browser, and persistent cookies, which stay on
            your device until they expire or you delete them.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can usually find these settings
            in the "options" or "preferences" menu of your browser.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Changes to This Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
            Cookie Policy on this page.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>If you have any questions about this Cookie Policy, please contact us at privacy@budgetbuddy.com.</p>
        </div>
      </div>
    </div>
  )
}
