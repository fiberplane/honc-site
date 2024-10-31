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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;

    li {
      background-color: var(--color-bg-elevated);
      padding: 3rem;
      border-radius: 30px;
      padding-inline-start: 6em;
      position: relative;
      
      &::before{
        content: "🏅";
        font-size: 3em;
        position: absolute;
        left: 1.75rem;
        top: 50%;
        translate: 0 -50%;
      }
    }
  }
`;
