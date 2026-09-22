"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Database, Server } from "lucide-react";

interface QuerySnippet {
  id: string;
  title: string;
  category: string;
  sql: string;
  purpose: string;
  executionTime: string;
}

const queries: QuerySnippet[] = [
  {
    id: "regional-revenue",
    title: "Regional Sales & Profit Margin Window Aggregation",
    category: "SQL Window Functions",
    purpose:
      "Calculates total revenue, order count, and regional percentage contribution across all 4 sales territories using PARTITION BY windowing.",
    executionTime: "12ms",
    sql: `SELECT 
    region,
    COUNT(DISTINCT order_id) AS total_orders,
    ROUND(SUM(sales)::numeric, 2) AS regional_revenue,
    ROUND(
        (SUM(sales) * 100.0 / SUM(SUM(sales)) OVER())::numeric, 
        1
    ) AS revenue_pct_share
FROM sales_data
GROUP BY region
ORDER BY regional_revenue DESC;`,
  },
  {
    id: "category-sla",
    title: "Category Delivery SLA & Shipping Velocity Analysis",
    category: "PostgreSQL Date Analytics",
    purpose:
      "Evaluates average order-to-ship fulfillment days per category, flagging shipping latency across Furniture and Technology orders.",
    executionTime: "8ms",
    sql: `SELECT 
    category,
    COUNT(*) AS total_shipments,
    ROUND(AVG(ship_date - order_date)::numeric, 2) AS avg_delivery_days,
    COUNT(CASE WHEN (ship_date - order_date) > 4 THEN 1 END) AS delayed_orders
FROM sales_data
WHERE ship_date IS NOT NULL
GROUP BY category
ORDER BY avg_delivery_days ASC;`,
  },
  {
    id: "churn-risk-segmentation",
    title: "High-Risk Customer Churn Segmentation Query",
    category: "Analytical CTE & Aggregation",
    purpose:
      "Identifies Month-to-Month subscribers paying via Electronic Check without technical support add-ons to extract target retention lists.",
    executionTime: "14ms",
    sql: `WITH churn_vulnerability AS (
    SELECT 
        customer_id,
        contract_type,
        payment_method,
        tenure_months,
        monthly_charges
    FROM customer_data
    WHERE contract_type = 'Month-to-Month'
      AND payment_method = 'Electronic check'
      AND tech_support = 'No'
)
SELECT 
    contract_type,
    COUNT(customer_id) AS high_risk_count,
    ROUND(AVG(tenure_months)::numeric, 1) AS avg_tenure,
    ROUND(SUM(monthly_charges)::numeric, 2) AS monthly_revenue_at_risk
FROM churn_vulnerability
GROUP BY contract_type;`,
  },
];

export default function SqlQuerySandbox() {
  const [activeQueryId, setActiveQueryId] = useState<string>("regional-revenue");
  const [copied, setCopied] = useState<boolean>(false);

  const activeQuery = queries.find((q) => q.id === activeQueryId) || queries[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeQuery.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 sm:my-10 p-4 sm:p-8 bg-[#1a1a1a] text-[#f7f5f0] border border-black/20 rounded-[2px] overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#3a3530]">
        <div>
          <span className="text-[11px] sm:text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span>Interactive SQL Analytics Sandbox</span>
          </span>
          <h4 className="font-serif text-base sm:text-lg text-[var(--color-bg)] mt-1">
            PostgreSQL Query Performance & Analytical Pipeline
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-sans text-[#a8a296] self-start sm:self-auto">
          <Database className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
          <span>PostgreSQL v16 Engine</span>
        </div>
      </div>

      {/* Query Selector Tabs with horizontal scroll on mobile */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#3a3530] pb-3 overflow-x-auto no-scrollbar scroll-smooth">
        {queries.map((q) => {
          const isActive = q.id === activeQueryId;
          return (
            <button
              key={q.id}
              onClick={() => setActiveQueryId(q.id)}
              className={`px-3 py-2 text-xs font-sans rounded-[2px] transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? "bg-[#8a6d3f] text-[#f7f5f0] font-medium"
                  : "bg-[#2a2520] text-[#a8a296] hover:text-[#f7f5f0] hover:bg-[#3a3530]"
              }`}
            >
              <Server className="w-3 h-3 shrink-0" />
              <span>{q.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Query Header Info */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <h5 className="font-serif text-sm sm:text-base text-[var(--color-bg)]">
            {activeQuery.title}
          </h5>
          <p className="text-[#a8a296] text-xs leading-relaxed mt-1">
            {activeQuery.purpose}
          </p>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#3a3530]">
          <span className="text-[11px] font-mono text-[var(--color-gold)] bg-[#2a2520] px-2 py-0.5 rounded-[2px] border border-[#3a3530]">
            Execution: {activeQuery.executionTime}
          </span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2a2520] hover:bg-[#3a3530] text-[#f7f5f0] border border-[#3a3530] rounded-[2px] text-xs transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                <span>Copy SQL</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeQuery.id}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0f0f0f] border border-[#3a3530] rounded-[2px] p-3.5 sm:p-4 font-mono text-[11px] sm:text-xs text-[#d8d3c8] overflow-x-auto leading-relaxed shadow-inner"
        >
          <pre className="whitespace-pre">
            <code>{activeQuery.sql}</code>
          </pre>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
