import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Homes', 'Apartments', 'Offices', 'Kitchens', 'Bedrooms', 'Commercial Spaces'];

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'Homes',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A luxurious villa designed with a focus on open spaces and natural light.',
    scope: 'Complete Turnkey Interiors',
  },
  {
    id: 2,
    title: 'Urban Apartment Design',
    category: 'Apartments',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d92015?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Space-optimized modern interiors for a 3BHK city apartment.',
    scope: 'Furniture, Lighting, Decor',
  },
  {
    id: 3,
    title: 'Corporate Tech Hub',
    category: 'Offices',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An inspiring and collaborative workspace for a leading tech firm.',
    scope: 'Space Planning, Execution',
  },
  {
    id: 4,
    title: 'Contemporary Modular Kitchen',
    category: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A sleek, functional modular kitchen with high-end finishes.',
    scope: 'Kitchen Design & Installation',
  },
  {
    id: 5,
    title: 'Serene Master Bedroom',
    category: 'Bedrooms',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A calming bedroom space with bespoke wardrobes and ambient lighting.',
    scope: 'Bedroom Interiors',
  },
  {
    id: 6,
    title: 'Boutique Retail Space',
    category: 'Commercial Spaces',
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An elegant retail environment designed to highlight products beautifully.',
    scope: 'Commercial Interior Design',
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Portfolio</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            Explore our curated selection of beautifully executed interior projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 uppercase text-xs tracking-wider">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{project.title}</h3>
                  <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">Scope:</span>
                    <span className="text-xs font-semibold text-stone-800">{project.scope}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
