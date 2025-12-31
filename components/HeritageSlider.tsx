
import React, { useState, useEffect } from 'react';

const images = [
  {
    url: "/images/logo.jpg"
  },
  {
    url: "/images/HarikaAgritech.jpg"
  },
  {
    url: "/images/machines.jpg"
  },
  {
    url: "/images/machines-2.jpg"
  },
{
  url: "/images/mill.jpg"
},
{
  url: "/images/paddy.jpg"
}
];

const HeritageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group w-full h-[450px] md:h-[700px] rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100">
      <style>{`
        @keyframes subtle-ken-burns {
          from { transform: scale(1.0); }
          to { transform: scale(1.08); }
        }
        .animate-subtle-ken-burns {
          animation: subtle-ken-burns 12s ease-out forwards;
        }
      `}</style>

      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img.url}
            alt={img.title}
            className={`w-full h-full object-cover object-center will-change-transform ${
              index === currentIndex ? 'animate-subtle-ken-burns' : ''
            }`}
          />
          {/* Panoramic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

          {/* Text Content Overlay - Repositioned for Full Width */}
          <div className={`absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between text-white transition-all duration-1000 delay-500 ${
            index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>

          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute top-10 right-10 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-700 rounded-full ${
              index === currentIndex ? 'w-10 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeritageSlider;
