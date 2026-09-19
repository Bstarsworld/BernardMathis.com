export interface WorkItem {
  id: string;
  title: string;
  category: 'music-videos' | 'podcasts-series' | 'explainers-shorts' | 'color-post';
  categoryLabel: string;
  description: string;
  detailedNote?: string;
  videoId: string; // YouTube ID
  videoType: 'regular' | 'short';
  tags: string[];
  software: string[];
  thumbnailUrl: string;
  featured?: boolean;
}

export interface ProductionStill {
  id: string;
  url: string;
  caption: string;
  aspectRatio?: string;
}

export interface ServiceCapability {
  id: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  keySpecs: string[];
  badge: string;
}

export interface CustomSystemPlugin {
  id: string;
  name: string;
  type: 'Workflow Tool' | 'Resolve Plugin' | 'Multicam Sync';
  headline: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  facility: string;
  period?: string;
  category: 'Production & Directing' | 'Audio & Sound' | 'Post-Production' | 'Education & Rigor' | 'Virtual Production' | 'Live AV & Sound';
  description: string[];
  tools: string[];
  photoUrl?: string;
}

export interface CameraGear {
  name: string;
  role: string;
  specs: string;
  useCase: string;
  format: string;
}

export interface CameraCertification {
  name: string;
  brand: string;
  level: string;
  rawFormats: string[];
  note: string;
}

export interface AudioGear {
  name: string;
  role: string;
  specs: string;
  useCase: string;
  chainOrder: string;
}

export interface SoftwareTool {
  name: string;
  category: 'Editing & Color' | 'Camera & Rig' | 'Audio & Live' | 'Motion & Delivery' | 'Virtual Production & 3D';
  role: string;
  proficiency: number; // 0 - 100
}

