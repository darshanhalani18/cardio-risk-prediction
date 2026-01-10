import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-white">CardioRisk</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              An advanced machine learning system for cardiovascular risk assessment. 
              Designed for educational purposes to demonstrate the power of AI in healthcare.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Developer</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/models" className="hover:text-primary transition-colors">ML Models</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} CardioRisk Project. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/darshanhalani18" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/darshan-halani-1b362a24b/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
             <a href="mailto:halanidarshan@gmail.com" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
