import { css, cx, keyframes } from "hono/css";
import { useEffect, useRef, useState } from "hono/jsx";

import { GithubIcon, HamburgerIcon, Overlay, Wrapper } from "../components";
import { anchorIds } from "../constants";
import { useAnimationState, useKeyboardHandler } from "../hooks";

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>(anchorIds.intro);
  const [showMenu, setShowMenu] = useState(false);

  const { handleAnimationEnd, shouldAnimateExit, shouldShow } =
    useAnimationState(showMenu);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowMenu(false);
    }
  };

  useKeyboardHandler(handleKeyDown);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    }
  };

  const handleResize = (entries: Array<ResizeObserverEntry>) => {
    for (const entry of entries) {
      if (entry.contentRect.width >= 720) {
        setShowMenu(false);
      }
    }
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );
    const elements = document.querySelectorAll(anchorSelectors);
    for (const element of elements) {
      intersectionObserver.observe(element);
    }

    if (!navRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(navRef.current);

    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav class={navClass} ref={navRef}>
        <Wrapper>
          <ul
            class={cx(shouldShow && "open", shouldAnimateExit && "close")}
            id="menu"
            role="menu"
            aria-labelledby="menubutton"
            onAnimationEnd={handleAnimationEnd}
          >
            {menuItems.map(({ anchorId, title }) => (
              <li
                key={title}
                class={cx(activeId === anchorId && "active")}
                role="presentation"
              >
                <a
                  href={`#${anchorId}`}
                  onClick={() => setShowMenu(false)}
                  role="menuitem"
                >
                  {title}
                </a>
              </li>
            ))}

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
          {/* TODO: Conditionally render & animate when logo is out of view */}
          <span class={titleClass}>HONC</span>

          <button
            onClick={() => setShowMenu((opened) => !opened)}
            type="button"
            id="menubutton"
            aria-haspopup="true"
            aria-controls="menu"
          >
            <HamburgerIcon />
          </button>
        </Wrapper>
      </nav>

      <Overlay
        isActive={showMenu}
        onClickHandler={() => setShowMenu(false)}
        onKeyDownHandler={handleKeyDown}
      />
    </>
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

const menuItems: Array<{ anchorId: string; title: string }> = [
  { anchorId: anchorIds.intro, title: "Intro" },
  { anchorId: anchorIds.overview, title: "Overview" },
  { anchorId: anchorIds.quickstart, title: "Quickstart" },
];

const menuOpenAnimation = keyframes`
  to {
    opacity: 1;
    translate: 0 0;
  }
`;

const menuCloseAnimation = keyframes`
  from {
      opacity: 1;
      translate: 0 0;
  }
  to {
    opacity: 0;
    translate: 0 -2rem;
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
        height: 2.5rem;
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

  /*
    Hide narrow screen elements
    TODO: Handle the grid spacing <div /> element
  */
  div[data-wrapper] {
    & > span {
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
        background-color: rgb(from var(--color-bg-elevated) r g b / 88%);
        backdrop-filter: blur(10px);
        /* TODO: Look into PostCSS autoprefixer */
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 0 2rem 1rem rgb(from var(--color-bg-elevated) r g b / 50%);
        width: 100%;
        padding: 2rem;
        translate: 0 calc(var(--spacing-nav-size) * -1);
        display: grid;
        animation: ${menuOpenAnimation} 0.4s
          cubic-bezier(0.37, 0.85, 0.17, 1.12) forwards;

        &.close {
          animation: ${menuCloseAnimation} 0.4s
            cubic-bezier(0.37, 0.85, 0.17, 1.12) forwards;
        }
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
