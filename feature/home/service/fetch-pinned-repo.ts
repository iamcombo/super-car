export async function fetchGitRepo(): Promise<Response> {
  const res = await fetch(
    "https://gh-pinned-repos-api.ysnirix.xyz/api/get?username=iamcombo"
  );

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

type PinnedRepo = {
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

type Response = {
  isError: boolean;
  statusMessage: string;
  statusCode: number;
  response: PinnedRepo[];
};
