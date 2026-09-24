export function ProcessSection() {
  const steps = [
    { number: "1", title: "Describe Your Story", description: "Start with a prompt, then customize characters, style, and scenes." },
    { number: "2", title: "Let AI Bring It to Life", description: "Generate scenes, add voiceovers, refine edits, and apply branding effortlessly." },
    { number: "3", title: "Publish Anywhere", description: "Export polished videos ready for social media, ads, and presentations." }
  ];

  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto mt-8 relative z-10">
      
      {/* Horizontal Divider Line */}
      <div className="w-full border-t border-white/10 mb-12"></div>

      <div className="bg-[#050B14] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-[0_0_50px_rgba(221,25,224,0.15)] hover:shadow-[0_0_50px_rgba(221,25,224,0.3)] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-8 group">
        
        {/* Left Column: Text & Steps */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center relative z-10 lg:pl-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-10 leading-[1.2]">
            The AI Video <br className="hidden md:block" /> Creation Process
          </h2>
          
          <div className="flex flex-col gap-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col gap-2 border-l-2 border-white/30 hover:border-purple-500 pl-5 md:pl-6 py-1 cursor-default transition-all duration-300 hover:translate-x-2"
              >
                <h3 className="text-base md:text-lg font-medium text-white/80 group-hover:text-white tracking-tight transition-colors duration-300">
                  {step.number}. {step.title}
                </h3>
                <p className="text-text-secondary/80 group-hover:text-text-secondary text-sm md:text-base leading-relaxed pr-4 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="w-full lg:w-[65%] relative z-10 flex items-center justify-center mt-4 md:mt-8 lg:mt-0">
          <div className="relative w-full flex justify-center items-center h-[220px] md:h-[400px] lg:h-[600px] pointer-events-none">
            <img 
              src="/images/process.webp" 
              alt="Video Creation Process" 
              className="absolute w-[115%] max-w-[115%] -ml-[15%] md:w-[105%] md:max-w-[105%] md:-ml-[5%] lg:w-[110%] lg:max-w-[110%] h-auto object-contain" 
              style={{ 
                // A precise mask that smoothly erases the hard left edge where the background clashes
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 100%)'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
