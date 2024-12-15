import { TOKEN_ENDPOINT } from "@/core/constants";

export const getAccessToken = async () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string;
  const REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN as string;

  const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const headers = {
    Authorization: `Basic ${BASIC}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await fetch(TOKEN_ENDPOINT, {
    headers,
    method: "POST",
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  return data.access_token as string;
};
