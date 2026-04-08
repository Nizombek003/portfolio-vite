import { motion } from 'motion/react';
import { Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const handleCall = () => {
    window.location.href = 'tel:+998932674009';
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25" />
            
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/30 p-8 sm:p-12">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6 shadow-lg shadow-blue-500/50"
                >
                  <Send className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  Biznesingizni avtomatlashtiramiz
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  AI va No-Code yechimlari bilan biznes jarayonlaringizni tezlashtiring va samaradorlikni oshiring
                </p>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+998932674009" className="text-lg text-white hover:text-blue-400 transition-colors">
                    +998 93 267 40 09
                  </a>
                </div>

                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-lg text-white">Uzbekistan</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-10 py-7 text-lg group shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  onClick={handleCall}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hoziroq Bog'lanish
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400">
              Birgalikda biznesingizni yangi bosqichga olib chiqamiz
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
