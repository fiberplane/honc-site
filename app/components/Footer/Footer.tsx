import { css } from "hono/css";

import { GooseIcon } from "../icons";
import { Wrapper } from "../Wrapper";
import { GithubIcon, HeartIcon } from "./icons";

export function Footer() {
  return (
    <footer class={footerClass}>
      <Wrapper>
        <div class={iconWrapper}>
          <GooseIcon width={200} />
        </div>

        <span>
          Built with <HeartIcon /> by{" "}
          <a
            href="https://fiberplane.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Fiberplane
          </a>
          using <GithubIcon />
          Honox
        </span>
      </Wrapper>
    </footer>
  );
}

const footerClass = css`
  background-color: var(--color-bg-secondary);
  margin-top: 10rem;
  padding-block-end: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem 0.6ch;
    color: var(--color-bg-default);

    a {
      color: inherit;
      text-decoration: underline;
    }
  }
`;

const iconWrapper = css`
  width: fit-content;
  translate: 10% -50%;
`;
