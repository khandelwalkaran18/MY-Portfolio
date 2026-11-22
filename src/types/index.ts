export interface SkillItem {
  name: string;
  levelDescription?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryTag: 'web' | 'ecommerce' | 'productivity' | 'python' | 'ai';
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  technologies: string[];
  vehicleRoster?: string[];
  demoUrl?: string;
  githubUrl?: string;
  isMockupPreview?: boolean;
  accentColor: string;
}

export interface CertificateItem {
  id: string;
  numberTitle: string;
  title: string;
  organization: string;
  completionDate: string;
  certificateNumber?: string;
  institution?: string;
  duration?: string;
  description: string;
  modules?: string[];
  verificationUrl?: string;
  pdfPath?: string;
  hasOriginalFile: boolean;
  badge: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface WorkingApproachItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}
