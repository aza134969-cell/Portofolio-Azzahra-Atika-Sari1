export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ui-ux' | 'frontend' | 'mobile' | 'dashboard';
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  role: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: {
    name: string;
    level: number;
    tag: string;
  }[];
}

export interface Collaborator {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  project: string;
}
