import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { Plugin } from "vue";

const plugin: Plugin = {
  install: (app, options) => {
    const defaultOptions = {
      onRequestSuccess: (config: AxiosRequestConfig) => config,
      onRequestError: (error: Error) => Promise.reject(error),
      onResponseSuccess: (response: AxiosResponse) => response,
      onResponseError: (error: Error) => Promise.reject(error),
    };

    const initOptions = {
      ...defaultOptions,
      ...options,
    };

    const axiosInstance = axios.create(initOptions);

    axiosInstance.interceptors.request.use(
      (config) => initOptions.onRequestSuccess(config),
      (error) => initOptions.onRequestError(error)
    );

    axiosInstance.interceptors.response.use(
      (response) => initOptions.onResponseSuccess(response),
      (error) => initOptions.onResponseError(error)
    );

    app.provide("http", axiosInstance);
  },
};

export default plugin;
