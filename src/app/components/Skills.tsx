import { motion } from 'motion/react';
import { MessageSquare, Wrench, Workflow, Palette, Sparkles, Code2, Zap, Blocks } from 'lucide-react';
import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: "AI Tools",
      icon: Sparkles,
      skills: ["ChatGPT", "Prompt Engineering", "AI Automation", "Machine Learning"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "No-Code Tools",
      icon: Blocks,
      skills: ["Webflow", "Bubble", "Zapier", "Make (Integromat)"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Development",
      icon: Code2,
      skills: ["Python", "React", "Web Development", "API Integration"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Process & Design",
      icon: Palette,
      skills: ["Automation", "UI/UX Basics", "Workflow Design", "Problem Solving"],
      gradient: "from-orange-500 to-amber-500",
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
            Ko'nikmalar
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Zamonaviy texnologiyalar va vositalar bilan ishlash tajribasi
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-4" style={{ fontWeight: 600 }}>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800/50 text-gray-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
                        >
                          {skill}
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
