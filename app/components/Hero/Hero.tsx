import { css } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";

import { HoncIcon } from "./HoncIcon";
import { Citation } from "./Citation";

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
        </header>

        <Citation>{citation}</Citation>
      </div>
    </div>
  );
}

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
  margin-block: 4rem;
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
