export function SolutionsStats() {
  const stats = [
    {
      value: "10x",
      label: "Faster Video Creation",
    },
    {
      value: "100+",
      label: "Languages Supported",
    },
    {
      value: "4K",
      label: "Ultra HD Export",
    },
    {
      value: "99.9%",
      label: "Uptime & Reliability",
    }
  ];

  return (
    <section className="py-6 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto relative z-20">
      <div className="w-full max-w-[1000px] mx-auto rounded-[16px] p-[2px] bg-gradient-to-r from-[#DD19E0] to-[#0054D1] shadow-[0_0_30px_rgba(221,25,224,0.2)]">
        <div className="w-full h-full bg-[#050C1F] rounded-[14px] px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative overflow-hidden">
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#DD19E0]/5 via-transparent to-[#0054D1]/5 pointer-events-none"></div>

          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center justify-center text-center w-full relative group">
              <svg className="w-32 h-14 md:w-full md:h-16 mb-2 overflow-visible" viewBox="0 0 200 60">
                <defs>
                  <linearGradient id={`textGradStat${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DD19E0" />
                    <stop offset="100%" stopColor="#0054D1" />
                  </linearGradient>
                </defs>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="transparent" stroke={`url(#textGradStat${idx})`} strokeWidth="1.5" fontSize="48" fontWeight="600" fontFamily="sans-serif" className="tracking-tighter">
                  {stat.value}
                </text>
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">{stat.label}</span>
              
              {/* Divider (hide on last item) */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
