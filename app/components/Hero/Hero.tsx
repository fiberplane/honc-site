import { css } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";

import { anchorIds } from "../../constants";
import { Citation } from "./Citation";
import { HoncIcon } from "./HoncIcon";

type HeroProps = PropsWithChildren<{
  citation: Child;
  quote: Child;
  intro: Child;
}>;

export function Hero({
  children,
  citation,
  intro,
  quote /* , title */,
}: HeroProps) {
  return (
    <div class={heroGrid} id={anchorIds.intro}>
      <HoncIcon />

      <blockquote>"{quote}"</blockquote>

      <div class={visualGrid}>
        {children}
        <Citation>{citation}</Citation>
      </div>

      <div class={introClass}>{intro}</div>
    </div>
  );
}

const introClass = css`
  max-width: 62ch;
  margin-inline: auto;
`;

const visualGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  pre {
    letter-spacing: 0.25em;
    display: inline-block;
    /* justify-self: center; */
  }
`;

// const heroContentGrid = css`
//   display: grid;
//   grid: auto / 1fr;
//   gap: 2rem;
// `;

const heroGrid = css`
  display: grid;
  grid-auto-flow: row;
  gap: 4rem;
  padding-block-start: calc(var(--spacing-nav-size) * 2);
  margin-block-end: 4rem;
  container-type: inline-size;

  /* HONC icon */
  svg {
    justify-self: center;
  }

  & > blockquote {
    font: var(--font-headings-h2);
    font-style: italic;
    background-color: var(--color-bg-elevated);
    padding: 4rem;
    max-width: 40ch;
    margin-inline: auto;
  }

  @container (width >= 840px) {
    ${visualGrid} {
      grid: auto / repeat(2, 1fr);
      gap: 0rem;
    }
  }
`;
