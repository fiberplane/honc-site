import build from "@hono/vite-cloudflare-pages";
import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig({
  build: {
    assetsDir: "static",
    ssrEmitAssets: true,
    target: "esnext",
  },
  plugins: [
    honox({
      client: {
        assetsDir: "static",
        jsxImportSource: "hono/jsx",
        input: ["/app/style.css"],
      },
    }),
    build(),
    ssg({ entry }),
  ],
});
