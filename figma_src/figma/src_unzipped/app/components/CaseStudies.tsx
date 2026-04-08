import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Target, Lightbulb, TrendingUp, Code, Brain, Cpu, Sparkles, Database } from 'lucide-react';

export function CaseStudies() {
  const projects = [
    {
      title: "EMG asosida qo'l harakatini aniqlash tizimi",
      badge: "Machine Learning Project",
      problem: "Mushak signallarini aniqlash murakkab",
      solution: "EMG signal asosida ML model yaratildi",
      result: "Ishlaydigan gesture aniqlash tizimi (working prototype)",
      techStack: ["Python", "TensorFlow", "Signal Processing", "ML"],
      featured: true,
      gradient: "from-blue-600/20 to-cyan-600/20",
      icon: Brain,
    },
    {
      title: "BMI uchun AI platforma",
      badge: "AI Automation",
      problem: "Talabalar ko'p vaqt yo'qotadi",
      solution: "AI yordamida yozishni avtomatlashtirish",
      result: "~30–40% vaqt tejaldi",
      techStack: ["ChatGPT API", "No-Code", "Automation"],
      gradient: "from-purple-600/20 to-pink-600/20",
      icon: Sparkles,
    },
    {
      title: "Jamoat salomatligi tizimi",
      badge: "Digital Transformation",
      problem: "Qo'lda yuritiladigan ma'lumotlar",
      solution: "Raqamli tizim",
      result: "Tartib va aniqlik oshdi",
      techStack: ["Web App", "Database", "No-Code"],
      gradient: "from-emerald-600/20 to-teal-600/20",
      icon: Database,
    },
    {
      title: "Uyinchoq almashinish platformasi",
      badge: "Web Platform",
      problem: "Foydalanilmayotgan o'yinchoqlar",
      solution: "Almashuv platformasi",
      result: "Foydalanuvchilar o'rtasida almashuv",
      techStack: ["React", "Firebase", "No-Code"],
      gradient: "from-orange-600/20 to-amber-600/20",
      icon: Cpu,
    },
    {
      title: "Do'konlar uchun web saytlar",
      badge: "Business Solutions",
      problem: "Online mavjudlik yo'q",
      solution: "No-code web saytlar",
      result: "Mijozlarga chiqish imkoniyati oshdi",
      techStack: ["Webflow", "SEO", "No-Code"],
      gradient: "from-violet-600/20 to-purple-600/20",
      icon: Code,
    },
  ];

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Real Loyihalar
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Har bir loyiha konkret muammoni hal qiladi va aniq natijalar keltirib chiqaradi
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`
                  p-6 sm:p-8 border border-blue-500/20 bg-gradient-to-br ${project.gradient} backdrop-blur-sm
                  hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10
                  ${project.featured ? 'lg:p-10' : ''}
                `}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left side - Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-3 bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {project.badge}
                      </Badge>
                      <h3 className={`${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} text-white mb-2`} style={{ fontWeight: 600 }}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Problem, Solution, Result */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-gray-400">Muammo</span>
                        </div>
                        <p className="text-gray-300">{project.problem}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-gray-400">Yechim</span>
                        </div>
                        <p className="text-gray-300">{project.solution}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">Natija</span>
                        </div>
                        <div className="inline-block px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30">
                          <p className="text-green-300" style={{ fontWeight: 600 }}>{project.result}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
