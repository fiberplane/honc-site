import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

export function Overview({ children }: PropsWithChildren) {
  return (
    <section class={sectionClass}>
      <h1>Overview</h1>

      <ul>{children}</ul>
    </section>
  );
}

const sectionClass = css`
  max-width: 880px;
  margin-inline: auto;

  h1 {
    margin-block-start: 0;
    text-align: center;
  }

  ul {
    display: grid;
    gap: 4rem;
    background-color: var(--color-bg-elevated);
    list-style: none;
    padding: 3rem 6rem;
  }
`;
