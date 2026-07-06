import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, ChefHat, Sofa, Bed, LayoutGrid, Archive, Lightbulb, PenTool, Layers, Wrench, CheckCircle } from 'lucide-react';

const servicesList = [
  { title: 'Residential Interiors', icon: Home, desc: 'Complete home design solutions tailored to your lifestyle.' },
  { title: 'Commercial Interiors', icon: Briefcase, desc: 'Professional, inspiring workspaces that boost productivity.' },
  { title: 'Modular Kitchens', icon: ChefHat, desc: 'Functional and aesthetic modern kitchens.' },
  { title: 'Living Room Interiors', icon: Sofa, desc: 'Elegant and comfortable spaces for relaxation.' },
  { title: 'Bedroom Interiors', icon: Bed, desc: 'Personalized sanctuaries for rest and rejuvenation.' },
  { title: 'Office Interiors', icon: LayoutGrid, desc: 'Corporate spaces that reflect your brand identity.' },
  { title: 'Wardrobes & Storage', icon: Archive, desc: 'Smart, stylish, and customized storage solutions.' },
  { title: 'False Ceiling & Lighting', icon: Lightbulb, desc: 'Atmospheric lighting and modern ceiling designs.' },
  { title: 'Custom Furniture', icon: PenTool, desc: 'Bespoke furniture crafted to fit your space perfectly.' },
  { title: 'Space Planning', icon: Layers, desc: 'Optimizing layout for maximum functionality and flow.' },
  { title: 'Renovation & Remodeling', icon: Wrench, desc: 'Transforming existing spaces into modern marvels.' },
  { title: 'Turnkey Solutions', icon: CheckCircle, desc: 'End-to-end execution from concept to handover.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Services</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            Comprehensive interior design and execution services to transform your spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 border border-stone-100 bg-stone-50 hover:bg-stone-900 transition-colors duration-300 rounded-sm cursor-default"
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mb-6 group-hover:bg-stone-800 transition-colors duration-300 shadow-sm">
                  <Icon className="text-stone-900 group-hover:text-white" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-stone-600 group-hover:text-stone-300 font-light text-sm leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
