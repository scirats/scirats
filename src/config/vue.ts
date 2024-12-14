import type { App } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueQueryPlugin } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";
import axios from "@plugins/axios";

const vueConfiguration = (app: App) => {
  app.component("font-awesome-icon", FontAwesomeIcon);

  app.use(axios, {
    baseURL: "https://api.github.com",
    onResponseSuccess: (res: AxiosResponse) => res.data,
  });
  app.use(VueQueryPlugin);
};

export default vueConfiguration;
