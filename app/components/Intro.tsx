import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import AsciiArt from "../islands/asciiArt";
import { Wrapper } from "./Wrapper";

export function Intro({ children }: PropsWithChildren) {
  return (
    <Wrapper className={wrapperClass}>
      <div className={introGrid}>
        <span>{children}</span>
        <AsciiArt />
      </div>
    </Wrapper>
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

const wrapperClass = css`
  container-type: inline-size;
  @container (width >= 800px) {
    ${introGrid} {
      grid-template-columns: 1fr auto;
    }
  }
`;
