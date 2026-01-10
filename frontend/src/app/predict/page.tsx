"use client";

import { useState } from "react";
import { RiskForm } from "@/components/RiskForm";
import { ResultCard } from "@/components/ResultCard";
import { Loader2 } from "lucide-react";

export default function PredictPage() {
  const [result, setResult] = useState<{ prediction: number; risk_percent: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const handlePrediction = async (data: any) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://cardio-risk-api.onrender.com";
      
      const response = await fetch(`${apiBaseUrl}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const resultData = await response.json();
      setResult(resultData);
    } catch (err) {
      console.error(err);
      setError("An error occurred while communicating with the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setResetKey(prev => prev + 1); // This will force RiskForm to remount and reset
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Cardiovascular Risk Assessment</h1>
        <p className="text-slate-400 max-w-2xl">
          Enter your health metrics below for a real-time risk analysis using our Random Forest model.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form (60%) = 7 cols */}
        <div className="lg:col-span-7 space-y-8">
          <RiskForm key={resetKey} onSubmit={handlePrediction} isLoading={loading} />
        </div>

        {/* Right Column: Result / Sticky (40%) = 5 cols */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-red-900/20 text-red-400 border border-red-800 text-sm font-medium animate-fade-in-up">
              {error}
            </div>
          )}
          
          {loading && !result && (
             <div className="h-64 rounded-3xl border border-slate-800 bg-slate-900 flex flex-col items-center justify-center text-muted-foreground animate-pulse">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
                <p className="text-slate-400">Analyzing health metrics...</p>
             </div>
          )}
          
          {result && (
            <ResultCard 
              prediction={result.prediction} 
              riskPercent={result.risk_percent}
              onReset={handleReset}
            />
          )}

          {!result && !loading && !error && (
            <div className="hidden lg:flex h-full min-h-[400px] flex-col items-center justify-center p-8 rounded-3xl bg-slate-900/50 border-2 border-dashed border-slate-800 text-center text-slate-500">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                 <Loader2 className="w-8 h-8 opacity-20" />
              </div>
              <p className="font-medium text-slate-400">Waiting for input</p>
              <p className="text-sm mt-1 text-slate-500">Fill out the form to see your risk analysis here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
