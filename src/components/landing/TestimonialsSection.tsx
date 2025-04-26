import { Card, CardContent, CardFooter } from '@/components/ui/card'

const testimonials = [
  {
    quote:
      'FM is an excellent tool for managing my finances. The AI-powered expense tracking and recurring bill reminders have helped me stay on top of my spending. The charts and tables are so easy to use and make tracking my income and expenses much clearer. I would definitely recommend FM to anyone looking to better manage their finances.',
    author: 'Emily R.',
    role: 'Designer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=facearea&facepad=2&q=80',
  },
  {
    quote:
      'I’ve tried similar apps before, but I prefer using other methods for managing my finances. However, I can see the potential for FM with its AI-powered suggestions. If the platform added more flexibility for freelancers like me, it could definitely be useful.',
    author: 'Marcus J.',
    role: 'Software Engineer',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=facearea&facepad=2&q=80',
  },
  {
    quote:
      'FM has truly made managing my finances easier. I love the idea of having a chatbot for bill payments and expense tracking. The personalized saving advice based on my spending patterns is a game-changer. I would recommend FM to anyone looking for an intuitive and intelligent financial tool.',
    author: 'Sarah T.',
    role: 'Business Owner',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=facearea&facepad=2&q=80',
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives with FinFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-finflow-amber"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zM10 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4v4h-2v2h8v-2h-2v-4h4c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-4V4h-4v2h-4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center border-t border-gray-100 pt-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex -space-x-2 mr-4">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.avatar}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-finflow-blue">4.9/5</span> from over{' '}
              <span className="font-bold">2,000+ reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
