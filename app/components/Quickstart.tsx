import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

export function Quickstart({ children }: PropsWithChildren) {
  return (
    <section class={sectionClass}>
      <h1>Quickstart</h1>

      <div>{children}</div>
    </section>
  );
}

const sectionClass = css`
  max-width: 55rem;
  margin-inline: auto;

  h1 {
    text-align: center;
    font-size: clamp(2.5rem, 12lvw, 5rem);
  }

  & > div {
    background-color: var(--color-bg-elevated);
    padding: 3rem 2rem;

    pre {
      background: var(--mid-background);
      padding: 1rem 2rem;
      overflow-x: auto;
      border-radius: 0.5rem;
    }
  }

  container-type: inline-size;
  @container (width >= 768px) {
    & > div {
      padding: 3rem 6rem;
    }
  }
`;
