import { inject } from "vue";

export const compose =
  <T extends (...args: any[]) => any>(callback: T) =>
  (injectKey: string) =>
  (): ReturnType<T> => {
    const injectValue = inject(injectKey);
    return callback(injectValue);
  };
