import { motion } from 'motion/react';
import { Search, Lightbulb, Hammer, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Muammoni tushunish",
      description: "Biznesingiz yoki loyihangizning asosiy muammosini chuqur tahlil qilaman",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "AI yechim loyihalash",
      description: "Muammoni hal qilish uchun optimal AI va avtomatlashtirish yechimini ishlab chiqaman",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "No-Code orqali qurish",
      description: "Zamonaviy no-code vositalari yordamida tezkor va samarali tizim yarataman",
      icon: Hammer,
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "04",
      title: "Test va optimizatsiya",
      description: "Tizimni sinab ko'raman va eng yaxshi natijalar uchun sozlayman",
      icon: CheckCircle,
      color: "from-orange-500 to-amber-500",
    },
  ];

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
            Ish Jarayoni
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Har bir loyihani qanday qilib amalga oshiraman
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-orange-500/50" style={{ top: '5rem' }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon circle */}
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-blue-500/20`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center z-20">
                      <span className="text-xs text-blue-400" style={{ fontWeight: 700 }}>
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
