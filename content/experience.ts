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
    duration: "28 July 2024 — 21 September 2024",
    location: "Remote / IBM Labs",
    projectSlug: "airlens-aqi-explainability",
    highlights: [
      "Hands-on learning with AI/ML concepts, LLMs, IBM Granite models, RAG frameworks, and Agentic AI systems with IBM Labs & IBM Bob.",
      "Explored how AI can support climate action, clean energy, waste reduction, biodiversity, and sustainable smart cities.",
      "Designed and prototyped AirLens—an AI-powered urban AQI prediction & explainability solution guided by expert mentors from IBM and 1M1B.",
      "Accessed SkillsBuild e-learning platform with over 80,000 curated courses on technical and professional emerging technology skills.",
      "Learned directly from AI and emerging tech professionals from IBM and 1M1B through interactive lab sessions.",
    ],
    skills: ["IBM Granite", "IBM Bob", "RAG Frameworks", "LLMs", "XGBoost", "SHAP", "Agentic AI", "Sustainability AI"],
  },
];
