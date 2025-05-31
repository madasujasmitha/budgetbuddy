"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  const router = useRouter()

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-4">Last updated: May 20, 2024</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to BudgetBuddy. These Terms of Service govern your use of our website and services.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Acceptance of Terms</h2>
          <p>
            By accessing or using BudgetBuddy, you agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions, you may not access or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible
            for safeguarding the password and for all activities that occur under your account.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
          <p>
            Our service allows you to post, link, store, share and otherwise make available certain information, text,
            graphics, or other material. You are responsible for the content you post.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
            disclose information about you.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will provide notice of any significant changes by
            posting the new Terms of Service on this page.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at support@budgetbuddy.com.</p>
        </div>
      </div>
    </div>
  )
}
