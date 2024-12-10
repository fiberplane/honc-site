import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import { Wrapper } from "../Wrapper";

export function HoncathonPrizesList({ children }: PropsWithChildren) {
  return (
    <Wrapper className={wrapperClassName} narrow>
      {children}
    </Wrapper>
  );
}

const wrapperClassName = css`
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;

    & > li {
      background-color: var(--color-bg-elevated);
      padding: 3rem;
      border-radius: 30px;
      padding-inline-start: 6em;
      position: relative;

      ul {
        list-style: none;
        padding: 0;

        li {
          padding-inline: 3rem;
          position: relative;

          &::before {
            content: "🪿";
            position: absolute;
            left: 1rem;
          }
        }
      }

      &::before {
        content: "🏅";
        font-size: 3em;
        position: absolute;
        left: 1.75rem;
        top: 50%;
        translate: 0 -50%;
      }

      &:first-of-type {
        padding-inline-start: 3rem;
        padding-block-start: 180px;
        text-align: center;
        top: 0;
        font-size: 1.6em;
        border: 1px solid var(--color-fg-primary);

        &::before {
          content: "🏆";
          font-size: 5rem;
          left: 50%;
          top: 0;
          translate: -50% 5rem;
        }
      }
    }
  }
`;
