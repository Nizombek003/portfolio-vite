import { motion } from 'motion/react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Men haqimda
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 sm:p-10 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Avatar/Icon section */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-5xl text-white" style={{ fontWeight: 700 }}>
                    N
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl text-white mb-2" style={{ fontWeight: 700 }}>
                  Shomirzayev Nizombek
                </h3>
                <p className="text-xl text-blue-400 mb-6">AI Specialist & No-Code Developer</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-400" />
                    </div>
                    <span>Tashkent University of Information Technologies (Samarkand branch) bitiruvchisi</span>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>Uzbekistan</span>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span>23 yosh</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    Men amaliy tizimlar yaratishga ixtisoslashgan developerman. AI va avtomatlashtirish texnologiyalaridan foydalanib, 
                    real biznes muammolarini hal qilaman. Har bir loyiham aniq natijalar keltirib chiqaradi va foydalanuvchilar uchun qiymat yaratadi.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
