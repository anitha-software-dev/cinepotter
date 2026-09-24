import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Elena Kovacs",
      role: "Film Festival Curator (Budapest)",
      avatar: "/images/reviewer_elena.jpg",
      rating: 5,
      text: "“CinePotter brings a rare blend of storytelling clarity and visual sophistication. Their work feels both globally relevant and deeply human—something you don’t often see in emerging studios.”"
    },
    {
      name: "Daniel Reyes",
      role: "Independent Film Producer (Los Angeles)",
      avatar: "/images/reviewer_daniel.jpg",
      rating: 5,
      text: "“What impressed me most about CinePotter is their instinct for narrative pacing. They understand cinema not just as content, but as emotion.”"
    },
    {
      name: "Amélie Laurent",
      role: "Creative Director (Paris)",
      avatar: "/images/reviewer_amelie.jpg",
      rating: 5,
      text: "“CinePotter’s approach feels refreshingly modern—rooted in strong creative direction with a clear understanding of audience engagement across platforms.”"
    },
    {
      name: "Marcus Chen",
      role: "Media Strategist (Singapore)",
      avatar: "/images/reviewer_marcus.jpg",
      rating: 5,
      text: "“In a world flooded with content, CinePotter stands out by focusing on storytelling that actually resonates. Their work is both strategic and cinematic.”"
    },
    {
      name: "Oliver Grant",
      role: "Digital Media Consultant (London)",
      avatar: "/images/reviewer_oliver.jpg",
      rating: 5,
      text: "“CinePotter bridges the gap between creative storytelling and digital scalability. That’s where the future of content lies.”"
    },
    {
      name: "Sophia Martins",
      role: "Brand Manager (Dubai)",
      avatar: "/images/reviewer_sophia.jpg",
      rating: 5,
      text: "“Working with CinePotter was seamless. They don’t just execute—they elevate ideas into something far more compelling.”"
    },
    {
      name: "Luca Bianchi",
      role: "Marketing Lead (Milan)",
      avatar: "/images/reviewer_luca.jpg",
      rating: 5,
      text: "“CinePotter understands brand storytelling at a cinematic level. The result is content that doesn’t just look good—it performs.”"
    },
    {
      name: "Aisha Rahman",
      role: "Screenwriter (Toronto)",
      avatar: "/images/reviewer_aisha.jpg",
      rating: 5,
      text: "“There’s a distinct voice in CinePotter’s work—thoughtful, immersive, and visually refined. It’s the kind of studio you want to watch closely.”"
    }
  ];

  // Double the array for seamless infinite scrolling
  const infiniteReviews = [...reviews, ...reviews];

  return (
    <section className="py-8 overflow-hidden text-center">
      <div className="text-center mb-16 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-text-secondary mb-6 font-medium">
          <img src="/images/sparkles-white.webp" alt="Sparkles" className="w-4 h-4 object-contain" />
          Trusted by creative teams
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Loved by Marketers. Built for Business.
        </h2>
      </div>

      {/* Auto-play Marquee Carousel Container */}
      <div className="relative w-full max-w-[100vw] mx-auto overflow-hidden">
        {/* Left and right gradient masks for smooth fade out at screen edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee hover:animation-paused group">
          {infiniteReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[360px] md:w-[480px] mx-3 bg-[#081324] rounded-[24px] p-8 border border-white/10 text-left relative transition-all duration-300 hover:border-white/30 shrink-0 flex flex-col"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-base md:text-lg font-medium mb-10 leading-relaxed pr-8">
                {review.text}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">{review.name}</h4>
                  <p className="text-text-secondary text-xs md:text-sm">{review.role}</p>
                </div>
              </div>

              <Quote className="absolute bottom-8 right-8 text-white/10 w-12 h-12 group-hover:text-purple-500/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
