import { css } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";

import { Wrapper } from "../Wrapper";
import { Citation } from "./Citation";
import { HoncIcon } from "./HoncIcon";

type HeroProps = PropsWithChildren<{
  citation: Child;
  quote: Child;
  intro: Child;
}>;

export function Hero({ citation, quote }: HeroProps) {
  return (
    <Wrapper narrow>
      <div class={container}>
        <div class={bentoGrid}>
          <div class={iconContainer}>
            <HoncIcon />
          </div>

          <Citation>{citation}</Citation>

          <blockquote class={quoteClass}>
            <q>{quote}</q>
          </blockquote>
        </div>
      </div>
    </Wrapper>
  );
}

const quoteClass = css`
  font: var(--font-headings-h2);
  font-style: italic;
  background-color: var(--color-bg-elevated);
  font-size: 1.5rem;
  padding: 2rem;
  margin-inline: calc(var(--spacing-wrapper) * -2);
`;

const iconContainer = css`
  justify-self: center;
`;

const bentoGrid = css`
  display: grid;
  padding-block-start: calc(var(--spacing-nav-size) * 2);
  gap: 2rem;
`;

const container = css`
  container-type: inline-size;

  @container (width >= 720px) {
    ${quoteClass} {
      padding: 4rem;
      font: var(--font-headings-h2);
    }
  }

  @container (width >= 800px) {
    ${bentoGrid} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;

      svg {
        grid-row: 1 / 2;
        width: 100%;
        height: auto;
      }

      div[data-citation] {
        grid-column: 2 / -1;
      }
    }

    ${iconContainer} {
      background-color: var(--color-bg-secondary);
      border-top-left-radius: 2rem;
      width: 100%;
      display: grid;
    }

    ${quoteClass} {
      grid-column: 1 / -1;
      margin: 0;
      font-style: italic;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }
  }
`;
