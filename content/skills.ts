export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Data Science",
    skills: ["SQL", "Python", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
    category: "Machine Learning",
    skills: [
      "scikit-learn",
      "Random Forest",
      "XGBoost",
      "Model Evaluation & Metrics",
      "SHAP Interpretability",
      "Feature Engineering",
    ],
  },
  {
    category: "Visualization & Tools",
    skills: ["Power BI", "Excel / Spreadsheets", "Git", "GitHub", "Vercel"],
  },
];

export const skillsNote = "Also proficient in Java (DSA & problem-solving)";
