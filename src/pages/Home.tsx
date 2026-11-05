import { SEO } from '../components/seo/SEO';
import { organizationWebsiteSchema } from '../lib/schema';
import { canonicalUrl } from '../lib/site';
import { Hero } from '../components/sections/Hero';
import { FeaturedCard } from '../components/sections/FeaturedCard';
import { FeaturesGrid } from '../components/sections/FeaturesGrid';
import { ShowcaseGallery } from '../components/sections/ShowcaseGallery';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ComparisonSection } from '../components/sections/ComparisonSection';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  const title = "AI Video Production Platform | CinePotter";
  const description =
    "Create professional videos at scale with CinePotter, an AI video production platform built for marketers, agencies and modern creative teams.";
  const canonical = canonicalUrl('/');

  return (
    <main className="flex-grow">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={organizationWebsiteSchema()}
      />
      <Hero />
      <div id="journey"><FeaturedCard /></div>
      <div id="offerings"><FeaturesGrid /></div>
      <ShowcaseGallery />
      <div id="solutions"><ProcessSection /></div>
      <div id="trends"><ComparisonSection /></div>
      {/* <StatsSection /> */}
      <Testimonials />
      <div id="resources"><FAQ /></div>
    </main>
  );
}
