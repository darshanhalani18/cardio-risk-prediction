import { Code2, Database, BrainCircuit, Layout } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-4 mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-white">About the Developer</h1>
        <p className="text-xl text-slate-400">
          Bridging the gap between advanced Machine Learning and accessible Healthcare solutions.
        </p>
      </div>
      
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 text-white">Darshan Halani</h2>
            <p className="text-primary font-semibold text-lg mb-6 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5" />
             Applied ML Practitioner
            </p>
            
            <p className="text-slate-400 leading-relaxed mb-8">
              I focus on applying Machine Learning to solve real-world healthcare problems through data-driven decision systems.
              This project demonstrates my capability to build end-to-end machine learning pipelines — from raw data 
              processing and model selection to full-stack web deployment and API integration.
            </p>

            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-slate-800 pb-2 text-white">Key Contributions</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 bg-blue-900/20 p-2 rounded-lg text-blue-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Data Engineering</h4>
                    <p className="text-sm text-slate-400">Preprocessing complex datasets, feature engineering (BMI, Pulse Pressure), and standardization.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-purple-900/20 p-2 rounded-lg text-purple-400">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Model Development</h4>
                    <p className="text-sm text-slate-400">Training and evaluating Logistic Regression, Decision Trees, and Random Forest models.</p>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <div className="mt-1 bg-amber-900/20 p-2 rounded-lg text-amber-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Backend API</h4>
                    <p className="text-sm text-slate-400">Developing a robust RESTful API using FastAPI for real-time model serving.</p>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <div className="mt-1 bg-teal-900/20 p-2 rounded-lg text-teal-400">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Full-Stack Integration</h4>
                    <p className="text-sm text-slate-400">Building a responsive, accessible frontend with Next.js and Tailwind CSS.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 pt-8 border-t border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "Scikit-Learn", "Pandas", "Next.js", "React", "Tailwind CSS", "TypeScript"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
