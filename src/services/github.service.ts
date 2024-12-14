import type { Params } from "@ttypes/http.type";
import { compose, formatUrl } from "@utils";
import type { AxiosInstance } from "axios";

const githubService = (http: AxiosInstance) => ({
  repos: (params: Params) =>
    http.get(formatUrl("/users/scirats/repos", params)),
});

export default compose(githubService)("http");
