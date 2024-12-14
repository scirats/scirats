import { compose } from "@utils";
import type { AxiosInstance } from "axios";

const githubContentService = (http: AxiosInstance) => ({
  readmeByName: (name: string) =>
    http.get(
      `https://raw.githubusercontent.com/scirats/${name}/master/readme.md`
    ),
});

export default compose(githubContentService)("http");
