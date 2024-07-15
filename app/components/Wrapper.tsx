import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

export function Wrapper({ children }: PropsWithChildren) {
  return <div class={wrapperClass}>{children}</div>;
}

const wrapperClass = css`
  width: min(calc(100% - 2rem), 1024px);
  margin-inline: auto;
`;
