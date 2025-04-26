import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-blue-100 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-finflow-blue">Start Your Financial Journey Today</h2>
          <p className="text-lg md:text-xl text-blue-800 mb-10 max-w-2xl mx-auto">
            Join thousands of users who have transformed their financial lives with our intuitive tools and personalized insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="px-8 py-6 text-lg bg-finflow-blue text-white bg-blue-700 hover:bg-blue-800">
              Start Your Free Trial
            </Button>
            {/* <Button variant="outline" className="px-8 py-6 text-lg border-finflow-blue text-finflow-blue hover:bg-blue-50">
              Schedule a Demo
            </Button> */}
          </div>
          
          <div className="mt-10">
            <p className="text-blue-800 font-medium flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {/* No credit card required for free trial */}
              TutTruuuuuuuuuuuuuuue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
