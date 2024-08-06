import { css, Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

import PostHog from "../islands/postHog";
import { Nav } from "../islands/nav";

export default jsxRenderer(({ children, title }) => {
  const posthogProjectKey = import.meta.env.VITE_POSTHOG_PROJECT_KEY;

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="description"
          content="HONC is an modular collection of choice technologies for building lightweight, type-safe, edge-enabled data apis that scale seamlessly to their demand."
        />
        <link rel="canonical" href="https://honc.dev" />

        <meta
          property="og:title"
          content="The HONC Stack: A Modular Collection of Choice Technologies"
        />
        <meta
          name="og:description"
          content="Modular collection of choice technologies for building lightweight, type-safe, edge-enabled data apis that scale seamlessly to their demand."
        />
        <meta property="og:url" content="https://honc.dev" />
        <meta property="og:site_name" content="HONC.dev" />
        <meta
          property="og:image"
          content="https://honc.dev/static/images/social.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="honc.dev" />
        <meta property="twitter:url" content="https://honc.dev" />
        <meta
          name="twitter:title"
          content="The HONC Stack: A Modular Collection of Choice Technologies"
        />
        <meta
          name="twitter:description"
          content="Modular collection of choice technologies for building lightweight, type-safe, edge-enabled data apis that scale seamlessly to their demand."
        />
        <meta
          name="twitter:image"
          content="https://honc.dev/static/images/social.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />

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
        <link
          rel="preload"
          href="/static/fonts/FiraCode.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        />

        <title>{title ?? "HONC.dev"}</title>

        <Style />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" />
      </head>

      <body class={globalVariables}>
        <Nav />
        <main>{children}</main>
      </body>

      {import.meta.env.PROD && <PostHog projectKey={posthogProjectKey} />}
    </html>
  );
});

// https://hono.dev/docs/helpers/css#global-styles
const globalVariables = css`
  :-hono-global {
    :root {
      --spacing-nav-size: 4rem;
    }
  }
`;
