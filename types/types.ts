export interface Post {
  contentHtml?: string;
  date: string;
  id: string;
  summary: string;
  title: string;
}

export interface Posts {
  posts?: Post[];
}
