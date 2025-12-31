
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import HeritageSlider from './components/HeritageSlider';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />

      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                          <div className="inline-block px-4 py-1.5 bg-emerald-50 rounded-full mb-6">
                             <h4 className="text-emerald-700 font-bold uppercase tracking-widest text-[10px]">About Us</h4>
                          </div>
                          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight font-['Playfair_Display']">
                            Processed Seeds. <br />
                            <span className="text-emerald-600 italic">Transported with Trust.</span>
                          </h2>
                          <p className="text-slate-600 text-lg leading-relaxed">
                            Harika AgriTech is a trusted seed processing and export company established in 2001, driven by a strong commitment to serving the farming community through quality and reliability.

                          </p>
                          <p className="text-slate-600 text-lg leading-relaxed">
                          With over two decades of experience in the seed industry, Harika AgriTech specializes in the processing, grading, and export of premium seed varieties, ensuring high genetic purity, superior germination, and consistent field performance. Harika AgriTech processes and markets a wide range of agricultural seeds including Paddy, Wheat, and Mustard, catering to the diverse needs of farmers. Through its focus on quality, innovation, and ethical business practices, the company has built long-standing relationships with farmers and distributors across multiple states.
                        </p>
                        </div>

                        {/* Full Row Slider */}
                        <div className="mb-20">
                          <HeritageSlider />
                        </div>
            </div>
        </section>

        <ProductSection />

        <ContactSection />
      </main>



      <footer className="bg-slate-950 text-white pt-7 pb-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} HarikaAgritech All Rights Reserved.</p>
          </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
