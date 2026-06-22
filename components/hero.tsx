"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen pt-20 sm:pt-24 gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 top-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-4 sm:pt-8 lg:pt-12 pb-12 lg:pb-20">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white">
                Clean Energy for Lagos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Power Your Home with{" "}
              <span className="text-accent">Solar Energy</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
              Join thousands of Lagos residents saving on electricity bills with
              Infinity Solar&apos;s premium solar panel installations and
              battery storage solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-3 bg-accent text-primary rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                Get Free Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-accent font-bold text-2xl">500+</p>
                <p className="text-gray-300 text-sm">Systems Installed</p>
              </div>
              <div>
                <p className="text-accent font-bold text-2xl">98%</p>
                <p className="text-gray-300 text-sm">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-accent font-bold text-2xl">10 YRS</p>
                <p className="text-gray-300 text-sm">Warranty Coverage</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/solar-hero.png"
                  alt="Solar panels installed on residential rooftop in Lagos"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
