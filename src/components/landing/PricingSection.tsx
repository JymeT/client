import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      description: "Perfect for individuals starting their financial journey",
      price: { monthly: 0, annual: 0 },
      features: [
        "Basic budget tracking",
        "Up to 5 financial goals",
        "Expense categorization",
        "Mobile app access",
        "Email support"
      ],
      cta: "Sign Up for Free",
      popular: false,
      highlight: "",
    },
    {
      name: "Premium",
      description: "For dedicated personal finance management",
      price: { monthly: 9.99, annual: 7.99 },
      features: [
        "Everything in Free, plus:",
        "Unlimited financial goals",
        "Custom categories and tags",
        "Bill reminders and alerts",
        "Advanced reporting",
        "Investment tracking",
        "Priority email support"
      ],
      cta: "Start Premium",
      popular: true,
      highlight: "bg-gradient-to-r from-finflow-blue to-finflow-teal border-0",
    },
    {
      name: "Family",
      description: "For households managing finances together",
      price: { monthly: 19.99, annual: 16.99 },
      features: [
        "Everything in Premium, plus:",
        "Up to 5 user accounts",
        "Shared goals and budgets",
        "Family expense analytics",
        "Financial planning tools",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      cta: "Start Family Plan",
      popular: false,
      highlight: "",
    }
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your financial management needs.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAnnual ? "bg-white shadow-sm text-gray-800" : "text-gray-600"
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual <span className="text-green-500 font-semibold">(Save 20%)</span>
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isAnnual ? "bg-white shadow-sm text-gray-800" : "text-gray-600"
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "border shadow-lg hover:shadow-xl transition-shadow relative", 
                plan.highlight
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-finflow-amber text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className={cn(
                  "text-2xl",
                  plan.highlight ? "text-white" : "text-gray-900"
                )}>
                  {plan.name}
                </CardTitle>
                <CardDescription className={cn(
                  "mt-1",
                  plan.highlight ? "text-white/80" : "text-gray-600"
                )}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <div className={cn(
                  "mb-6",
                  plan.highlight ? "text-white" : "text-gray-900"
                )}>
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className={cn(
                    "text-sm ml-1",
                    plan.highlight ? "text-white/80" : "text-gray-500"
                  )}>
                    /month
                  </span>
                  {isAnnual && (
                    <div className={cn(
                      "text-sm mt-1",
                      plan.highlight ? "text-white/80" : "text-gray-500"
                    )}>
                      Billed annually (${(isAnnual ? plan.price.annual : plan.price.monthly) * 12}/year)
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={cn(
                        "flex items-start",
                        plan.highlight ? "text-white" : "text-gray-700"
                      )}
                    >
                      <svg 
                        className={cn(
                          "h-5 w-5 mr-2 mt-0.5",
                          plan.highlight ? "text-white" : "text-finflow-teal"
                        )}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full py-6",
                    plan.popular ? "bg-finflow-amber hover:bg-amber-500 text-white" :
                    plan.highlight ? "bg-white text-finflow-blue hover:bg-gray-100" :
                    "bg-finflow-blue hover:bg-blue-700 text-white"
                  )}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
