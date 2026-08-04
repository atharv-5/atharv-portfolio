export interface Article {
  slug: string;
  number: string;
  category: string;
  title: string;
  readTime: string;
  summary: string;
  keyTakeaway: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "shap-vs-feature-importance",
    number: "01",
    category: "MODEL INTERPRETABILITY & RISK",
    title: "SHAP Values vs. Standard Feature Importance in Financial Risk Modeling",
    readTime: "4 min read",
    summary:
      "Traditional Gini feature importance in tree models often overstates noisy continuous variables. SHAP (SHapley Additive exPlanations) grounds feature attribution in game theory, offering consistent local and global risk factor explanations required by enterprise compliance.",
    keyTakeaway:
      "SHAP provides directional impact (e.g., how specific tenure thresholds shift individual churn probability), enabling auditable decision-making in risk scoring.",
    tags: ["SHAP", "Model Interpretability", "Random Forest", "Risk Analytics"],
  },
  {
    slug: "etl-partitioning-strategies",
    number: "02",
    category: "DATA ENGINEERING & DATABASE OPS",
    title: "ETL Partitioning & Materialized Aggregation in PostgreSQL",
    readTime: "5 min read",
    summary:
      "When scaling relational sales schemas to millions of transactions, query response degradation stems from full table scans. Combining Python chunked loading with PostgreSQL materialized views and window function partitioning eliminates reporting latency.",
    keyTakeaway:
      "Window functions (`PARTITION BY`) paired with materialized indexes cut executive reporting query execution times by over 80%.",
    tags: ["PostgreSQL", "Python ETL", "SQL Window Functions", "Data Modeling"],
  },
  {
    slug: "genai-failover-architecture",
    number: "03",
    category: "SYSTEMS & GEN AI ARCHITECTURE",
    title: "Multi-Tier LLM Failover & Low-Latency RAG Pipelines",
    readTime: "4 min read",
    summary:
      "Enterprise AI applications cannot rely on a single LLM API provider due to rate limits and downtime. Implementing a multi-tier fallback architecture (Primary LLaMA 3.3 70B → OpenRouter fallback → local mock fallback) ensures 99.9% uptime for AI interview systems.",
    keyTakeaway:
      "Designing graceful degradation and fallback routes in LLM pipelines guarantees uninterrupted user experience during API outages.",
    tags: ["LLaMA 3.3 70B", "LangChain", "RAG Pipelines", "System Resilience"],
  },
];
