import { css } from "hono/css";

import { Wrapper } from "../Wrapper";
import { GithubIcon, GrassLeftIcon, HeartIcon, WaterGooseIcon } from "./icons";

export function Footer() {
  return (
    <footer class={footerClass}>
      <Wrapper className={wrapperClass}>
        <div class={iconWrapper}>
          <WaterGooseIcon />
        </div>

        <div class={footerTextClass}>
          <span>
            Built with <HeartIcon /> by{" "}
            <a
              href="https://fiberplane.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Fiberplane
            </a>
            <span>
              using <GithubIcon />
              <a href="https://github.com/honojs/honox">Honox</a>
            </span>
          </span>
        </div>

        <GrassLeftIcon width={260} />
      </Wrapper>
    </footer>
  );
}

const footerTextClass = css`
  padding-block-end: 1.25rem;
  display: inline-block;
  margin-inline: auto;

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

const wrapperClass = css`
  position: relative;
  isolation: isolate;
  display: grid;
`;

const footerClass = css`
  background-color: var(--color-bg-secondary);
  margin-top: 10rem;
`;

const iconWrapper = css`
  width: fit-content;
  height: fit-content;
  position: relative;
  translate: 10% -50%;
`;
