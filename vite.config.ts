import build from "@hono/vite-cloudflare-pages";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import rehypeExternalLinks, { type Options } from "rehype-external-links";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

const rehypeExternalLinksOptions: Options = {
  target: "_blank",
  rel: ["noopener", "noreferrer"],
};

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
    mdx({
      jsxImportSource: "hono/jsx",
      rehypePlugins: [[rehypeExternalLinks, rehypeExternalLinksOptions]],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
  ],
});
