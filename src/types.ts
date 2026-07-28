export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  category: 'counsel' | 'executive' | 'leads';
  image: string;
  borderColor: 'primary' | 'secondary' | 'tertiary';
  animationDelay: string;
  email?: string;
  linkedin?: string;
  github?: string;
  bio?: string;
  department?: string;
  achievements?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  category: 'Industrial Visit' | 'Workshop' | 'Flagship' | 'Hackathon' | 'Lab';
  description: string;
  fullDescription: string;
  image: string;
  location: string;
  speaker?: string;
  agenda?: string[];
  capacity?: number;
  registeredCount?: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'IoT & Embedded' | 'Cloud & HPC' | 'Web & OS';
  status: 'Deployed' | 'In Development' | 'Research' | 'Prototype';
  description: string;
  stars: number;
  techStack: string[];
  lead: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SystemMetrics {
  uptime: number;
  latencyMs: number;
  activeNodes: number;
  memoryUsageGB: number;
  cpuUsagePercent: number;
  buildVersion: string;
  region: string;
  branchCode: string;
  schoolCode: string;
}

export interface TerminalLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
  content: string;
  timestamp: string;
}
