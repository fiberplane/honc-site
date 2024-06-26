import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title ?? "HONC.dev"}</title>

        <Link href="/app/style.css" rel="stylesheet" />
        <link
          rel="preload"
          href="/static/fonts/Silkscreen-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        />
        <Style />
      </head>

      <body>{children}</body>
    </html>
  );
});
