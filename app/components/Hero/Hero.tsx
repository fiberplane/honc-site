import { css } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";

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
    <div class={heroClass}>
      <div class={bentoGrid}>
        <div
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderTopLeftRadius: "2rem",
          }}
        >
          <HoncIcon />
        </div>

        <Citation>{citation}</Citation>
        <blockquote class={quoteClass}>
          <q>{quote}</q>
        </blockquote>
      </div>
    </div>
  );
}

const quoteClass = css`
  font: var(--font-headings-h2);
  font-style: italic;
  background-color: var(--color-bg-elevated);
  padding: 4rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;

  /* workaround for the citation block */
  && {
    grid-column: 1 / -1;
  }
`;

const heroClass = css`
  max-width: 55rem;
  margin-inline: auto;
`;

const bentoGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  padding-block-start: calc(var(--spacing-nav-size) * 2);
  gap: 2rem;

  svg {
    grid-row: 1 / 2;
    width: 100%;
    height: auto;
  }

  blockquote {
    grid-column: 2 / -1;
  }
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

// const heroGrid = css`
//   display: grid;
//   grid-auto-flow: row;
//   gap: 4rem;
//   padding-block-start: calc(var(--spacing-nav-size) * 2);
//   margin-block-end: 4rem;
//   container-type: inline-size;

//   /* HONC icon */
//   svg {
//     justify-self: center;
//   }

//   & > blockquote {
//     font: var(--font-headings-h2);
//     font-style: italic;
//     background-color: var(--color-bg-elevated);
//     padding: 4rem;
//     max-width: 40ch;
//     margin-inline: auto;
//   }

//   @container (width >= 840px) {
//     ${visualGrid} {
//       grid: auto / repeat(2, 1fr);
//       gap: 0rem;
//     }
//   }
// `;
