'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Oluwaseun Okafor',
    role: 'Business Owner',
    location: 'Lagos',
    content: 'Infinity Solar has been a game-changer for my business. Our electricity bill dropped by 70% in the first month. Highly professional team!',
    rating: 5,
  },
  {
    name: 'Folake Adeyemi',
    role: 'Homeowner',
    location: 'Victoria Island',
    content: 'Best investment I made for my home. The installation was seamless and the customer support is exceptional. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Kayode Bello',
    role: 'Real Estate Developer',
    location: 'Ikoyi',
    content: 'Working with Infinity Solar has been fantastic. They delivered on time and exceeded our expectations. Top-notch professionals.',
    rating: 5,
  },
  {
    name: 'Chinyere Obi',
    role: 'Hospital Administrator',
    location: 'Yaba',
    content: 'Having reliable backup power is critical for our operations. Infinity Solar delivered exactly what we needed. Outstanding service!',
    rating: 5,
  },
  {
    name: 'Adebayo Ojo',
    role: 'Property Manager',
    location: 'Lekki',
    content: 'The monitoring system is impressive. I can track our energy production in real-time. Great investment for our properties.',
    rating: 5,
  },
  {
    name: 'Nneka Uche',
    role: 'Tech Entrepreneur',
    location: 'Lagos',
    content: 'Very impressed with the professionalism and technical knowledge of the team. My solar system works perfectly every day.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Our <span className="text-accent">Customers</span> Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their energy with Infinity Solar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="pt-6 border-t border-gray-200">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
