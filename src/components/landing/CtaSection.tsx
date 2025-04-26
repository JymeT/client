import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const CtaSection = () => {
  const navigate = useNavigate()
  return (
    <section className="py-20 bg-blue-100 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-finflow-blue">Start Your Financial Journey Today</h2>
          <p className="text-lg md:text-xl text-blue-800 mb-10 max-w-2xl mx-auto">
            Join thousands of users who have transformed their financial lives with our intuitive tools and personalized
            insights.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => navigate('/dashboard')}
              className="px-8 py-6 text-lg bg-finflow-blue text-white bg-blue-700 hover:bg-blue- cursor-pointer"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
