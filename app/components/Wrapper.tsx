import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

export function Wrapper({ children }: PropsWithChildren) {
  return <div class={wrapperClass}>{children}</div>;
}

const wrapperClass = css`
  width: min(calc(100% - 4rem), 1200px);
  margin-inline: auto;
`;
