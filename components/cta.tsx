'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', propertyType: 'residential' })
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">Get Started Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get Your Free <span className="text-accent">Solar Assessment</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Discover how much you could save with solar energy. Our experts will analyze your property and provide a customized quote.
            </p>

            <div className="space-y-4">
              {[
                'Free, no-obligation assessment',
                'Custom system design and savings estimate',
                'Financing options available',
                'Expert support throughout the process',
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
              {submitted && (
                <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-lg">
                  <p className="text-secondary font-semibold flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Assessment request submitted! We&apos;ll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 (0)..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-primary text-white rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-600 text-center">
                  We respect your privacy. Your information is secure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
