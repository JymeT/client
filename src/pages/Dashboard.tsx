import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  expenses,
  medications,
  monthlyExpenseData,
  expensesByCategoryData,
  incomeVsExpensesData,
  expenseCategories,
} from "@/lib/mock-data"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "@/components/ui/char"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell, CreditCard, DollarSign, PlusCircle } from "lucide-react"

export default function DashboardPage() {
  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  // Calculate upcoming medications
  const upcomingMedications = medications.filter((med) => !med.endDate || new Date(med.endDate) > new Date())

  // Get recent expenses
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalExpenses}</div>
              <p className="text-xs text-muted-foreground">For the current month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Income</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,200</div>
              <p className="text-xs text-muted-foreground">For the current month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${4200 - totalExpenses}</div>
              <p className="text-xs text-muted-foreground">For the current month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
              <PlusCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingMedications.length}</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={incomeVsExpensesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Expenses by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expensesByCategoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                    nameKey="category"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {expensesByCategoryData.map((entry, index) => {
                      const category = expenseCategories.find((cat) => cat.name === entry.category)
                      return (
                        <Cell
                          key={`cell-${index}`}
                          fill={category?.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                      )
                    })}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyExpenseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="expenses" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center">
                    <div
                      className="mr-4 rounded-full p-2"
                      style={{
                        backgroundColor: expenseCategories.find((cat) => cat.name === expense.category)?.color + "20",
                      }}
                    >
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{
                          backgroundColor: expenseCategories.find((cat) => cat.name === expense.category)?.color,
                        }}
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{expense.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {expense.date} • {expense.category}
                      </p>
                    </div>
                    <div className="font-medium">${expense.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Medication Reminders</CardTitle>
              <CardDescription>Your upcoming medication schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMedications.map((medication) => (
                  <Alert key={medication.id}>
                    <Bell className="h-4 w-4" />
                    <AlertTitle>
                      {medication.name} - {medication.dosage}
                    </AlertTitle>
                    <AlertDescription>
                      {medication.frequency} at {medication.time.split(",")[0]}
                      {medication.notes && ` - ${medication.notes}`}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Financial Insights</CardTitle>
              <CardDescription>Tips based on your spending habits</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="savings">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="savings">Savings</TabsTrigger>
                  <TabsTrigger value="budget">Budget</TabsTrigger>
                </TabsList>
                <TabsContent value="savings" className="space-y-4 pt-4">
                  <Alert>
                    <AlertTitle>Savings Opportunity</AlertTitle>
                    <AlertDescription>
                      You could save $70 per month by reducing your Fun category expenses by 20%.
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <AlertTitle>Income Allocation</AlertTitle>
                    <AlertDescription>
                      Consider allocating 20% of your income to savings for better financial health.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
                <TabsContent value="budget" className="space-y-4 pt-4">
                  <Alert>
                    <AlertTitle>Budget Recommendation</AlertTitle>
                    <AlertDescription>
                      50% for essentials ($2,100), 30% for discretionary spending ($1,260), and 20% for savings ($840).
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <AlertTitle>Expense Tracking</AlertTitle>
                    <AlertDescription>
                      Your highest spending category is Living at 32%, followed by Fun at 15%.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
