export interface Paper {
  _id?: string;
  title: string;
  abstract: string;
  content: string;
  image: string;
  author: string;
  slug: string;
  categorySlug: string;
  updatedAt: string;
}

export interface PaperContextProps {
  paper: Paper | null;
  papers: Paper[];
  fetchPaper: (id: string) => void;
  fetchPapers: () => void;
  refreshPapers: () => void;
  recentPapers: () => void;
  deletePaper: (id: string) => void;
}