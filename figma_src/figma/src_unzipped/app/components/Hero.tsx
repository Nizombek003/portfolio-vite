import { motion } from 'motion/react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 blur-3xl" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e933_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e933_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">AI & No-Code Developer</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            style={{ fontWeight: 700, lineHeight: 1.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Men AI va No-Code orqali biznes jarayonlarini avtomatlashtiraman
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Real loyihalar asosida ishlovchi AI developer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg group"
              onClick={() => scrollToSection('case-studies')}
            >
              Loyihalarni ko'rish
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-blue-500/50 hover:bg-blue-500/10 text-blue-300 hover:text-blue-200 px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Bog'lanish
            </Button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full p-1">
          <motion.div 
            className="w-1 h-2 bg-blue-400 rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
