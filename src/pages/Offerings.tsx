import { SEO } from '../components/seo/SEO';
import { OfferingsHero } from '../components/sections/OfferingsHero';
import { OfferingsFeatures } from '../components/sections/OfferingsFeatures';
import { OfferingsWhyChoose } from '../components/sections/OfferingsWhyChoose';
import { OfferingsUseCases } from '../components/sections/OfferingsUseCases';

export function Offerings() {
  return (
    <main className="flex-grow">
      <SEO 
        title="AI Video Creation Tools for Teams | CinePotter"
        description="Explore AI video creation tools that help teams streamline scripting, production and creative workflows while producing engaging video content."
        canonical="https://cinepotter.com/offerings"
      />
      <OfferingsHero />
      <OfferingsFeatures />
      <OfferingsWhyChoose />
      <OfferingsUseCases />
    </main>
  );
}
