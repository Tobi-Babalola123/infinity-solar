'use client'

import { Zap, Battery, Wrench, Gauge } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Solar Installation',
    description: 'Complete residential and commercial solar panel installations with premium components',
    features: ['Professional assessment', 'Custom design', 'Expert installation'],
  },
  {
    icon: Battery,
    title: 'Battery Storage',
    description: 'Advanced energy storage solutions for 24/7 power availability',
    features: ['High capacity', 'Smart management', 'Scalable systems'],
  },
  {
    icon: Gauge,
    title: 'System Monitoring',
    description: 'Real-time monitoring and optimization of your solar system',
    features: ['24/7 tracking', 'Performance alerts', 'Mobile app access'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance and support services',
    features: ['Regular servicing', 'Emergency repairs', 'Technical support'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Solar <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From installation to maintenance, we provide complete solar energy solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex gap-2 items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
