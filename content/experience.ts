export interface ExperienceItem {
  role: string;
  company: string;
  partner: string;
  duration: string;
  location: string;
  projectSlug?: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "AI for Sustainability Development Intern",
    company: "1M1B (One Million for One Billion)",
    partner: "IBM",
    duration: "Jul 2026 – Sep 2026",
    location: "Remote",
    projectSlug: "airlens-aqi-explainability",
    highlights: [
      "Gained hands-on experience with AI/ML concepts, LLMs, IBM Granite models, RAG frameworks, and agentic AI systems through IBM Labs.",
      "Designed and built AirLens, an AI-powered urban AQI prediction & explainability platform as the internship capstone — trained an XGBoost regression model on the Air Quality Data in India dataset, applied SHAP for pollutant-level feature attribution, and layered in an LLM-driven conversational assistant (Gemini) for health advisories, deployed via Streamlit.",
      "Explored how AI supports climate action, clean energy, waste reduction, biodiversity, and sustainable smart city infrastructure.",
      "Utilized IBM SkillsBuild e-learning platform with curated technical pathways in machine learning, cloud fundamentals, and DBaaS.",
    ],
    skills: ["IBM Granite", "LLMs", "RAG Frameworks", "Agentic AI", "XGBoost", "SHAP", "Gemini LLM", "Streamlit"],
  },
];
