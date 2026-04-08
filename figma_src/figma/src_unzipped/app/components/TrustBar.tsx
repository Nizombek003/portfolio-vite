import { motion } from 'motion/react';
import { Zap, Users, CheckCircle2 } from 'lucide-react';

export function TrustBar() {
  const stats = [
    {
      icon: Zap,
      text: "5+ real loyiha",
    },
    {
      icon: CheckCircle2,
      text: "AI va avtomatlashtirish yechimlari",
    },
    {
      icon: Users,
      text: "Real foydalanuvchilar tomonidan sinovdan o'tgan",
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              >
                <stat.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300 text-center">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
