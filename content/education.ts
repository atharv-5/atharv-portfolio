export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
}

export const educationList: EducationItem[] = [
  {
    institution: "Parul University",
    degree: "Bachelor of Technology — Computer Science Engineering",
    period: "2023 – 2027 (Expected Graduation)",
    location: "Vadodara, Gujarat, India",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Cloud Computing",
      "Software Engineering",
      "Object-Oriented Programming (OOP)",
    ],
  },
];
