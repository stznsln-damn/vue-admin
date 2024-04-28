import axios, { AxiosInstance } from "axios";

export default class Axios {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "/api/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use((config) => {
      // const token =

      return config;
    });
  }

  request() {}
}
