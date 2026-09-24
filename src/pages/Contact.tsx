import { Navbar } from '../components/layout/Navbar';
import { ContactHero } from '../components/sections/ContactHero';
import { ContactFormSection } from '../components/sections/ContactFormSection';
import { PartnershipBanner } from '../components/sections/PartnershipBanner';

export function Contact() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <PartnershipBanner />
    </main>
  );
}
