export function BrowseByTopic() {
  const topics = [
    {
      category: "Getting Started",
      icon: "/images/browse-1.webp",
      links: ["Quick Start Guide", "Account & Billing", "Dashboard Overview", "Projects & Organization"]
    },
    {
      category: "Creating Videos",
      icon: "/images/browse-2.webp",
      links: ["Script Writing with AI", "Scene Generation", "Editing & Refining", "Voiceovers & Audio"]
    },
    {
      category: "Advanced Features",
      icon: "/images/browse-3.webp",
      links: ["Character Consistency", "Branding & Customization", "Export & Sharing", "API & Integrations"]
    },
    {
      category: "Inspiration",
      icon: "/images/browse-4.webp",
      links: ["Creative Ideas", "Storytelling Tips", "Use Case Ideas", "Community Stories"]
    }
  ];

  return (
    <section className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto text-center relative z-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
        Browse by Topic
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto text-left">
        {topics.map((topic, idx) => (
          <div key={idx} className="flex flex-col bg-transparent">
            {/* Header Box */}
            <div className="w-full bg-gradient-to-r from-[#DD19E0] to-[#0054D1] p-[2px] rounded-[16px] mb-4">
              <div className="bg-gradient-to-r from-[#DD19E0] to-[#0054D1] w-full h-full rounded-[14px] px-4 py-3 flex items-center gap-3">
                <img src={topic.icon} alt="Icon" className="w-4 h-4 object-contain brightness-0 invert" />
                <h4 className="text-white font-bold text-sm md:text-base">{topic.category}</h4>
              </div>
            </div>
            
            {/* Links List */}
            <div className="flex flex-col">
              {topic.links.map((link, linkIdx) => (
                <a 
                  key={linkIdx} 
                  href="#" 
                  className="py-3 px-3 text-sm text-text-secondary hover:text-white hover:bg-white/5 hover:translate-x-2 rounded-lg border-b border-white/5 flex justify-between items-center group transition-all duration-300"
                >
                  {link}
                  <img src="/images/right-arrow.webp" alt="arrow" className="w-3.5 h-3.5 object-contain opacity-30 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
