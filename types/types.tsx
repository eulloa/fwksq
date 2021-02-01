export type Post = {
  date: string;
  id: string;
  summary: string;
  title: string;
};

export type Posts = {
  posts?: Post[];
};
