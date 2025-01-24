import { css, cx, keyframes } from "hono/css";
import { Fragment, useEffect, useRef, useState } from "hono/jsx";

import {
  CtaMenuItem,
  DiscordIcon,
  HamburgerIcon,
  MenuItem,
  Overlay,
  Title,
  Wrapper,
} from "../components";
import { anchorIds } from "../constants";
import {
  useAnimationState,
  useIntersectionObserver,
  useResizeObserver,
} from "../hooks";

// TODO:
// - [ ] Handle focus properly when menu is opened
// - [ ] Fix mobile grid setup
// - [x] Conditionally render & animate title when logo is out of view
// - [ ] PostCSS autoprefixer in Honox

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const anchorElements = useRef<NodeListOf<Element>>(null);

  const [activeId, setActiveId] = useState<string>(anchorIds.intro);
  const [showMenu, setShowMenu] = useState(false);

  const { handleAnimationEnd, shouldAnimateExit, shouldShow } =
    useAnimationState(showMenu);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowMenu(false);
    }
  };

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

  // As `document` can't be accessed anywhere else than in useEffect, we need to
  // call the querySelector in a useEffect hook, to then store the result in a
  // ref
  useEffect(() => {
    anchorElements.current = document.querySelectorAll(anchorSelectors);
  }, []);

  useResizeObserver(navRef, handleResize);
  useIntersectionObserver(
    anchorElements,
    handleIntersection,
    intersectionObserverOptions,
  );

  return (
    <>
      <nav class={navClass} ref={navRef} data-nav>
        <Wrapper>
          <ul
            class={cx(shouldShow && "open", shouldAnimateExit && "close")}
            id="menu"
            role="menu"
            aria-labelledby="menubutton"
            onAnimationEnd={handleAnimationEnd}
          >
            {menuItems.map(({ anchorId, title }) => (
              <Fragment key={title}>
                <MenuItem
                  isActive={activeId === anchorId}
                  anchorId={anchorId}
                  onClickHandler={() => setShowMenu(false)}
                >
                  {title}
                </MenuItem>
              </Fragment>
            ))}

            <CtaMenuItem href="https://discord.gg/ugAwAK6Yzm">
              Honc Along
              <DiscordIcon />
            </CtaMenuItem>
          </ul>

          <div data-icon />
          <Title isMenuOpen={showMenu} data-title />

          <button
            onClick={() => setShowMenu((opened) => !opened)}
            type="button"
            id="menubutton"
            aria-haspopup="true"
            aria-controls="menu"
          >
            <HamburgerIcon isOpened={showMenu} />
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

const intersectionObserverOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.5,
};

const anchorSelectors = Object.values(anchorIds)
  .map((id) => `#${id}`)
  .join(", ");

const menuItems: Array<{ anchorId: string; title: string }> = [
  { anchorId: anchorIds.intro, title: "HONC?" },
  { anchorId: anchorIds.overview, title: "Overview" },
  { anchorId: anchorIds.examples, title: "Examples" },
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
  background-color: rgb(from var(--color-bg-elevated) r g b / 88%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  z-index: 10;
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
  }

  /*
    Hide narrow screen elements
    TODO: Handle the grid spacing <div /> element
  */
  div[data-wrapper] {
    & > header[data-title] {
      display: none;
    }
  }

  container-type: inline-size;
  @container (width <= 800px) {
    div[data-wrapper] {
      display: grid;
      grid-template-columns: 2rem 1fr 2rem;
      grid-template-areas: "icon title button";
      place-items: center;

      & > header[data-title] {
        display: block;
        grid-area: title;
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
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 0 2rem 1rem rgb(from var(--color-bg-elevated) r g b / 50%);
        width: 100%;
        padding: var(--spacing-wrapper);
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
      grid-area: button;
      background: none;
      height: 100%; /* Safari funkiness fix */
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
