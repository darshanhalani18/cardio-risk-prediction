"use client";

import { Database, Binary, Scale, BrainCircuit, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Input Health Metrics",
      description: "You provide essential health data such as Age, BMI, Blood Pressure, and Cholesterol levels via our secure form.",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      color: "border-l-4 border-l-blue-500"
    },
    {
      title: "Feature Engineering",
      description: "The system calculates derived features like Body Mass Index (BMI) and Pulse Pressure to enhance prediction accuracy.",
      icon: <Binary className="w-6 h-6 text-teal-400" />,
       color: "border-l-4 border-l-teal-500"
    },
    {
      title: "Data Scaling",
      description: "Features are normalized using Standard Scaling to ensure all inputs are on a comparable scale for the model.",
      icon: <Scale className="w-6 h-6 text-indigo-400" />,
       color: "border-l-4 border-l-indigo-500"
    },
    {
      title: "Model Inference",
      description: "Our trained Random Forest classifier ",
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
       color: "border-l-4 border-l-purple-500"
    },
    {
      title: "Risk Assessment",
      description: "The model outputs a probability score, categorizing your risk level as Low, Moderate, or High.",
      icon: <Activity className="w-6 h-6 text-rose-400" />,
       color: "border-l-4 border-l-rose-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white">How It Works</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          A transparent look at the machine learning pipeline powering our predictions.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              
              {/* Content Card */}
              <div className="flex-1">
                <div className={`p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm transition-all hover:shadow-md ${step.color}`}>
                  <h3 className="text-xl font-bold mb-2 text-white">{index + 1}. {step.title}</h3>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shadow-lg z-20">
                {step.icon}
              </div>

              {/* Spacer for Alternate Layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.5 }}
         className="mt-20 p-6 rounded-2xl bg-slate-800 border border-slate-700 text-center"
        >
        <p className="text-slate-200 font-medium">
          Note on Accuracy: The Random Forest model demonstrated the best generalization performance 
          (~73% test accuracy) on our validation dataset and is therefore used for final predictions.
        </p>
      </motion.div>
    </div>
  );
}
