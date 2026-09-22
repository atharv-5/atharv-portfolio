"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Activity, ShieldCheck, PieChart } from "lucide-react";

interface ModelMetric {
  id: string;
  name: string;
  value: string;
  benchmark: string;
  interpretation: string;
  icon: typeof BarChart2;
}

const metrics: ModelMetric[] = [
  {
    id: "accuracy",
    name: "Prediction Accuracy",
    value: "94.2%",
    benchmark: "Baseline: 73.4%",
    interpretation:
      "Random Forest model outperforming standard Logistic Regression baseline by +20.8% on unseen test partition.",
    icon: ShieldCheck,
  },
  {
    id: "roc",
    name: "ROC-AUC Score",
    value: "0.914",
    benchmark: "Target > 0.85",
    interpretation:
      "Demonstrates exceptional class separation capabilities between stable customers and high-risk churn candidates.",
    icon: Activity,
  },
  {
    id: "recall",
    name: "Churn Recall Rate",
    value: "88.6%",
    benchmark: "High-Risk Segment",
    interpretation:
      "Ensures nearly 9 out of 10 at-risk customers are identified prior to contract termination for proactive intervention.",
    icon: BarChart2,
  },
  {
    id: "shap",
    name: "SHAP Key Driver",
    value: "Contract Type",
    benchmark: "42.7% Month-to-Month",
    interpretation:
      "SHAP feature attribution identifies short-term contract commitment as the single largest contributor to customer loss.",
    icon: PieChart,
  },
];

export default function ModelMetricsWidget() {
  const [activeMetric, setActiveMetric] = useState<string>("accuracy");
  const selected = metrics.find((m) => m.id === activeMetric) || metrics[0];
  const Icon = selected.icon;

  return (
    <div className="my-8 p-4 sm:p-8 bg-[var(--color-cream-block)] border border-[var(--color-border)] rounded-[2px] overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
        <div>
          <span className="text-[11px] sm:text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.1em]">
            Interactive Model Diagnostics
          </span>
          <h4 className="font-serif text-base sm:text-lg text-[var(--color-dark)] mt-0.5">
            Institutional Risk Model Validation
          </h4>
        </div>
        <span className="text-[11px] font-sans px-2.5 py-1 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted)] rounded-[2px] self-start sm:self-auto">
          Random Forest Classifier
        </span>
      </div>

      {/* Metric Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {metrics.map((m) => {
          const isActive = m.id === activeMetric;
          const TabIcon = m.icon;
          return (
            <button
              key={m.id}
              onClick={() => setActiveMetric(m.id)}
              className={`p-2.5 sm:p-3 text-left border rounded-[2px] transition-all flex flex-col justify-between h-20 cursor-pointer ${
                isActive
                  ? "bg-[var(--color-dark)] text-[var(--color-bg)] border-[var(--color-dark)] shadow-xs"
                  : "bg-[var(--color-bg)] text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-gold)]"
              }`}
            >
              <div className="flex items-center justify-between w-full gap-1">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-medium truncate">
                  {m.name.split(" ")[0]}
                </span>
                <TabIcon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? "text-[var(--color-gold)]" : "opacity-50"
                  }`}
                />
              </div>
              <span className="font-serif text-base sm:text-lg leading-none mt-1">
                {m.value}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Metric Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="bg-[var(--color-bg)] p-4 sm:p-5 border border-[var(--color-border)] rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-[var(--color-cream-block)] border border-[var(--color-border)] rounded-[2px] text-[var(--color-gold)] shrink-0 hidden sm:block">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h5 className="font-serif text-sm sm:text-base text-[var(--color-dark)]">
                  {selected.name}
                </h5>
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-[var(--color-gold)] tracking-wide uppercase">
                  [{selected.benchmark}]
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mt-1">
                {selected.interpretation}
              </p>
            </div>
          </div>

          <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[var(--color-border)] w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
            <div className="text-xs uppercase tracking-wider text-[var(--color-muted-2)]">
              Metric Value
            </div>
            <div className="font-serif text-xl sm:text-2xl text-[var(--color-dark)] font-semibold mt-0.5">
              {selected.value}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
