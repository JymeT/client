const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FinFlow?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to financial management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-finflow-blue rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Money Effortlessly</h3>
                  <p className="text-gray-600">
                    Our smart budgeting tools and spending insights help you identify savings opportunities and avoid unnecessary expenses, increasing your savings by an average of 20%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-finflow-teal rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Make Informed Decisions</h3>
                  <p className="text-gray-600">
                    Access personalized financial insights and recommendations based on your spending patterns and goals, enabling smarter financial decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-finflow-amber rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Achieve Financial Goals</h3>
                  <p className="text-gray-600">
                    Set, track, and reach your financial goals with step-by-step guidance and progress tracking. Users achieve their financial goals 40% faster with FinFlow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              <div className="absolute -bottom-8 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1593510987185-1ec2256148da?w=500&auto=format&q=80" 
                  alt="Financial planning" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-finflow-blue font-bold text-3xl">87%</span>
                    <span className="text-sm text-gray-500">Better financial awareness</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-finflow-teal font-bold text-3xl">$1,240</span>
                    <span className="text-sm text-gray-500">Average annual savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
