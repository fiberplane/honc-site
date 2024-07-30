import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import { Wrapper } from "./Wrapper";
import { GithubIcon } from "./icons";

type BannerProps = PropsWithChildren<{
  url: string;
}>;

export function Banner({ children, url }: BannerProps) {
  return (
    <div class={bannerClass}>
      <Wrapper>
        <span>
          {children || "Check out the sample API"}
          <GithubIcon />
        </span>
      </Wrapper>
    </div>
  );
}

const bannerClass = css`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;

  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  font: var(--font-code);
  font-size: 1rem;

  span {
    display: grid;
    place-content: center;
    grid-auto-flow: column;
    gap: 1rem;

    p {
      margin: 0;
    }

    svg {
      height: 1.25rem;
      aspect-ratio: 1;
    }
  }
`;
