'use client'

import { TrendingUp, Users, Zap, Award } from 'lucide-react'

const stats = [
  {
    icon: Zap,
    number: '15,000+',
    label: 'Megawatts Generated',
    description: 'Clean energy produced annually',
  },
  {
    icon: Users,
    number: '5,000+',
    label: 'Happy Customers',
    description: 'Across Lagos and beyond',
  },
  {
    icon: TrendingUp,
    number: '₦2B+',
    label: 'Savings Generated',
    description: 'For our customers',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'Industry leadership',
  },
]

export function Stats() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            By the Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Infinity Solar Energy is transforming Lagos with sustainable, affordable solar solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-lg font-semibold text-primary mb-1">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
