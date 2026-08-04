export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Data Science",
    skills: ["SQL", "Python", "Java", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
    category: "Machine Learning",
    skills: [
      "scikit-learn",
      "Random Forest",
      "Model Evaluation & Metrics",
      "SHAP Interpretability",
      "Feature Engineering",
    ],
  },
  {
    category: "Generative AI",
    skills: [
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Embeddings",
      "ChromaDB / FAISS",
    ],
  },
  {
    category: "Visualization & Tools",
    skills: ["Power BI", "Excel / Spreadsheets", "Git", "GitHub", "Vercel"],
  },
];
