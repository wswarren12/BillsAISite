export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  metrics?: string[];
  tags?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Game7 / Summon",
    role: "Head of Product",
    period: "July 2023 — Present",
    location: "Remote",
    description:
      "Led product, engineering, and design teams for Summon, an AI-powered community engagement platform primarily serving gaming and decentralized finance ecosystems.",
    achievements: [
      "Defined product vision and roadmap for Summon's evolution from manual questing tool to AI-driven engagement platform, introducing agent-based landing page generation, task creation, automated data analysis, and intelligent gamification mechanics — reducing onboarding overhead by 90%.",
      "Scaled the Game7 community platform to 500K+ registered users who completed 28M+ tasks across gaming partner campaigns over a 9-month period.",
      "Designed and shipped a full-stack gamification system including Quests, Leaderboards, Rewards Loot Boxes, Token Staking, Token Sinks and progressive engagement mechanics grounded in behavioral economics to drive 30%+ monthly user retention.",
      "Partnered directly with gaming studios and finance protocols to scope and deliver activity-based campaigns tied to measurable growth KPIs.",
      "Built and led a cross-functional team of product managers, engineers, designers, and QA, implementing agile practices and shipping iteratively in fast-moving Web3 and AI landscapes.",
      "Architected a connector and quest builder framework enabling no-code campaign creation for non-technical partners, dramatically expanding the platform's addressable market.",
    ],
    metrics: ["500K+ Users", "28M+ Tasks", "90% Less Onboarding Overhead"],
    tags: ["AI/ML", "Gamification", "Web3", "Platform Strategy"],
  },
  {
    company: "Opolis",
    role: "Executive Steward, Product",
    period: "August 2021 — June 2023",
    location: "Remote",
    description:
      "Product leadership for a decentralized employment organization providing payroll, benefits, and compliance infrastructure for independent workers.",
    achievements: [
      "Led creation of a smart contract-based payroll funding system that reduced processing costs by 90% and has since facilitated $30M+ in crypto payroll transactions.",
      "Formed a strategic partnership and built a no-code legal entity creation flow, cutting onboarding drop-off by 3x and accelerating new member activation.",
      "Managed the development and launch of a governance token staking dashboard on an L2 network, supporting 1,000+ token stakers.",
      "Drove product discovery through qualitative user interviews, quantitative analysis, and competitive landscape research to identify high-impact opportunities.",
      "Partnered with engineering and marketing to align feature development with business and growth objectives.",
    ],
    metrics: ["$30M+ Processed", "90% Cost Reduction", "1K+ Stakers"],
    tags: ["DeFi", "Payroll", "Smart Contracts", "DAO"],
  },
  {
    company: "DAOhaus",
    role: "Product & Tokenomics",
    period: "August 2020 — December 2022",
    location: "Remote (Part-Time)",
    description:
      "Coordinated product strategy across a distributed community of developers, designers, and strategists to scope and build next-generation DAO creation and management platforms.",
    achievements: [
      "Co-developed DAO creation smart contracts for the DAOhaus v2 app with over $400M in DAO activity.",
      "Created documentation, demos, and materials to drive adoption and community growth.",
      "Contributed to the innovative $HAUS token economic and governance design.",
    ],
    metrics: ["$400M+ DAO Activity"],
    tags: ["DAO", "Tokenomics", "Smart Contracts", "Governance"],
  },
  {
    company: "Peeps Democracy",
    role: "Founder & CEO",
    period: "November 2018 — August 2021",
    location: "Remote & New York, NY",
    description:
      "Founded and led a venture-backed startup building decentralized organization platforms, validating and rapidly iterating through three product versions in 20 months. Spun out of ConsenSys, acquired by Opolis.",
    achievements: [
      "Created Pool-Party, the first DAO platform to integrate DAO smart contracts with a decentralized lending protocol on Ethereum, processing $150K+ across 6+ DAOs.",
      "Raised ~$500K in venture funding and successfully negotiated the company's acquisition by Opolis, delivering a 2x return to investors.",
    ],
    metrics: ["~$500K Raised", "2x Return", "Acquired by Opolis"],
    tags: ["Ethereum", "DeFi", "Startup", "Fundraising"],
  },
  {
    company: "WilmerHale",
    role: "Corporate Associate",
    period: "2016 — 2018",
    location: "New York, NY",
    description:
      "Advised technology startups and growth-stage companies on venture financing, licensing agreements, corporate governance, and M&A transactions.",
    achievements: [
      "Developed deep expertise in startup operations, cap table management, and regulatory compliance that directly informs product strategy in regulated and emerging technology sectors.",
    ],
    tags: ["Venture Finance", "M&A", "Corporate Law", "Startups"],
  },
];
