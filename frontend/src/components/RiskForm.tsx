"use client";

import { useState } from "react";
import { Loader2, AlertCircle, User, Activity, Wine } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskFormProps {
  onSubmit: (data: any) => Promise<void>;
  isLoading: boolean;
}

export function RiskForm({ onSubmit, isLoading }: RiskFormProps) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "0",
    height: "",
    weight: "",
    high_bp: "",
    low_bp: "",
    smoke: false,
    alco: false,
    active: false,
    cholesterol: "1",
    glucose: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const apiData = {
      age: parseInt(formData.age),
      gender: parseInt(formData.gender),
      height: parseInt(formData.height),
      weight: parseFloat(formData.weight),
      high_bp: parseInt(formData.high_bp),
      low_bp: parseInt(formData.low_bp),
      smoke: formData.smoke ? 1 : 0,
      alco: formData.alco ? 1 : 0,
      active: formData.active ? 1 : 0,
      cholesterol_level_2: formData.cholesterol === "2" ? 1 : 0,
      cholesterol_level_3: formData.cholesterol === "3" ? 1 : 0,
      glucose_level_2: formData.glucose === "2" ? 1 : 0,
      glucose_level_3: formData.glucose === "3" ? 1 : 0,
    };
    onSubmit(apiData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
      {/* Section 1: Peronal Details */}
      <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
            <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                <User className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Personal Details</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2.5">
            <label htmlFor="age" className="text-sm font-semibold text-slate-300">Age (Years)</label>
            <input
              type="number"
              id="age"
              name="age"
              required
              min="1"
              max="120"
              placeholder="e.g. 45"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder:text-slate-400"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2.5">
            <label htmlFor="gender" className="text-sm font-semibold text-slate-300">Gender</label>
            <div className="relative">
              <select
                id="gender"
                name="gender"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none text-white"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="0">Female</option>
                <option value="1">Male</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            <label htmlFor="height" className="text-sm font-semibold text-slate-300">Height (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              required
              min="50"
              max="250"
               placeholder="e.g. 175"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder:text-slate-400"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2.5">
            <label htmlFor="weight" className="text-sm font-semibold text-slate-300">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              required
              min="20"
              max="300"
              step="0.1"
              placeholder="e.g. 70"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder:text-slate-400"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Medical Indicators */}
      <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
             <div className="p-2 bg-teal-900/20 rounded-lg text-teal-400">
                <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Medical Indicators</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2.5">
            <label htmlFor="high_bp" className="text-sm font-semibold text-slate-300">Systolic BP (High)</label>
            <div className="relative">
              <input
                type="number"
                id="high_bp"
                name="high_bp"
                required
                placeholder="e.g. 120"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-white placeholder:text-slate-400"
                value={formData.high_bp}
                onChange={handleChange}
              />
              <span className="absolute right-4 top-3.5 text-xs text-slate-500 font-medium">mmHg</span>
            </div>
          </div>
          <div className="space-y-2.5">
            <label htmlFor="low_bp" className="text-sm font-semibold text-slate-300">Diastolic BP (Low)</label>
             <div className="relative">
              <input
                type="number"
                id="low_bp"
                name="low_bp"
                required
                placeholder="e.g. 80"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-white placeholder:text-slate-400"
                value={formData.low_bp}
                onChange={handleChange}
              />
               <span className="absolute right-4 top-3.5 text-xs text-slate-500 font-medium">mmHg</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="cholesterol" className="text-sm font-semibold text-slate-300">Cholesterol Level</label>
            <div className="relative">
                <select
                id="cholesterol"
                name="cholesterol"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none text-white"
                value={formData.cholesterol}
                onChange={handleChange}
                >
                <option value="1">Normal</option>
                <option value="2">Above Normal</option>
                <option value="3">Well Above Normal</option>
                </select>
                <div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
            </div>
          </div>
          <div className="space-y-2.5">
            <label htmlFor="glucose" className="text-sm font-semibold text-slate-300">Glucose Level</label>
             <div className="relative">
                <select
                id="glucose"
                name="glucose"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none text-white"
                value={formData.glucose}
                onChange={handleChange}
                >
                <option value="1">Normal</option>
                <option value="2">Above Normal</option>
                <option value="3">Well Above Normal</option>
                </select>
                <div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Lifestyle */}
      <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
             <div className="p-2 bg-indigo-900/20 rounded-lg text-indigo-400">
                <Wine className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Lifestyle Factors</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/50 hover:bg-indigo-900/10 cursor-pointer transition-all">
            <input
              type="checkbox"
              name="smoke"
              className="w-5 h-5 rounded border-slate-700 text-indigo-400 focus:ring-indigo-500 bg-slate-800"
              checked={formData.smoke}
              onChange={handleChange}
            />
            <span className="font-semibold text-sm text-slate-300">Yes, I smoke</span>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/50 hover:bg-indigo-900/10 cursor-pointer transition-all">
            <input
              type="checkbox"
              name="alco"
              className="w-5 h-5 rounded border-slate-700 text-indigo-400 focus:ring-indigo-500 bg-slate-800"
              checked={formData.alco}
              onChange={handleChange}
            />
            <span className="font-semibold text-sm text-slate-300">Drink Alcohol</span>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/50 hover:bg-indigo-900/10 cursor-pointer transition-all">
            <input
              type="checkbox"
              name="active"
              className="w-5 h-5 rounded border-slate-700 text-indigo-400 focus:ring-indigo-500 bg-slate-800"
              checked={formData.active}
              onChange={handleChange}
            />
            <span className="font-semibold text-sm text-slate-300">Physically Active</span>
          </label>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full rounded-2xl bg-primary px-4 py-5 text-base font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99]",
            isLoading && "cursor-not-allowed"
          )}
        >
          {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
          {isLoading ? "Analyzing Metrics..." : "Calculate Risk Probability"}
        </button>
        <p className="text-xs text-slate-500 text-center mt-4">
          <AlertCircle className="w-3 h-3 inline mr-1" />
          By submitting this form, you acknowledge that this is an educational tool and not a medical device.
        </p>
      </div>
    </form>
  );
}
