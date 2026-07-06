import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical interior project take?',
    answer: 'A standard residential project usually takes 45 to 60 days from finalization of design to handover. However, timelines can vary based on project scope, customization, and size of the space.'
  },
  {
    question: 'How is the budget estimated?',
    answer: 'We provide a detailed and transparent quotation after the initial site visit and design consultation. It depends on the materials chosen, scope of work, and custom requirements.'
  },
  {
    question: 'What are Turnkey Interiors?',
    answer: 'Turnkey means we handle everything from start to finish. You hand us the keys to an empty space, and we hand them back to a fully furnished, ready-to-move-in home, managing all contractors and vendors in between.'
  },
  {
    question: 'Do you help with material selection?',
    answer: 'Yes, our experts guide you through selecting the best materials, finishes, and fixtures that match your budget and design aesthetic.'
  },
  {
    question: 'Can the designs be customized?',
    answer: 'Absolutely. Every design we create is highly personalized to reflect your unique taste, functional needs, and lifestyle.'
  },
  {
    question: 'Do you provide warranty and after-sales service?',
    answer: 'Yes, we provide a standard warranty on our woodwork and installations, along with dedicated after-sales support to ensure your peace of mind.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-stone-600 text-lg font-light">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-stone-200 rounded-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-stone-50 hover:bg-stone-100 transition-colors text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-serif font-bold text-stone-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-stone-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 text-stone-600 font-light leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
