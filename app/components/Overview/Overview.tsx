import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type OverviewProps = PropsWithChildren<{
  title: string;
}>;

export function Overview({ children, title }: OverviewProps) {
  return (
    <section class={sectionClass}>
      <h1>{title}</h1>

      <ul>{children}</ul>
    </section>
  );
}

const sectionClass = css`
  max-width: 55rem;
  margin-inline: auto;

  h1 {
    text-align: center;
    font-size: clamp(2.5rem, 14lvw, 5rem);
  }

  ul {
    display: grid;
    gap: 4rem;
    background-color: var(--color-bg-elevated);
    list-style: none;
    padding: 3rem 2rem;
  }

  container-type: inline-size;
  @container (width >= 768px) {
    ul {
      padding: 3rem 6rem;
    }
  }
`;
