import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Get in Touch</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            Ready to transform your space? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 bg-white" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 bg-white" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message/Requirements</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 bg-white" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-8 rounded-sm transition-colors duration-300">
                Send Request
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Contact Information</h3>
              <div className="space-y-6 text-stone-600 font-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <MapPin className="text-[#d4a373]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Office Address</h4>
                    <p>Y.M. Smart Living Interiors<br/>Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Phone className="text-[#d4a373]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Phone Number</h4>
                    <p>+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Mail className="text-[#d4a373]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Email Address</h4>
                    <p>contact@ymsmartliving.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200">
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
            
            {/* Embedded Google Map Placeholder */}
            <div className="w-full h-48 bg-stone-200 rounded-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
