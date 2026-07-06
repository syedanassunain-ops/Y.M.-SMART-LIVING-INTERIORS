import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, Palette, FileText, Hammer, Gift } from 'lucide-react';

const processSteps = [
  { id: 1, title: 'Consultation', icon: MessageSquare, desc: 'Initial discussion to understand your vision, lifestyle, and basic requirements.' },
  { id: 2, title: 'Site Visit & Requirements', icon: MapPin, desc: 'Detailed site measurement and in-depth requirement gathering.' },
  { id: 3, title: 'Design & 3D Visualization', icon: Palette, desc: 'Creating layouts, mood boards, and realistic 3D visualizations.' },
  { id: 4, title: 'Material Selection & Quotation', icon: FileText, desc: 'Finalizing finishes, materials, and providing a transparent quote.' },
  { id: 5, title: 'Execution & Installation', icon: Hammer, desc: 'Quality-driven manufacturing and on-site installation by experts.' },
  { id: 6, title: 'Final Handover', icon: Gift, desc: 'Thorough quality check and delivery of your dream space.' },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Process</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            A transparent and seamless six-step journey from concept to completion.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-stone-50 border-2 border-stone-200 flex items-center justify-center mb-6 relative group-hover:border-stone-900 group-hover:bg-stone-900 transition-colors duration-300">
                    <span className="absolute -top-3 -right-3 w-6 h-6 bg-stone-900 text-white rounded-full text-xs font-bold flex items-center justify-center shadow-sm">
                      {step.id}
                    </span>
                    <Icon className="text-stone-600 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-3 leading-tight">{step.title}</h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
