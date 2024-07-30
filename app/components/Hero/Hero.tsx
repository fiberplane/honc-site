import { css } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";

import { GithubIcon } from "../icons";
import { Citation } from "./Citation";
import { HoncIcon } from "./HoncIcon";

type HeroProps = PropsWithChildren<{
  citation: Child;
  title: string;
}>;

export function Hero({ children, citation, title }: HeroProps) {
  return (
    <div class={heroGrid} id="intro">
      <HoncIcon />

      <div class={heroContentGrid}>
        <header class={headingClass}>
          <h1>{title}</h1>
          <p>{children}</p>

          <a
            href="https://github.com/fiberplane/goose-quotes"
            rel="noreferrer noopener"
            class={ctaClass}
          >
            Check out the sample API
            <GithubIcon />
          </a>
        </header>

        <Citation>{citation}</Citation>
      </div>
    </div>
  );
}

const ctaClass = css`
  display: inline-flex;
  gap: 0.75rem;
  align-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font: var(--font-code);
  background-color: var(--color-bg-secondary);
  color: var(--color-fg-default);

  svg {
    height: 1.25em;
    width: 1.25em;
  }
`;

const heroContentGrid = css`
  display: grid;
  grid: auto / 1fr;
  gap: 2rem;
`;

const headingClass = css`
  padding: 0;

  h1 {
    margin-block-start: 0;
    text-align: center;
  }

  p {
    margin-inline: auto;
    max-width: 54ch;
  }
`;

const heroGrid = css`
  display: grid;
  grid-auto-flow: row;
  gap: 4rem;
  padding-block-start: calc(var(--spacing-nav-size) * 2);
  margin-block-end: 4rem;
  container-type: inline-size;

  svg {
    justify-self: center;
  }

  @container (width >= 840px) {
    ${heroContentGrid} {
      grid: auto / repeat(2, 1fr);
      gap: 0rem;

      ${headingClass} {
        padding-inline-end: 2rem;

        h1 {
          margin-block-end: 0.5em;
          font-size: 4rem;
          text-align: left;
        }

        p {
          margin-block-end: 0;
          margin-inline: auto;
          max-width: 54ch;
        }
      }
    }
  }
`;
