export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "credit-risk-explainability",
    number: "01",
    category: "EXPLAINABLE AI & MACHINE LEARNING",
    title: "Credit Risk Explainability & AI Underwriting Agent",
    shortDescription:
      "End-to-end explainable AI (XAI) credit-risk platform on the Home Credit Default Risk dataset using XGBoost (ROC-AUC 0.7554), SHAP TreeExplainer, policy compliance RAG, and Streamlit.",
    problem:
      "Traditional credit scoring models operate as black boxes, preventing financial institutions from meeting FCRA adverse action notice compliance and explaining specific decision drivers to applicants.",
    approach:
      "Built an end-to-end explainable AI (XAI) credit-risk platform on the Home Credit Default Risk dataset; trained an XGBoost classifier (ROC-AUC 0.7554) with SHAP (TreeExplainer) for per-decision feature attribution. Designed a policy-compliance RAG layer and Streamlit dashboard delivering auditable, regulation-aligned explanations for underwriting decisions.",
    result:
      "Delivered real-time default probability scoring, auditable SHAP per-decision feature attributions, regulatory policy compliance citations, and actionable applicant counterfactual guidance.",
    techStack: [
      "Python",
      "XGBoost",
      "SHAP",
      "RAG / Policy Search",
      "Streamlit",
      "scikit-learn",
      "Pandas",
    ],
    githubUrl: "https://github.com/atharv-5/credit-risk-explainability-assistant",
    liveUrl: "https://credit-risk-explainability-assistant.streamlit.app",
  },
  {
    slug: "athrion-ai",
    number: "02",
    category: "GENERATIVE AI & FULL-STACK",
    title: "Athrion AI — Interview Prep & Resume Analysis Platform",
    shortDescription:
      "Full-stack platform combining AI mock interviews, an AI resume analyzer, and a performance dashboard powered by Groq (LLaMA 3.3 70B), Node.js/Express, React, and MongoDB.",
    problem:
      "Job applicants lack instantaneous, high-quality technical interview feedback and resume ATS optimization tailored to target roles.",
    approach:
      "Co-built and deployed a full-stack platform combining AI mock interviews, an AI resume analyzer, and a performance dashboard; owned backend architecture, database design, and AI pipeline integration. Engineered a multi-tier AI pipeline with automatic failover (Groq LLaMA 3.3 70B -> OpenRouter -> local simulation) and a resume-parsing pipeline that extracts skills and recommends target roles.",
    result:
      "Achieved sub-second prompt latency with multi-tier failover resiliency, automated resume skill extraction, and launched a secure full-stack user dashboard.",
    techStack: [
      "React",
      "Node.js / Express",
      "MongoDB",
      "Groq (LLaMA 3.3 70B)",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/atharv-5/athrion-interview-platform",
  },
  {
    slug: "customer-churn-analysis",
    number: "03",
    category: "MACHINE LEARNING & SQL",
    title: "Customer Churn Analysis & Retention Strategy",
    shortDescription:
      "EDA and Random Forest classification pipeline on 7,043 telecom customers, finding a 26.54% churn rate with Contract Type (42.7% vs 2.8% for 2-year) as the top driver.",
    problem:
      "Subscriber attrition severely impacted recurring revenue, but decision-makers lacked exact segmentation data on high-risk tenure groups and key product vulnerability vectors.",
    approach:
      "Built an EDA and Random Forest classification pipeline on 7,043 telecom customers, finding a 26.54% churn rate with Contract Type as the top driver (42.7% vs. 2.8% for two-year contracts). Found 53% of churned customers left within their first 12 months; translated findings into 3 retention strategies (contract incentives, onboarding campaigns, tech-support bundling).",
    result:
      "Formulated 3 targeted retention strategies (annual contract incentives, first-year onboarding touchpoints, and tech-support bundling) to mitigate high-risk customer attrition.",
    techStack: ["Python", "scikit-learn", "Random Forest", "PostgreSQL / SQL", "Pandas", "Matplotlib / Seaborn"],
    githubUrl: "https://github.com/atharv-5/churn-predictor",
  },
  {
    slug: "airlens-aqi-explainability",
    number: "04",
    category: "AI FOR SUSTAINABILITY & TIME-SERIES",
    title: "AirLens: Urban Air Quality Prediction & Explainability",
    shortDescription:
      "AI-powered urban AQI prediction & explainability platform — trained an XGBoost regression model on Air Quality Data in India, applied SHAP pollutant attribution, and layered Gemini LLM for health advisories.",
    problem:
      "Urban air pollution surges in Indian metros strain municipal healthcare, but traditional forecast models fail to explain why pollution spikes occur or what specific interventions will reduce AQI.",
    approach:
      "Trained an XGBoost regression model on the Air Quality Data in India dataset, applied SHAP for pollutant-level feature attribution, and layered in an LLM-driven conversational assistant (Gemini) for health advisories, deployed via Streamlit.",
    result:
      "Achieved R² > 0.88 AQI forecasting accuracy with real-time SHAP pollutant waterfall charts and automated municipal health advisories.",
    techStack: [
      "Python",
      "XGBoost",
      "SHAP",
      "Gemini LLM",
      "Streamlit",
      "Pandas",
      "scikit-learn",
    ],
    githubUrl: "https://github.com/atharv-5/airlens-aqi-explainability",
    liveUrl: "https://airlens-aqi-explainability.streamlit.app",
  },
  {
    slug: "sales-performance-dashboard",
    number: "05",
    category: "DATA ANALYTICS & BI",
    title: "Sales & Business Performance Dashboard",
    shortDescription:
      "ETL pipeline in Python, PostgreSQL querying, and interactive Power BI dashboard tracking $2.29M revenue across 4,922 orders.",
    problem:
      "Executive leaders lacked centralized, real-time visibility into multi-regional sales performance, product category profitability, and delivery SLA bottlenecks.",
    approach:
      "Built an automated Python ETL pipeline (sqlalchemy, psycopg2) to clean and load Superstore sales data into PostgreSQL. Authored analytical SQL queries for KPI aggregation and connected Power BI for dynamic regional and category filtering.",
    result:
      "Delivered real-time executive dashboard tracking $2,297,200.86 total revenue, 4,922 orders, 793 unique customers, top-performing West region ($710.2K), and average 3.96-day shipping SLA.",
    techStack: ["Power BI", "PostgreSQL", "SQL", "Python ETL", "Pandas", "Data Analytics"],
    githubUrl: "https://github.com/atharv-5/sales-business-performance-dashboard",
  },
];
