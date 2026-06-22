"use client";

import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="hidden sm:inline text-xl font-bold text-primary">
              Infinity Solar
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block px-6 py-2 bg-accent text-primary rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
              Get Quote
            </button>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-2 w-full px-6 py-2 bg-accent text-primary rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
