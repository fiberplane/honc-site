import { css, cx } from "hono/css";
import { useEffect, useState } from "hono/jsx";

import { anchorIds } from "../../constants";

type TitleProps = {
  className?: ReturnType<typeof css>;
  isMenuOpen: boolean;
};

export const Title = function Title({ className, isMenuOpen }: TitleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
      for (const entry of entries) {
        setIsVisible(!entry.isIntersecting);
      }
    };

    const intersectionObserver = new IntersectionObserver(
      handleIntersection,
      options,
    );

    const element = document.getElementById(anchorIds.honcIcon);
    if (!element) {
      return;
    }

    intersectionObserver.observe(element);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <header
      data-title
      class={cx(headerClass, className, (isVisible || isMenuOpen) && "visible")}
    >
      <span>HONC</span>
    </header>
  );
};

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "48px 0px 0px 0px",
  threshold: 0.5,
};

const headerClass = css`
  font: var(--font-headings-h1);
  font-size: 1.75rem;
  line-height: 1;
  margin: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;
