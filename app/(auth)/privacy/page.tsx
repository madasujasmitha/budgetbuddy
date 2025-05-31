"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-4">Last updated: May 20, 2024</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            At BudgetBuddy, we respect your privacy and are committed to protecting your personal data. This Privacy
            Policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, use our services, or
            communicate with us. This may include your name, email address, and financial information you choose to
            track in our app.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you,
            and to personalize your experience.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can manage your information
            through your account settings or by contacting us.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@budgetbuddy.com.</p>
        </div>
      </div>
    </div>
  )
}
