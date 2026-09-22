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
    slug: "athrion-ai",
    number: "01",
    category: "GENERATIVE AI & FULL-STACK",
    title: "Athrion AI — Interview Prep & Resume Platform",
    shortDescription:
      "Interview-prep and resume-analysis platform powered by Groq LLaMA 3.3 70B, Node.js, and React with end-to-end security auditing.",
    problem:
      "Job applicants often struggle to receive instantaneous, high-quality technical interview feedback and resume ATS optimization tailored to target roles.",
    approach:
      "Architected a scalable web application leveraging Groq LLaMA 3.3 70B for low-latency AI responses. Implemented secure JWT authentication middleware, robust DB fallbacks, and an editorial UI redesign.",
    result:
      "Audited and patched core auth security vulnerabilities, optimized prompt latency to sub-second responses, and launched a full UI redesign.",
    techStack: [
      "React / Vite",
      "Node.js / Express",
      "MongoDB",
      "Groq LLaMA 3.3 70B",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/atharv-5/athrion-interview-platform",
  },
  {
    slug: "credit-risk-explainability",
    number: "02",
    category: "EXPLAINABLE AI & MACHINE LEARNING",
    title: "Credit Risk Explainability & AI Underwriting Agent",
    shortDescription:
      "End-to-end Explainable AI (XAI) platform using XGBoost, SHAP feature attributions, policy compliance RAG, and Streamlit dashboard.",
    problem:
      "Traditional credit scoring models act as black boxes, making it difficult for financial institutions to comply with FCRA adverse action notice requirements and explain decision drivers to applicants.",
    approach:
      "Trained an XGBoost model on applicant financial metrics, integrated a game-theoretic SHAP TreeExplainer engine for local & global feature attributions, indexed credit underwriting policy rules, and built an automated decision agent generating human-readable compliance reports and remediation plans.",
    result:
      "Delivered real-time default probability scoring, interactive SHAP waterfall/impact visualizations, regulatory citations, and actionable counterfactual advice.",
    techStack: [
      "Python",
      "XGBoost",
      "SHAP (XAI)",
      "Streamlit",
      "RAG / Policy Search",
      "scikit-learn",
      "Pandas",
    ],
    githubUrl: "https://github.com/atharv-5/credit-risk-explainability-assistant",
    liveUrl: "https://credit-risk-explainability-assistant.streamlit.app",
  },
  {
    slug: "customer-churn-analysis",
    number: "03",
    category: "MACHINE LEARNING & SQL",
    title: "Customer Churn Analysis & Retention Strategy",
    shortDescription:
      "End-to-end exploratory data analysis and predictive modeling identifying key churn drivers across 7,043 subscribers using Python, Random Forest, and SQL.",
    problem:
      "Subscription service attrition was severely impacting recurring revenue, but decision-makers lacked exact segmentation data on high-risk tenure groups and key product vulnerability drivers.",
    approach:
      "Processed 7,043 customer records with Python (Pandas, NumPy) and structured SQL queries in PostgreSQL. Trained a Random Forest Classifier to score feature importance. Identified Month-to-Month contracts (42.7% churn rate vs 2.8% for 2-year contracts) and first-year tenure (53% of total churn) as primary vulnerability vectors.",
    result:
      "Analyzed $2.2M+ implicit risk value across 7,043 customers and formulated strategic retention playbooks (annual contract incentives, first-6-month onboarding checks, and bundled tech support).",
    techStack: ["Python", "scikit-learn", "Random Forest", "PostgreSQL / SQL", "Pandas", "Matplotlib / Seaborn"],
    githubUrl: "https://github.com/atharv-5/churn-predictor",
  },
  {
    slug: "airlens-aqi-explainability",
    number: "04",
    category: "AI FOR SUSTAINABILITY & TIME-SERIES",
    title: "AirLens: Urban Air Quality Prediction & Explainability",
    shortDescription:
      "Urban AQI prediction and explainability engine leveraging XGBoost regression, SHAP pollutant attributions, and Gemini LLM health advisories.",
    problem:
      "Urban air pollution surges in Indian metros strain municipal healthcare, but traditional forecast models fail to explain why pollution spikes occur or what specific policy interventions will reduce AQI.",
    approach:
      "Engineered temporal rolling features and city encodings from multi-city CPCB air quality datasets, trained an XGBoost regressor, extracted SHAP pollutant drivers (PM2.5, PM10, NO2), and integrated Gemini 1.5 Flash LLM to generate health advisories.",
    result:
      "Achieved R² > 0.88 AQI forecasting accuracy with real-time SHAP pollutant waterfall charts and automated municipal health advisories.",
    techStack: [
      "Python",
      "XGBoost",
      "SHAP (XAI)",
      "Streamlit",
      "Gemini 1.5 Flash",
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
