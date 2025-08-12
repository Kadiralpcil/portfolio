export interface Project {
  id: number;
  name: string;
  company: string;
  period: string;
  description: string;
  languages: string[];
  images: any[]; // StaticImageData from next/image
  url?: string;
  responsibilities: string;
  category: string;
}
