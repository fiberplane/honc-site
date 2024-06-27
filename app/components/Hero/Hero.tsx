import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { HoncIcon } from "./HoncIcon";

type HeroProps = PropsWithChildren<{
  title: string;
}>;

export function Hero({ children, title }: HeroProps) {
  return (
    <header class={headingClass}>
      <HoncIcon />

      <h1>{title}</h1>
      <h2>{children}</h2>
    </header>
  );
}

const headingClass = css`
  text-align: center;
  margin-block-start: 100px;

  h1 {
    font-size: 5rem;
  }
`;
