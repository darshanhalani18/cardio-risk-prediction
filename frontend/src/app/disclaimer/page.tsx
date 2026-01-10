import { ShieldAlert, AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-sm relative overflow-hidden">
        {/* Decorative corner for visual interest */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none text-slate-300">
           <ShieldAlert className="w-40 h-40" />
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-amber-900/50 rounded-xl text-amber-400 shadow-sm border border-amber-800">
             <ShieldAlert className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-white">Medical Disclaimer</h1>
        </div>
        
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
          <p>
            The Cardiovascular Disease Risk Prediction System is a machine learning-based demonstration designed strictly for <strong className="text-white">educational and research purposes only</strong>.
          </p>
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 border-l-4 border-l-amber-500">
            <div className="flex items-start gap-3">
               <AlertTriangle className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
               <div>
                  <p className="font-bold text-white mb-2">
                        NOT A MEDICAL DEVICE
                  </p>
                  <p className="text-slate-300 text-base">
                        The results provided by this application <strong className="text-white">DO NOT constitute medical advice, diagnosis, or treatment</strong>. 
                        The prediction is based on statistical patterns found in a historical training dataset and may not be accurate for every individual.
                  </p>
               </div>
            </div>
          </div>

          <p>
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
            Never disregard professional medical advice or delay in seeking it because of something you have read on this application.
          </p>
          <p className="text-base text-slate-400 pt-6 border-t border-slate-700 mt-8">
            In case of a medical emergency, call your local emergency services immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
