import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PiggyBank, 
  Target, 
  ChartBar, 
  ChartPie, 
  Calendar, 
  FileChartLine 
} from 'lucide-react';

const features = [
  {
    title: "Budget Management",
    description: "Create customized budgets for different spending categories and track your progress in real-time.",
    icon: PiggyBank,
    color: "bg-blue-100 text-finflow-blue"
  },
  {
    title: "Expense Tracking",
    description: "Automatically categorize transactions and visualize your spending patterns with intuitive charts.",
    icon: ChartPie,
    color: "bg-teal-100 text-finflow-teal"
  },
  {
    title: "Financial Goals",
    description: "Set short and long-term financial goals with detailed planning and milestone tracking.",
    icon: Target,
    color: "bg-amber-100 text-finflow-amber"
  },
  {
    title: "Investment Tracking",
    description: "Monitor your investments, track performance, and analyze returns all in one place.",
    icon: ChartBar,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Bill Reminders",
    description: "Never miss a payment with automated reminders and scheduled payment tracking.",
    icon: Calendar,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Financial Reports",
    description: "Generate comprehensive reports to gain insights into your financial health and progress.",
    icon: FileChartLine,
    color: "bg-green-100 text-green-600"
  }
];

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
  );
};

export default FeaturesSection;
