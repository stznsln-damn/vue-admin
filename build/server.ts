import { ServerOptions } from "vite";

const server: ServerOptions = {
  host: true,
  open: false,
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
  },
};

export default server;
