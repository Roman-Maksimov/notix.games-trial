import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

let client: AxiosInstance | undefined;

const createApiClient = () => {
  client = axios.create({
    baseURL: "", // TODO: add ENV_VAR
  });
};

if (!client) {
  createApiClient();
}

// Функция для создания запроса с поддержкой отмены
export const createCancellableRequest = <T = unknown>(
  config: AxiosRequestConfig,
): { request: Promise<AxiosResponse<T>>; cancel: () => void } => {
  const abortController = new AbortController();

  const request = client!.request<T>({
    ...config,
    signal: abortController.signal,
  });

  return {
    request,
    cancel: () => abortController.abort(),
  };
};

export default client as AxiosInstance;
