import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
