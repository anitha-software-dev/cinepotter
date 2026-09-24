import { SEO } from '../components/seo/SEO';
import { TrendsHero } from '../components/sections/TrendsHero';
import { TrendsExplore } from '../components/sections/TrendsExplore';
import { TrendsInsights } from '../components/sections/TrendsInsights';

export function Trends() {
  return (
    <main className="flex-grow bg-background relative overflow-hidden">
      <SEO 
        title="AI Video Trends & Industry Insights | CinePotter"
        description="Stay informed about AI video trends, emerging technologies and industry insights changing how brands, marketers and creative teams produce content."
        canonical="https://cinepotter.com/trends"
      />
      <TrendsHero />
      <TrendsExplore />
      <TrendsInsights />
      
      {/* Added bottom padding since CTA is rendered in Footer */}
      <div className="py-4 md:py-8"></div>
    </main>
  );
}
