import { SEO } from '../components/seo/SEO';
import { Hero } from '../components/sections/Hero';
import { FeaturedCard } from '../components/sections/FeaturedCard';
import { FeaturesGrid } from '../components/sections/FeaturesGrid';
import { ShowcaseGallery } from '../components/sections/ShowcaseGallery';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ComparisonSection } from '../components/sections/ComparisonSection';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  return (
    <main className="flex-grow">
      <SEO 
        title="AI Video Production Platform | CinePotter"
        description="Create professional videos at scale with CinePotter, an AI video production platform built for marketers, agencies and modern creative teams."
        canonical="https://cinepotter.com/"
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
