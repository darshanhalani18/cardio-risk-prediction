"use client";

import Link from "next/link";
import { ArrowRight, Activity, HeartPulse, Stethoscope, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const // Type assertion to fix specific type error
      } 
    }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-br from-slate-950 to-slate-900 text-center px-4 relative border-b border-slate-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto max-w-5xl space-y-8 relative z-10"
        >
          <motion.div 
            variants={fadeInUp}
            className="mx-auto w-20 h-20 bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-primary mb-8 shadow-xl ring-4 ring-slate-700/30"
          >
            <HeartPulse className="w-10 h-10 text-blue-500 animate-pulse-slow" />
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-50 leading-tight"
          >
            Protect Your Heart, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Predict Your Risk
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Advanced machine learning models to assess cardiovascular risk instantly. <br className="hidden md:block"/>
            <span className="font-bold text-white">Early awareness can save lives.</span>
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
          >
            <Link 
              href="/predict" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-blue-600/30"
            >
              Check Your Risk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/how-it-works" 
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:scale-105 hover:border-slate-600 hover:text-white shadow-sm"
            >
              How It Works
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-slate-950">
        <div className="container mx-auto py-24 px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose This Tool?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              Built with precision and designed for clarity, our system offers a professional grade assessment.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
          {[
            {
              title: "Accurate ML Models",
              desc: "Utilizing Random Forest algorithms (~73% accuracy) to analyze complex health patterns effectively.",
              icon: <Activity className="h-7 w-7" />,
              bgClass: "bg-blue-900/20",
              textClass: "text-blue-400",
              borderHover: "hover:border-blue-800"
            },
            {
              title: "Medical Standard",
              desc: "Designed with a professional healthcare focus, prioritizing clarity, privacy, and actionable insights.",
              icon: <Stethoscope className="h-7 w-7" />,
              bgClass: "bg-teal-900/20",
              textClass: "text-teal-400",
              borderHover: "hover:border-teal-800"
            },
            {
              title: "Instant Analysis",
              desc: "Get immediate results with a detailed risk breakdown and visual reports in seconds.",
              icon: <HeartPulse className="h-7 w-7" />,
              bgClass: "bg-indigo-900/20",
              textClass: "text-indigo-400",
              borderHover: "hover:border-indigo-800"
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className={`group p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${feature.borderHover}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-150 transition-transform duration-500 pointer-events-none text-white">
                  <Activity className="w-40 h-40" />
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-6 transition-transform ${feature.bgClass} ${feature.textClass}`}>
                  {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
