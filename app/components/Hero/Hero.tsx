import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import { HoncIcon } from "./HoncIcon";
import { Citation } from "../Citation";

type HeroProps = PropsWithChildren<{
  title: string;
}>;

export function Hero({ children, title }: HeroProps) {
  return (
    <div class={heroGrid}>
      <HoncIcon />

      <div class={heroContentGrid}>
        <header class={headingClass}>
          <h1>Honc honc</h1>
          <p>
            Today defining a stack for a new project is not easy, because there
            are a lot of different tools to choose from. With HONC we present an
            opinionated stack for Typescript development. HONC combines four
            components: H(ono), O(RM Drizzle), N(eon), C(loudflare). The stack
            helps to kick off projects quickly and ensures fast development
            cycles.
          </p>
        </header>

        <Citation />
      </div>
    </div>
  );
}

const heroContentGrid = css`
  display: grid;
  grid: auto / repeat(2, 1fr);
  gap: 2rem;
`;

const heroGrid = css`
  display: grid;
  grid-auto-flow: row;
  gap: 2rem;
  margin-block-start: 4rem;
  container-type: inline-size;

  svg {
    justify-self: center;
  }

  @container (width <= 840px) {
    ${heroContentGrid} {
      grid: auto / 1fr;
      gap: 4rem;
    }
  }
`;

const headingClass = css`
  h1 {
    margin-block: 0 0.5em;
    font-size: 4rem;
  }

  p {
    margin-block-end: 0;
  }
`;
