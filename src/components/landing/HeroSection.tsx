import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-teal-50 to-transparent rounded-full opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Smart <span className="text-finflow-blue">Financial Management</span> for Your Future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              FM<span className="text-sm font-normal text-gray-500">powered by AI</span> — Financial Management made
              smarter: track expenses, pay bills, and save money effortlessly with AI-driven tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => navigate('/dashboard')}
                className="text-lg px-8 py-6 bg-finflow-blue bg-blue-800 text-white hover:bg-blue-900 cursor-pointer"
              >
                Get Started For Free
              </Button>
              {/* <Button variant="outline" className="text-lg px-8 py-6">
                See How It Works
              </Button> */}
            </div>
            {/* <div className="mt-10 flex items-cente text-gray-600">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&auto=format&fit=facearea&facepad=2&q=80"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?w=50&h=50&auto=format&fit=facearea&facepad=2&q=80"
                  className="w-8 h-8 rounded-full border-2 border-whitep"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&auto=format&fit=facearea&facepad=2&q=80"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="ml-3 text-sm font-medium">Join 10,000+ users managing their finances</span>
            </div> */}
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute top-8 -left-8 w-full h-full bg-finflow-blue rounded-xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&auto=format&q=80"
                alt="Financial Dashboard"
                className="relative rounded-xl shadow-lg max-w-full h-auto"
              />
              <div className="absolute -bottom-10 -right-8 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900">Budget on track!</p>
                    <p className="text-xs text-gray-500">Saved $850 this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
