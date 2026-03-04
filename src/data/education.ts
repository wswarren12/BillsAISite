export interface Education {
  institution: string;
  degree: string;
  honors?: string;
  details?: string;
}

export interface BoardRole {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    institution: "Duke University School of Law",
    degree: "Juris Doctor, Magna Cum Laude",
    details: "Co-Founder, Duke Law Tech Lab | Focus: Corporate & Startup Law",
  },
  {
    institution: "Davidson College",
    degree: "Bachelor of Arts",
    details: "Honors Thesis in Religion & Literature",
  },
];

export const boardRoles: BoardRole[] = [
  {
    organization: "ETHDenver",
    role: "Board Member",
    period: "2025 — Present",
    description:
      "Active board member on the cooperative that puts on the world's largest Web3 hackathon and innovation festival.",
  },
  {
    organization: "Hillsborough Historic District",
    role: "Commissioner",
    period: "2025",
    description:
      "Historic preservation oversight for the Hillsborough Historic District.",
  },
  {
    organization: "Duke Law Tech Labs",
    role: "Co-Founder",
    period: "2016 — 2021",
    description:
      "Co-founded a pre-accelerator for legal tech founders, several of which went on to raise successful seed and Series A rounds or find exits.",
  },
];
