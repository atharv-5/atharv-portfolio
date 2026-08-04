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
    slug: "customer-churn-analysis",
    number: "01",
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
    slug: "sales-performance-dashboard",
    number: "02",
    category: "DATA ANALYTICS & BI",
    title: "Sales & Business Performance Dashboard",
    shortDescription:
      "ETL pipeline in Python, PostgreSQL querying, and interactive Power BI dashboard tracking $2.29M revenue across 4,922 orders.",
    problem:
      "Executive leaders lacked centralized, real-time visibility into multi-regional sales performance, product category profitability, and delivery SLA bottlenecks.",
    approach:
      "Built an automated Python ETL pipeline (`sqlalchemy`, `psycopg2`) to clean and load Superstore sales data into PostgreSQL. Authored analytical SQL queries for KPI aggregation and connected Power BI for dynamic regional and category filtering.",
    result:
      "Delivered real-time executive dashboard tracking $2,297,200.86 total revenue, 4,922 orders, 793 unique customers, top-performing West region ($710.2K), and average 3.96-day shipping SLA.",
    techStack: ["Power BI", "PostgreSQL", "SQL", "Python ETL", "Pandas", "Data Analytics"],
    githubUrl: "https://github.com/atharv-5/sales-business-performance-dashboard",
  },
  {
    slug: "athrion-ai",
    number: "03",
    category: "GENERATIVE AI & FULL-STACK",
    title: "Athrion AI — Prep & Resume Platform",
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
];
