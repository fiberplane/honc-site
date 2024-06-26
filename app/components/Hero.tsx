import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type HeroProps = PropsWithChildren<{
  title: string;
}>;

export function Hero({ children, title }: HeroProps) {
  return (
    <header class={headingClass}>
      <h1>{title}</h1>
      <p>{children}</p>
    </header>
  );
}

const headingClass = css`
  h1 {
    font-size: 5rem;
  }
`;
