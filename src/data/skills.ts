import { FiTarget, FiCode, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Product Strategy",
    icon: FiTarget,
    skills: [
      "Product Vision & Roadmap",
      "0-to-1 Product Building",
      "Data-Driven Decision Making",
      "User Research & Discovery",
      "Platform & Marketplace Strategy",
      "Gamification & Behavioral Design",
      "Stakeholder Management",
    ],
  },
  {
    title: "Technical",
    icon: FiCode,
    skills: [
      "AI/ML Product Development",
      "Smart Contracts & Web3",
      "Full-Stack Architecture",
      "API Design",
      "Tokenomics Design",
      "Vibe Prototyping",
      "Technical Specifications",
    ],
  },
  {
    title: "Leadership",
    icon: FiUsers,
    skills: [
      "Cross-Functional Team Leadership",
      "Agile & Scrum",
      "Venture Fundraising",
      "Contract Negotiation",
      "Partnership Development",
      "Go-to-Market Strategy",
      "Board Governance",
    ],
  },
];
