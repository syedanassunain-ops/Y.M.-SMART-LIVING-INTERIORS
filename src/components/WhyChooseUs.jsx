import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Customized Interior Solutions',
  'Experienced Design Team',
  'High-Quality Materials',
  'Transparent Pricing',
  'Timely Project Completion',
  'End-to-End Turnkey Execution',
  'Dedicated Customer Support'
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Us</h2>
            <p className="text-stone-300 font-light text-lg mb-10 max-w-lg leading-relaxed">
              We bring unmatched expertise, passion, and precision to every project. Our focus on quality and customer satisfaction ensures your space is not only beautiful but built to last.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#d4a373]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#d4a373]" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-stone-200 font-medium tracking-wide">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square overflow-hidden rounded-sm relative z-10 border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="High quality interior materials" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#d4a373] hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#d4a373] hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
