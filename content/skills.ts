export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["SQL", "Python", "Java", "JavaScript (Basic)"],
  },
  {
    category: "Data Analytics & ML",
    skills: [
      "Data Cleaning & EDA",
      "XGBoost",
      "scikit-learn",
      "SHAP (Explainable AI)",
      "Random Forest",
      "Power BI",
      "Excel",
    ],
  },
  {
    category: "Libraries & Databases",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "Frameworks, Tools & Cloud",
    skills: [
      "React.js (Basic)",
      "Node.js (Basic)",
      "Express.js (Basics)",
      "Docker",
      "Git & GitHub",
      "AWS (Cloud Fundamentals)",
      "REST APIs & JWT",
    ],
  },
];

export const skillsNote = "Also proficient in Data Structures & Algorithms (DSA) and Database Management Systems (DBMS)";
