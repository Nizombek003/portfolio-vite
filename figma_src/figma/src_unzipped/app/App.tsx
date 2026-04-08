import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CaseStudies } from './components/CaseStudies';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 dark text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      <div className="relative z-10">
        <Hero />
        <TrustBar />
        <CaseStudies />
        <Skills />
        <Process />
        <About />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>© 2026 Shomirzayev Nizombek. Barcha huquqlar himoyalangan.</p>
              <p className="text-sm mt-2">AI & No-Code Developer | Uzbekistan</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
