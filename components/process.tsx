'use client'

import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Free Assessment',
    description: 'Our experts visit your property for a comprehensive energy analysis and customized solar recommendations.',
  },
  {
    number: '02',
    title: 'Custom Design',
    description: 'We create a tailored solar system design that maximizes your energy savings and ROI.',
  },
  {
    number: '03',
    title: 'Permitting',
    description: 'We handle all necessary permits and regulatory documentation for a smooth approval process.',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Professional installation by licensed engineers with minimal disruption to your property.',
  },
  {
    number: '05',
    title: 'Inspection',
    description: 'Comprehensive system testing and government inspection to ensure everything works perfectly.',
  },
  {
    number: '06',
    title: 'Activation',
    description: 'Your system goes live and you start enjoying clean, affordable energy immediately.',
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Simple <span className="text-accent">Six-Step</span> Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From consultation to activation, we make going solar straightforward and hassle-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-accent/50 to-transparent -z-10"></div>
              )}

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-all duration-300 group h-full">
                {/* Step Number */}
                <div className="inline-block w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-accent/40 group-hover:to-accent/30 transition-colors">
                  <span className="font-bold text-primary text-lg">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Checkmark */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
