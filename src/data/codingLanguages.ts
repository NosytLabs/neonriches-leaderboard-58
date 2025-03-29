
import { CodeLanguage } from '@/types/code';

export const codingLanguages: CodeLanguage[] = [
  {
    id: "javascript",
    name: "JavaScript",
    title: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    description: "A versatile scripting language that powers the web",
    popular: true,
    frameworks: ["React", "Vue", "Angular", "Node.js"]
  },
  {
    id: "typescript",
    name: "TypeScript",
    title: "TypeScript",
    icon: "typescript",
    color: "#3178C6",
    description: "JavaScript with static type checking",
    popular: true,
    frameworks: ["React", "Next.js", "NestJS"]
  },
  {
    id: "python",
    name: "Python",
    title: "Python",
    icon: "python",
    color: "#3776AB",
    description: "A versatile language known for readability and simplicity",
    popular: true,
    frameworks: ["Django", "Flask", "FastAPI"]
  },
  {
    id: "java",
    name: "Java",
    title: "Java",
    icon: "java",
    color: "#007396",
    description: "A class-based, object-oriented programming language",
    popular: true,
    frameworks: ["Spring", "Hibernate", "Jakarta EE"]
  },
  {
    id: "csharp",
    name: "C#",
    title: "C#",
    icon: "csharp",
    color: "#239120",
    description: "A modern, object-oriented language by Microsoft",
    popular: true,
    frameworks: [".NET", "ASP.NET", "Xamarin"]
  }
];
