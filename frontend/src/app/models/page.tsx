"use client";

import { Activity, GitBranch, Trees, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ModelsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
       <motion.div 
         initial="hidden"
         animate="visible"
         variants={fadeInUp}
         className="text-center mb-16 space-y-4"
       >
          <h1 className="text-4xl font-bold tracking-tight text-white">Machine Learning Models</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
            We evaluated three distinct algorithms to ensure the reliability of our predictions. 
            Below is a breakdown of their performance and characteristics.
          </p>
       </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Model 1: Logistic Regression */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-sm hover:shadow-md transition-all"
        >
          <div className="w-14 h-14 bg-blue-900/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
            <Activity className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Logistic Regression</h3>
          <div className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Baseline Model</div>
          
          <div className="space-y-4 mb-8">
            <div>
              <span className="text-sm font-semibold text-slate-400 block mb-1">Test Accuracy</span>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[72.6%]" />
                </div>
                <span className="font-bold text-slate-200">~72.6%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
             <h4 className="font-bold text-sm text-white">Characteristics:</h4>
             <ul className="space-y-2 text-sm text-slate-400 font-medium">
               <li>• Linear decision boundary</li>
               <li>• Fast training and inference</li>
               <li>• Struggle with non-linear patterns</li>
             </ul>
          </div>
        </motion.div>

        {/* Model 2: Decision Tree */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-sm hover:shadow-md transition-all"
        >
          <div className="w-14 h-14 bg-orange-900/20 text-orange-400 rounded-2xl flex items-center justify-center mb-6">
            <GitBranch className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Decision Tree</h3>
          <div className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Interpretability</div>
          
           <div className="space-y-4 mb-8">
            <div>
              <span className="text-sm font-semibold text-slate-400 block mb-1">Test Accuracy</span>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[72.5%]" />
                </div>
                <span className="font-bold text-slate-200">~72.5%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
             <h4 className="font-bold text-sm text-white">Characteristics:</h4>
             <ul className="space-y-2 text-sm text-slate-400 font-medium">
               <li>• Rule-based prediction</li>
               <li>• Easy to visualize</li>
               <li>• Prone to overfitting</li>
             </ul>
          </div>
        </motion.div>

        {/* Model 3: Random Forest */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-slate-900 rounded-3xl border-2 border-primary ring-4 ring-primary/5 p-8 shadow-xl relative overflow-hidden transform md:-translate-y-4"
        >
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-sm">
             DEPLOYED MODEL
          </div>
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
            <Trees className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-primary">Random Forest</h3>
          <div className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Ensemble Method</div>
          
          <div className="space-y-4 mb-8">
            <div>
              <span className="text-sm font-semibold text-slate-400 block mb-1">Test Accuracy</span>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[72.9%]" />
                </div>
                <span className="font-bold text-primary">~72.9%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
             <h4 className="font-bold text-sm text-white">Why we chose it:</h4>
             <ul className="space-y-2 text-sm text-slate-300 font-medium">
               <li className="flex gap-2">
                 <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                 <span>Highest generalization accuracy</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                 <span>Reduces variance through bagging</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                 <span>Handles high-dimensional data well</span>
               </li>
             </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
