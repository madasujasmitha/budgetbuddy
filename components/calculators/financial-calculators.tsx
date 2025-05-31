"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Target, PiggyBank, CreditCard, Zap } from "lucide-react"

export function FinancialCalculators() {
  // Compound Interest Calculator State
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [compound, setCompound] = useState("12")
  const [compoundResult, setCompoundResult] = useState<any>(null)

  // Savings Goal Calculator State
  const [goalAmount, setGoalAmount] = useState("")
  const [currentSavings, setCurrentSavings] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [savingsResult, setSavingsResult] = useState<any>(null)

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState("")
  const [loanRate, setLoanRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [loanResult, setLoanResult] = useState<any>(null)

  // Budget Calculator State
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState({
    housing: "",
    food: "",
    transportation: "",
    entertainment: "",
    savings: "",
    other: "",
  })
  const [budgetResult, setBudgetResult] = useState<any>(null)

  const calculateCompoundInterest = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100
    const t = Number.parseFloat(time)
    const n = Number.parseFloat(compound)

    if (p && r && t && n) {
      const amount = p * Math.pow(1 + r / n, n * t)
      const interest = amount - p

      setCompoundResult({
        finalAmount: amount.toFixed(2),
        totalInterest: interest.toFixed(2),
        principal: p.toFixed(2),
      })
    }
  }

  const calculateSavingsGoal = () => {
    const goal = Number.parseFloat(goalAmount)
    const current = Number.parseFloat(currentSavings) || 0
    const monthly = Number.parseFloat(monthlyContribution)

    if (goal && monthly) {
      const remaining = goal - current
      const monthsNeeded = Math.ceil(remaining / monthly)
      const yearsNeeded = (monthsNeeded / 12).toFixed(1)

      setSavingsResult({
        monthsNeeded,
        yearsNeeded,
        remaining: remaining.toFixed(2),
        totalContributions: (monthly * monthsNeeded).toFixed(2),
      })
    }
  }

  const calculateLoan = () => {
    const p = Number.parseFloat(loanAmount)
    const r = Number.parseFloat(loanRate) / 100 / 12
    const n = Number.parseFloat(loanTerm) * 12

    if (p && r && n) {
      const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const totalPayment = monthlyPayment * n
      const totalInterest = totalPayment - p

      setLoanResult({
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      })
    }
  }

  const calculateBudget = () => {
    const totalIncome = Number.parseFloat(income)
    const totalExpenses = Object.values(expenses).reduce((sum, expense) => {
      return sum + (Number.parseFloat(expense) || 0)
    }, 0)

    if (totalIncome) {
      const remaining = totalIncome - totalExpenses
      const savingsRate = ((Number.parseFloat(expenses.savings) || 0) / totalIncome) * 100

      setBudgetResult({
        totalIncome: totalIncome.toFixed(2),
        totalExpenses: totalExpenses.toFixed(2),
        remaining: remaining.toFixed(2),
        savingsRate: savingsRate.toFixed(1),
        isHealthy: remaining >= 0 && savingsRate >= 20,
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="mr-2 h-5 w-5" />
            Financial Calculators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="compound" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="compound">Compound Interest</TabsTrigger>
              <TabsTrigger value="savings">Savings Goal</TabsTrigger>
              <TabsTrigger value="loan">Loan Calculator</TabsTrigger>
              <TabsTrigger value="budget">Budget Planner</TabsTrigger>
            </TabsList>

            {/* Compound Interest Calculator */}
            <TabsContent value="compound" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="principal">Initial Amount ($)</Label>
                    <Input
                      id="principal"
                      type="number"
                      placeholder="1000"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                    <Input
                      id="rate"
                      type="number"
                      placeholder="5"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time Period (years)</Label>
                    <Input
                      id="time"
                      type="number"
                      placeholder="10"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="compound">Compounding Frequency</Label>
                    <select
                      id="compound"
                      className="w-full p-2 border rounded-md"
                      value={compound}
                      onChange={(e) => setCompound(e.target.value)}
                    >
                      <option value="1">Annually</option>
                      <option value="4">Quarterly</option>
                      <option value="12">Monthly</option>
                      <option value="365">Daily</option>
                    </select>
                  </div>
                  <Button onClick={calculateCompoundInterest} className="w-full">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Calculate
                  </Button>
                </div>

                {compoundResult && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Results</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700">Final Amount</p>
                        <p className="text-2xl font-bold text-green-800">${compoundResult.finalAmount}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">Total Interest Earned</p>
                        <p className="text-xl font-bold text-blue-800">${compoundResult.totalInterest}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">Initial Investment</p>
                        <p className="text-xl font-bold text-gray-800">${compoundResult.principal}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        💡 <strong>Tip:</strong> Starting early makes a huge difference! Even small amounts can grow
                        significantly over time.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Savings Goal Calculator */}
            <TabsContent value="savings" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="goalAmount">Savings Goal ($)</Label>
                    <Input
                      id="goalAmount"
                      type="number"
                      placeholder="5000"
                      value={goalAmount}
                      onChange={(e) => setGoalAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentSavings">Current Savings ($)</Label>
                    <Input
                      id="currentSavings"
                      type="number"
                      placeholder="500"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                    <Input
                      id="monthlyContribution"
                      type="number"
                      placeholder="200"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                    />
                  </div>
                  <Button onClick={calculateSavingsGoal} className="w-full">
                    <Target className="mr-2 h-4 w-4" />
                    Calculate Timeline
                  </Button>
                </div>

                {savingsResult && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Your Savings Plan</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-700">Time to Goal</p>
                        <p className="text-2xl font-bold text-purple-800">{savingsResult.monthsNeeded} months</p>
                        <p className="text-sm text-purple-600">({savingsResult.yearsNeeded} years)</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-700">Amount Still Needed</p>
                        <p className="text-xl font-bold text-orange-800">${savingsResult.remaining}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">Total Contributions</p>
                        <p className="text-xl font-bold text-blue-800">${savingsResult.totalContributions}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        🎯 <strong>Pro Tip:</strong> Set up automatic transfers to make saving easier! Even increasing
                        your monthly contribution by $25 can significantly reduce the time to your goal.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Loan Calculator */}
            <TabsContent value="loan" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      placeholder="20000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="loanRate">Annual Interest Rate (%)</Label>
                    <Input
                      id="loanRate"
                      type="number"
                      placeholder="6.5"
                      value={loanRate}
                      onChange={(e) => setLoanRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="loanTerm">Loan Term (years)</Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      placeholder="5"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                    />
                  </div>
                  <Button onClick={calculateLoan} className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Calculate Payment
                  </Button>
                </div>

                {loanResult && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Loan Details</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-700">Monthly Payment</p>
                        <p className="text-2xl font-bold text-red-800">${loanResult.monthlyPayment}</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-700">Total Payment</p>
                        <p className="text-xl font-bold text-orange-800">${loanResult.totalPayment}</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-700">Total Interest</p>
                        <p className="text-xl font-bold text-yellow-800">${loanResult.totalInterest}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800">
                        ⚠️ <strong>Important:</strong> This is the total cost of borrowing. Consider if you really need
                        this loan and shop around for better rates!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Budget Calculator */}
            <TabsContent value="budget" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="income">Monthly Income ($)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="3000"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Monthly Expenses</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="housing" className="text-xs">
                          Housing
                        </Label>
                        <Input
                          id="housing"
                          type="number"
                          placeholder="1000"
                          value={expenses.housing}
                          onChange={(e) => setExpenses({ ...expenses, housing: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="food" className="text-xs">
                          Food
                        </Label>
                        <Input
                          id="food"
                          type="number"
                          placeholder="400"
                          value={expenses.food}
                          onChange={(e) => setExpenses({ ...expenses, food: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="transportation" className="text-xs">
                          Transportation
                        </Label>
                        <Input
                          id="transportation"
                          type="number"
                          placeholder="300"
                          value={expenses.transportation}
                          onChange={(e) => setExpenses({ ...expenses, transportation: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="entertainment" className="text-xs">
                          Entertainment
                        </Label>
                        <Input
                          id="entertainment"
                          type="number"
                          placeholder="200"
                          value={expenses.entertainment}
                          onChange={(e) => setExpenses({ ...expenses, entertainment: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="savings" className="text-xs">
                          Savings
                        </Label>
                        <Input
                          id="savings"
                          type="number"
                          placeholder="600"
                          value={expenses.savings}
                          onChange={(e) => setExpenses({ ...expenses, savings: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="other" className="text-xs">
                          Other
                        </Label>
                        <Input
                          id="other"
                          type="number"
                          placeholder="200"
                          value={expenses.other}
                          onChange={(e) => setExpenses({ ...expenses, other: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <Button onClick={calculateBudget} className="w-full">
                    <PiggyBank className="mr-2 h-4 w-4" />
                    Analyze Budget
                  </Button>
                </div>

                {budgetResult && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Budget Analysis</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">Monthly Income</p>
                        <p className="text-2xl font-bold text-blue-800">${budgetResult.totalIncome}</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-700">Total Expenses</p>
                        <p className="text-xl font-bold text-orange-800">${budgetResult.totalExpenses}</p>
                      </div>
                      <div
                        className={`p-3 rounded-lg ${Number.parseFloat(budgetResult.remaining) >= 0 ? "bg-green-50" : "bg-red-50"}`}
                      >
                        <p
                          className={`text-sm ${Number.parseFloat(budgetResult.remaining) >= 0 ? "text-green-700" : "text-red-700"}`}
                        >
                          {Number.parseFloat(budgetResult.remaining) >= 0 ? "Remaining" : "Over Budget"}
                        </p>
                        <p
                          className={`text-xl font-bold ${Number.parseFloat(budgetResult.remaining) >= 0 ? "text-green-800" : "text-red-800"}`}
                        >
                          ${Math.abs(Number.parseFloat(budgetResult.remaining)).toFixed(2)}
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-700">Savings Rate</p>
                        <p className="text-xl font-bold text-purple-800">{budgetResult.savingsRate}%</p>
                      </div>
                    </div>

                    <div
                      className={`p-3 border rounded-lg ${budgetResult.isHealthy ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}
                    >
                      <div className="flex items-center mb-2">
                        {budgetResult.isHealthy ? (
                          <Badge className="bg-green-100 text-green-700">Healthy Budget</Badge>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-700">Needs Improvement</Badge>
                        )}
                      </div>
                      <p className={`text-sm ${budgetResult.isHealthy ? "text-green-800" : "text-yellow-800"}`}>
                        {budgetResult.isHealthy
                          ? "🎉 Great job! You're saving at least 20% and staying within your means."
                          : "💡 Try to save at least 20% of your income and ensure expenses don't exceed income."}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Educational Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5" />
            Calculator Tips & Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Compound Interest Magic</h4>
              <p className="text-sm text-blue-700">
                Albert Einstein called compound interest "the eighth wonder of the world." The earlier you start
                investing, the more time your money has to grow exponentially!
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">The 50/30/20 Rule</h4>
              <p className="text-sm text-green-700">
                A simple budgeting guideline: 50% for needs, 30% for wants, and 20% for savings. Use our budget
                calculator to see how your spending compares!
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Emergency Fund First</h4>
              <p className="text-sm text-purple-700">
                Before investing, build an emergency fund of 3-6 months of expenses. Use the savings goal calculator to
                plan your emergency fund timeline.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Avoid High-Interest Debt</h4>
              <p className="text-sm text-orange-700">
                Credit card debt can have interest rates of 20%+ annually. Use the loan calculator to understand the
                true cost of borrowing money.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
