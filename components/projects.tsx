'use client'

import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Luxury Residential Complex',
    location: 'Victoria Island, Lagos',
    capacity: '250 kW',
    savings: '₦8.5M/year',
    description: 'Premium solar installation for high-end residential community',
  },
  {
    title: 'Commercial Office Building',
    location: 'Ikoyi, Lagos',
    capacity: '150 kW',
    savings: '₦5.2M/year',
    description: 'Large-scale commercial solar with battery backup',
  },
  {
    title: 'Healthcare Facility',
    location: 'Yaba, Lagos',
    capacity: '100 kW',
    savings: '₦3.8M/year',
    description: 'Critical backup power for medical services',
  },
  {
    title: 'Manufacturing Plant',
    location: 'Agbara, Lagos',
    capacity: '500 kW',
    savings: '₦18M/year',
    description: 'Industrial-scale solar and energy storage system',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how we&apos;ve transformed energy solutions across Lagos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
              </div>

              <p className="text-gray-600 mb-6">{project.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Capacity</p>
                  <p className="font-bold text-primary text-lg">{project.capacity}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Annual Savings</p>
                  <p className="font-bold text-accent text-lg">{project.savings}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Status</p>
                  <p className="font-bold text-secondary text-lg">Active</p>
                </div>
              </div>

              <button className="w-full py-2 text-accent font-semibold hover:text-accent/80 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                View Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
