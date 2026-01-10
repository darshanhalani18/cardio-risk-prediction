import Link from "next/link";
import { Activity } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white hover:opacity-80 transition-opacity">
          <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
             <Activity className="h-5 w-5" />
          </div>
          <span>CardioRisk</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/models" className="hover:text-primary transition-colors">
              Models
            </Link>
             <Link href="/predict" className="hover:text-primary transition-colors">
              Predict
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
