import { SiteSidebar } from '@/components/site-sidebar'
import { HeroSection } from '@/components/hero-section'
import { BeliefSection } from '@/components/belief-section'
import { ServicesSection } from '@/components/services-section'
import { SupportSection } from '@/components/support-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteSidebar />
      <main className="lg:ml-64">
        <HeroSection />
        <BeliefSection />
        <ServicesSection />
        <SupportSection />
        <SiteFooter />
      </main>
    </div>
  )
}
