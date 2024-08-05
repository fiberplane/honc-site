import { css } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";

import AsciiArt from "../../islands/asciiArt";
import { Wrapper } from "../Wrapper";
import { Citation } from "./Citation";
import { HoncIcon } from "./HoncIcon";

type HeroProps = PropsWithChildren<{
  citation: Child;
  quote: Child;
}>;

export function Hero({ children, citation, quote }: HeroProps) {
  return (
    <div class={container}>
      <Wrapper narrow>
        <div class={bentoGrid}>
          <div class={iconContainer}>
            <HoncIcon />
          </div>

          <Citation>{citation}</Citation>

          <blockquote class={quoteClass}>
            <q>{quote}</q>
          </blockquote>
        </div>
      </Wrapper>

      <Wrapper>
        <div className={introGrid}>
          <span>{children}</span>
          <AsciiArt />
        </div>
      </Wrapper>
    </div>
  );
}

const introGrid = css`
  display: grid;
  gap: 2rem;
  margin-top: 4rem;
  border-radius: 2rem;
  overflow: hidden;

  span p {
    margin-block-start: 0;
  }

  & > * {
    padding: 3rem 4rem;
    padding-inline: calc(var(--spacing-wrapper) * 2);
    background-color: var(--color-bg-elevated);
  }

  /* Center the ACII art element island in the DOM */
  & > *:nth-child(2) {
    display: grid;
    place-content: center;
  }
`;

const quoteClass = css`
  font: var(--font-headings-h2);
  font-style: italic;
  background-color: var(--color-bg-elevated);
  font-size: 1.5rem;
  padding: 2rem;
  margin-inline: calc(var(--spacing-wrapper) * -2);
  padding-inline: calc(var(--spacing-wrapper) * 3);
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
        align-self: center;
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

    ${introGrid} {
      grid-template-columns: 1fr auto;
    }
  }
`;
