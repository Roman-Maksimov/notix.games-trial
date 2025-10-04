import axios, { AxiosInstance } from "axios";

let client: AxiosInstance | undefined;

const createApiClient = () => {
  client = axios.create({
    baseURL: "", // TODO: add ENV_VAR
  });
};

if (!client) {
  createApiClient();
}

export default client as AxiosInstance;
