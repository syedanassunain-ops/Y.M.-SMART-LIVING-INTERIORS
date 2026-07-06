import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Beautifully designed modern home interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Transforming Spaces Into <br className="hidden md:block"/>
              <span className="italic font-light">Smart Living Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl font-light leading-relaxed">
              At Y.M. Smart Living Interiors, we design and deliver functional, elegant, and personalized interiors that reflect your lifestyle and vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-stone-50 hover:bg-stone-200 text-stone-900 px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 transition-all">
                Get a Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="bg-transparent border border-stone-50 hover:bg-stone-50/10 text-stone-50 px-8 py-4 rounded-sm font-medium flex items-center justify-center transition-all">
                View Our Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
