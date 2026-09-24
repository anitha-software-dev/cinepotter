import { SEO } from '../components/seo/SEO';
import { SolutionsHero } from '../components/sections/SolutionsHero';
import { SolutionsIndustry } from '../components/sections/SolutionsIndustry';
import { SolutionsFeatures } from '../components/sections/SolutionsFeatures';
import { SolutionsStats } from '../components/sections/SolutionsStats';

export function Solutions() {
  return (
    <main className="flex-grow bg-background relative overflow-hidden">
      <SEO 
        title="AI Video Marketing Solutions | CinePotter"
        description="Discover AI video marketing solutions for agencies, brands and creative teams looking to simplify workflows and produce campaigns efficiently."
        canonical="https://cinepotter.com/solutions"
      />
      <SolutionsHero />
      <SolutionsIndustry />
      <SolutionsFeatures />
      <SolutionsStats />
      
      {/* Added bottom padding since CTA is removed */}
      <div className="py-4 md:py-8"></div>
    </main>
  );
}
