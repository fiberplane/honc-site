import { css } from "hono/css";

import { Wrapper } from "../Wrapper";
import {
  GithubIcon,
  GrassLeftIcon,
  GrassRightIcon,
  HeartIcon,
  WaterGooseIcon,
} from "./icons";

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

        <GrassLeftIcon width={280} className={grassLeftIconClass} />
        <GrassRightIcon width={240} className={grassRightIconClass} />
      </Wrapper>
    </footer>
  );
}

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

const footerTextClass = css`
  translate: 0 -5rem;

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

const footerClass = css`
  background-color: var(--color-bg-secondary);
  margin-top: 10rem;
  position: relative;

  container-type: inline-size;
  @container (width >= 700px) {

    &::after {
      content: "";
      display: block;
      height: 3rem;
      width: 50%;
      background-color: var(--color-bg-default);
      position: absolute;
      top: 0;
      right: 0;
    }
  }

`;

const iconWrapper = css`
  width: fit-content;
  height: fit-content;
  position: relative;
  translate: 10% -50%;
`;
