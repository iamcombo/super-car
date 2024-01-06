export type PinnedRepo = {
  name: string;
  repo: string;
  description: string;
  language: {
    name: string;
    color: string;
  };
  stars: string;
  forks: string;
};

export type Response = {
  isError: boolean;
  statusMessage: string;
  statusCode: number;
  response: PinnedRepo[];
};
