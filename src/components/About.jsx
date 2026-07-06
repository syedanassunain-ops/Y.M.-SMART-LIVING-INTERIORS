import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern living room design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold text-stone-900 mb-2">10+</p>
              <p className="text-stone-600 font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              About Y.M. Smart Living Interiors
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                At Y.M. Smart Living Interiors, we are committed to thoughtful design, quality workmanship, transparent communication, and timely project delivery. We believe that your space should be a true reflection of your personality and lifestyle.
              </p>
              <p>
                Our customer-first approach ensures that we listen to your needs, understand your vision, and translate it into a reality. From concept to completion, we handle complete turnkey interior projects, ensuring a seamless and stress-free experience.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-stone-200">
                {['Thoughtful Design', 'Quality Workmanship', 'Transparent Communication', 'Timely Delivery', 'Turnkey Solutions', 'Customer-First Approach'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 font-medium text-stone-800">
                    <span className="w-1.5 h-1.5 bg-stone-900 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
