'use client'

import { Sun, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Infinity Solar</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming Lagos with premium solar energy solutions for a sustainable future.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-sm font-bold">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-sm font-bold">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-sm font-bold">
                in
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Solar Installation',
                'Battery Storage',
                'System Monitoring',
                'Maintenance & Support',
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Projects', 'Blog', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+2348012345678" className="flex gap-3 items-start text-sm text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+234 (0) 801 234 5678</span>
              </a>
              <a href="mailto:info@infinitysolar.com" className="flex gap-3 items-start text-sm text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@infinitysolar.com</span>
              </a>
              <div className="flex gap-3 items-start text-sm text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Solar Street, Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Infinity Solar Energy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
