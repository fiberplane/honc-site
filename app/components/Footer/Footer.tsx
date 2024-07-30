import { css } from "hono/css";

import { Wrapper } from "../Wrapper";
import { GithubIcon } from "../icons";
import {
  GrassLeftIcon,
  GrassRightIcon,
  HeartIcon,
  WaterGooseIcon,
} from "./icons";

export function Footer() {
  return (
    <footer class={footerClass}>
      <Wrapper className={wrapperClass}>
        <WaterGooseIcon className={iconWrapper} />

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

        <GrassLeftIcon className={grassLeftIconClass} />
        <GrassRightIcon className={grassRightIconClass} />
      </Wrapper>
    </footer>
  );
}

const footerClass = css`
  background-color: var(--color-bg-secondary);
  margin-top: 10rem;
  position: relative;
  container-type: inline-size;

  @container (width >= 700px) {
    &::after {
      content: "";
      display: block;
      height: 2.5rem;
      width: 50%;
      background-color: var(--color-bg-default);
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const iconWrapper = css`
  margin-inline: auto;
  translate: calc(clamp(0lvw, 10lvw, 8lvw) * -1) -50%;
`;

const footerTextClass = css`
  translate: 0 -5rem;
  font-weight: 400;
  color: var(--color-bg-default);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem 0.6ch;

    a {
      color: inherit;
      text-decoration: underline;
    }
  }
`;

const grassLeftIconClass = css`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const grassRightIconClass = css`
  position: absolute;
  right: 0;
  bottom: 0;
  display: none;
`;

const wrapperClass = css`
  position: relative;
  container-type: inline-size;

  @container (width >= 600px) {
    ${grassRightIconClass} {
      display: block;
    }
  }

  @container (width >= 968px) {
    ${footerTextClass} {
      translate: 0 -0.5rem;
    }
  }
`;
