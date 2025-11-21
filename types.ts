
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}

export interface Application {
  name: string;
  description: string;
  url: string;
}

export interface ContactInfo {
  github: string;
  linkedin: string;
  email: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  applications: Application[];
  contact: ContactInfo;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
