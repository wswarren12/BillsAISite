export interface Project {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  status: "Live" | "Beta" | "In Development" | "Experiment";
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: "KidSpinner",
    emoji: "🎡",
    tagline: "Making chores fun for families",
    description:
      "A gamified chore management app for families that turns household tasks into spinning-wheel adventures. Built to solve the age-old problem of getting kids to help around the house.",
    status: "Live",
    tags: ["React Native", "Gamification", "Family Tech"],
    url: "https://gachas.billsai.club/",
  },
  {
    name: "NewsBreef",
    emoji: "📰",
    tagline: "AI-curated news, briefed",
    description:
      "An AI-powered news aggregator that distills the day's top stories into personalized, bite-sized briefings. Cut through the noise and stay informed in minutes.",
    status: "Beta",
    tags: ["AI/ML", "NLP", "News Tech"],
    url: "#",
  },
  {
    name: "WordCraft Mobs",
    emoji: "🗡️",
    tagline: "Defend your world by sounding out words",
    description:
      "A voxel-style game where players fight off mobs by sounding out words and spelling them correctly. Built to help my kindergartener learn to read — because saving the world is way more fun than flashcards.",
    status: "Live",
    tags: ["EdTech", "Gaming", "Voxel", "Vibe Coded"],
    url: "https://wordcraft.billsai.club/",
  },
];
