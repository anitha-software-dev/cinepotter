import { Navbar } from '../components/layout/Navbar';
import { SEO } from '../components/seo/SEO';
import { ContactHero } from '../components/sections/ContactHero';
import { ContactFormSection } from '../components/sections/ContactFormSection';
import { PartnershipBanner } from '../components/sections/PartnershipBanner';

export function Contact() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="Contact CinePotter | AI Video Production Support"
        description="Get in touch with CinePotter for demos, partnerships, and support. We help teams produce professional AI video at scale."
      />
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <PartnershipBanner />
    </main>
  );
}
