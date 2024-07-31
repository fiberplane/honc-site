import { css, keyframes } from "hono/css";
import { useEffect, useState } from "hono/jsx";

import { GithubIcon, HamburgerIcon, Wrapper } from "../components";
import { anchorIds } from "../constants";

export function Nav() {
  const [activeId, setActiveId] = useState<string>(anchorIds.intro);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const elements = document.querySelectorAll(anchorSelectors);
    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getActiveClass = (id: string) =>
    activeId === id ? "active" : undefined;

  return (
    <nav class={navClass}>
      <Wrapper>
        <ul
          class={menuOpen ? "open" : ""}
          id="menu"
          role="menu"
          aria-labelledby="menubutton"
        >
          <li class={getActiveClass(anchorIds.intro)} role="presentation">
            <a href={`#${anchorIds.intro}`} role="menuitem">
              Intro
            </a>
          </li>

          <li class={getActiveClass(anchorIds.overview)} role="presentation">
            <a href={`#${anchorIds.overview}`} role="menuitem">
              Overview
            </a>
          </li>

          <li class={getActiveClass(anchorIds.quickstart)} role="presentation">
            <a href={`#${anchorIds.quickstart}`} role="menuitem">
              Quickstart
            </a>
          </li>

          <li class="example" role="presentation">
            <a
              href="https://github.com/fiberplane/goose-quotes"
              rel="noreferrer noopener"
              role="menuitem"
            >
              Sample API
              <GithubIcon />
            </a>
          </li>
        </ul>

        {/* TODO: Remove WIP grid spacer */}
        <div />
        <span class={titleClass}>HONC</span>

        <button
          onClick={() => setMenuOpen((opened) => !opened)}
          data-button
          id="menubutton"
          aria-haspopup="true"
          aria-controls="menu"
          type="button"
        >
          <HamburgerIcon />
        </button>
      </Wrapper>
    </nav>
  );
}

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.5,
};

const anchorSelectors = Object.values(anchorIds)
  .map((id) => `#${id}`)
  .join(", ");

const menuOpenAnimation = keyframes`
  to {
    opacity: 1;
    translate: 0 0;
  }
`;

const navClass = css`
  height: var(--spacing-nav-size);
  background-color: var(--color-bg-elevated);
  position: fixed;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid var(--color-bg-default);
  display: grid;
  align-items: center;

  button#menubutton {
    display: none;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    width: fit-content;
    margin-inline: auto;

    li {
      background-color: var(--color-bg-elevated);
      font: var(--font-code);
      transition: background-color 0.2s ease-in-out;
      border-radius: 0.25em;
      background-color: var(--color-bg-default);

      a {
        padding-inline: 1.25rem;
        height: 40px;
        line-height: 1;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: color 0.2s ease-in-out;
        color: var(--color-fg-default);
      }

      &.active:not(.example) a {
        color: var(--color-fg-primary);
      }

      &.example {
        background-color: var(--color-bg-secondary);

        a svg {
          height: 1.25em;
          width: 1.25em;
        }
      }
    }
  }

  div[data-wrapper] {
    & > span,
    & > button {
      display: none;
    }
  }

  container-type: inline-size;
  @container (width <= 720px) {
    div[data-wrapper] {
      display: grid;
      grid-template-columns: 2rem 1fr 2rem;
      place-items: center;

      & > span {
        display: block;
      }
    }

    ul {
      display: none;
      opacity: 0;

      &.open {
        grid-auto-flow: row;
        justify-items: stretch;
        position: absolute;
        right: 0;
        top: var(--spacing-nav-size);
        background-color: rgb(from var(--color-bg-elevated) r g b / 95%);
        backdrop-filter: blur(10px);
        /* TODO: Look into PostCSS autoprefixer */
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 0 2rem 1rem rgb(from var(--color-bg-elevated) r g b / 50%);
        width: 100%;
        padding: 2rem;
        translate: 0 -50%;
        display: grid;
        animation: ${menuOpenAnimation} 0.3s
          cubic-bezier(0.37, 0.85, 0.17, 1.12) forwards;
      }
    }

    button#menubutton {
      display: grid;
      place-content: center;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: var(--color-fg-default);

      &,
      svg {
        aspect-ratio: 1;
        width: 2rem;
      }
    }
  }
`;

const titleClass = css`
  font: var(--font-headings-h1);
  font-size: 1.75rem;
  line-height: 1;
  margin: 0;
  padding: 0;
`;
