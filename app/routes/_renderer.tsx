import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <title>{title ?? "HONC.dev"}</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
