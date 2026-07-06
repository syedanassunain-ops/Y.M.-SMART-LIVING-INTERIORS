import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    project: 'Villa Interior, Whitefield',
    rating: 5,
    text: 'Y.M. Smart Living transformed our empty villa into a warm, inviting home. Their attention to detail and ability to understand our aesthetic was impressive. The turnkey execution was completely hassle-free.',
  },
  {
    name: 'Priya Desai',
    project: 'Modular Kitchen, Indiranagar',
    rating: 5,
    text: 'The kitchen they designed is both highly functional and absolutely gorgeous. The quality of materials used is top-notch, and the installation team was highly professional.',
  },
  {
    name: 'Arun & Kavita',
    project: 'Apartment Renovation, Jayanagar',
    rating: 5,
    text: 'We handed them our 15-year-old apartment and they breathed new life into it. The space planning was excellent, and the custom furniture fits our lifestyle perfectly. Highly recommended!',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Client Stories</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            Hear from our satisfied clients about their journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-stone-100" size={40} />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="text-[#d4a373] fill-current" size={16} />
                ))}
              </div>
              <p className="text-stone-600 font-light leading-relaxed mb-8 relative z-10">
                "{test.text}"
              </p>
              <div className="relative z-10 border-t border-stone-100 pt-4">
                <h4 className="font-serif font-bold text-stone-900">{test.name}</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{test.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
