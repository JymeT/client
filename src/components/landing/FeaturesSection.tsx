import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartBar, ChartPie, FileChartLine, BellDot, Bot } from 'lucide-react'

const features = [
  {
    title: 'Expense Tracking',
    description:
      'Easily track every expense and income source through detailed tables categorized by type — groceries, salary, entertainment, bills, and more.',
    icon: ChartPie,
    color: 'bg-teal-100 text-finflow-teal',
  },
  {
    title: 'Interactive Spending Charts',
    description:
      'Visualize where your money goes with intuitive charts and graphs — making it easy to spot trends, overspending, and saving opportunities.',
    icon: ChartBar,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Bill Reminders',
    description:
      'Never miss a payment again. Get automated notifications for upcoming bills like subscriptions, utilities, or rent.',
    icon: BellDot,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Chatbot-Powered Expense Logging',
    description:
      'Log new expenses, income, and bill payments quickly through an intuitive AI chatbot — no complicated forms.',
    icon: Bot,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Centralized Bill Payments',
    description:
      'Pay Vodafone, Orange, Fawry, and more — all in one place without switching apps, using our integrated chatbot.',
    icon: FileChartLine,
    color: 'bg-green-100 text-green-600',
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Complete Financial Control</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you manage every aspect of your financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
