import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

export function HoncathonSection({ children }: PropsWithChildren) {
  return <section class={sectionClass}>{children}</section>;
}

const sectionClass = css`
  margin-block: 5rem;

  &:has(header + *) {
    header {
      margin-block-end: 2rem;

      h2 {
        margin-block-end: 0rem;
      }
    }
  }
`;
