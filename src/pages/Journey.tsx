import { SEO } from '../components/seo/SEO';
import { JourneyHero } from '../components/sections/JourneyHero';
import { WhoWeAre } from '../components/sections/WhoWeAre';
import { OurMission } from '../components/sections/OurMission';
import { OurValues } from '../components/sections/OurValues';

export function Journey() {
  return (
    <main className="flex-grow">
      <SEO 
        title="AI Creative Technology & Our Journey | CinePotter"
        description="Explore CinePotter's journey in AI creative technology and discover our vision for making professional video creation smarter and more accessible."
        canonical="https://www.cinepotter.com/journey"
      />
      <JourneyHero />
      <WhoWeAre />
      <OurMission />
      <OurValues />
      {/* <StatsSection /> */}
    </main>
  );
}
