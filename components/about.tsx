'use client'

import { CheckCircle, Leaf, Lightbulb } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">About Infinity Solar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Powering Lagos with <span className="text-accent">Clean Energy</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2009, Infinity Solar Energy has become Lagos&apos; leading solar energy provider. We specialize in designing and installing premium solar solutions for residential and commercial properties, helping Nigerians achieve energy independence while reducing their carbon footprint.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Premium Quality Systems</p>
                  <p className="text-gray-600 text-sm">Only the best internationally certified components</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Expert Installation</p>
                  <p className="text-gray-600 text-sm">Licensed engineers with 15+ years experience</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Lifetime Support</p>
                  <p className="text-gray-600 text-sm">24/7 customer support and maintenance services</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all">
              Learn Our Story
            </button>
          </div>

          {/* Right Visual */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-8 rounded-xl flex items-center justify-center aspect-square">
                  <Leaf className="w-16 h-16 text-secondary" />
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
                  <p className="font-bold text-primary">50K+ Tons</p>
                  <p className="text-sm text-gray-600">CO2 Reduced</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 p-6 rounded-xl">
                  <p className="font-bold text-primary">ISO 9001</p>
                  <p className="text-sm text-gray-600">Certified</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-xl flex items-center justify-center aspect-square">
                  <Lightbulb className="w-16 h-16 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
