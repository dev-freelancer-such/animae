const API_SERVER =
  process.env.NEXT_PUBLIC_API_SERVER || "https://crawler-be.duckdns.org";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

const constants = {
  API_SERVER,
  BASE_URL,
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  REFRESH_PATH: "",
};

export { constants };
