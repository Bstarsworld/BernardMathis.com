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
  roleConfirmation?: string;
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

export interface BuiltTool {
  id: string;
  name: string;
  type: string;
  description: string;
  specs: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  facility: string;
  period?: string;
  category: string;
  description: string[];
  tools: string[];
  photoUrl?: string;
  isPlaceholder?: boolean;
}

export interface CameraGear {
  name: string;
  role: string;
  specs: string;
  useCase: string;
  format: string;
  isPlaceholder?: boolean;
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
  category: string;
  role: string;
  status: 'confirmed' | 'unconfirmed';
}
