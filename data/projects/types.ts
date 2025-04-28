export interface ProjectTag {
  name: string;
  color: string;
}

export interface ProjectSection {
  title?: string | null;
  content: string;
  highlight?: boolean;
  style?: string;
}

export interface Project {
  title: string;
  category: string;
  summary: string;
  projectUrl: string;
  tags: ProjectTag[];
  sections: ProjectSection[];
}
