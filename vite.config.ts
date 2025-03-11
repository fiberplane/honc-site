import build from "@hono/vite-build/cloudflare-workers";
import adapter from "@hono/vite-dev-server/cloudflare";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import rehypeExternalLinks, { type Options } from "rehype-external-links";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const rehypeExternalLinksOptions: Options = {
  target: "_blank",
  rel: ["noopener", "noreferrer"],
};

export default defineConfig({
  plugins: [
    honox({
      devServer: { adapter },
      client: { input: ["./app/style.css", "./app/honacthon.css"] },
    }),
    mdx({
      jsxImportSource: "hono/jsx",
      rehypePlugins: [[rehypeExternalLinks, rehypeExternalLinksOptions]],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    build(),
  ],
});
