import type { Params } from "@ttypes/http.type";

const enconde = (key: string, value: string) =>
  encodeURIComponent(key).concat("=", encodeURIComponent(value));

export const formatUrl = (url: string, params: Params): string => {
  const queryString = Object.entries(params)
    .filter(([_, value]) => value)
    .map(([key, value]) => enconde(key, value))
    .join("&");

  return url.concat("?", queryString);
};
