
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Container with Animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
          alt="Golden Harika Harvest"
          className="w-full h-full object-cover animate-ken-burns scale-110"
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">


        <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8 font-['Playfair_Display'] animate-in fade-in slide-in-from-bottom duration-1000">
          Nurturing <span className="text-emerald-400 italic">Growth</span>, <br />
          Harvesting <span className="text-amber-400">Excellence</span>.
        </h1>

        <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          HarikaAgritech delivers world-class seeds for Paddy, Wheat, and Mustard.
          Our modern processing ensures 98% purity for farmers across the nation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <a href="#products" className="group px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/40 flex items-center gap-2">
            Browse Seed Catalog
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Credibility Floating Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">98%</span>
            <span className="text-xs text-slate-300 uppercase tracking-widest">Purity Level</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">6+</span>
            <span className="text-xs text-slate-300 uppercase tracking-widest">States Supplied</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">50k+</span>
            <span className="text-xs text-slate-300 uppercase tracking-widest">Happy Farmers</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">25+</span>
            <span className="text-xs text-slate-300 uppercase tracking-widest">Seed Varieties</span>
          </div>
        </div>
      </div>

      {/* Visual scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Hero;
