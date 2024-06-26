import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <title>{title ?? "HONC.dev"}</title>

        <Link href="/app/style.css" rel="stylesheet" />
        <link
          rel="preload"
          href="/static/fonts/Silkscreen-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  );
});
