export interface Post {
  date: string;
  id: string;
  summary: string;
  title: string;
}

export interface Posts {
  posts?: Post[];
}
