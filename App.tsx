
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />

      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] rotate-3"></div>
                <img
                  src="images/HarikaAgritech.jpg" alt="Harika Agritech"
                  className="rounded-3xl shadow-2xl h-[450px] w-full object-cover relative z-10"
                />
              </div>
              <div className="order-1 md:order-2">
                <h4 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">About Us</h4>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight italic font-['Playfair_Display']">Processed Seeds. <br />Transported with Trust.</h2>
                <p className="text-slate-600 text-lg mb-6">
                  Harika AgriTech is a trusted seed processing and export company established in 2001, driven by a strong commitment to serving the farming community through quality and reliability.
                </p>
                <p className="text-slate-600 text-lg mb-8">
                 With over two decades of experience in the seed industry, Harika AgriTech specializes in the processing, grading, and export of premium seed varieties, ensuring high genetic purity, superior germination, and consistent field performance. Harika AgriTech processes and markets a wide range of agricultural seeds including Paddy, Wheat, and Mustard, catering to the diverse needs of farmers. Through its focus on quality, innovation, and ethical business practices, the company has built long-standing relationships with farmers and distributors across multiple states.
                 </p>
              </div>
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
