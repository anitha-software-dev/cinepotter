import { SEO } from '../components/seo/SEO';
import { Navbar } from '../components/layout/Navbar';
import { ResourcesHero } from '../components/sections/ResourcesHero';
import { ExploreResources } from '../components/sections/ExploreResources';
import { FeaturedResources } from '../components/sections/FeaturedResources';
import { BrowseByTopic } from '../components/sections/BrowseByTopic';

export function Resources() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="AI Video Creation Resources & Guides | CinePotter"
        description="Access practical AI video creation resources, guides and insights to improve content workflows, video quality and creative team productivity."
        canonical="https://cinepotter.com/resources"
      />
      <Navbar />
      <ResourcesHero />
      <ExploreResources />
      <FeaturedResources />
      <BrowseByTopic />
    </main>
  );
}
