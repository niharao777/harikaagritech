
import React, { useState, useMemo } from 'react';
import { SEED_VARIETIES } from '../constants';
import { CropType } from '../types';

const ProductSection: React.FC = () => {
  const [filter, setFilter] = useState<CropType | 'All'>('All');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return SEED_VARIETIES.filter(v => {
      const matchesFilter = filter === 'All' || v.type === filter;
      const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase()) || 
                           v.features.some(f => f.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const categories: (CropType | 'All')[] = ['All', 'Paddy', 'Wheat', 'Mustard'];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Seed varieties</h2>
            <p className="text-slate-600">
              Our Products Paddy, Wheat and Mustard seeds
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search variety name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            />
            <svg className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full font-semibold transition-all text-sm ${
                filter === cat 
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">

                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-lg text-[10px] font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                    {product.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                
                <div className="flex items-center gap-4 mb-6">
                   <div className="flex items-center text-xs text-slate-500 gap-1">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {product.duration}
                   </div>
                   <div className="flex items-center text-xs text-slate-500 gap-1">
                      <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      High Yield
                   </div>
                </div>

                <div className="space-y-3 mb-6">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {feat}
                    </div>
                  ))}
                </div>
                

              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl">
            <p className="text-slate-400">No varieties match your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
