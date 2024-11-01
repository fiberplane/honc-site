import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import { Wrapper } from "../Wrapper";

export function HoncathonContentBlock({ children }: PropsWithChildren) {
  return (
    <Wrapper narrow>
      <div class={contentBlockClass}>{children}</div>
    </Wrapper>
  );
}

const contentBlockClass = css`
  background-color: var(--color-bg-elevated);
  padding: 3rem;
  border-radius: 30px;

  /*
    ol list items don't get rendered with a nested <p> element, hence we'll have
    to add them manually here.
  */
  &:has(ol > li) li {
    margin-block: 1em;
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;
