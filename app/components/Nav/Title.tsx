import { css, cx } from "hono/css";
import { useEffect, useRef, useState } from "hono/jsx";

import { honcIconId } from "../../constants";
import { useIntersectionObserver } from "../../hooks";

type TitleProps = {
  className?: ReturnType<typeof css>;
  isMenuOpen: boolean;
};

export const Title = function Title({ className, isMenuOpen }: TitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const element = useRef<HTMLElement>(null);

  const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
    for (const entry of entries) {
      setIsVisible(!entry.isIntersecting);
    }
  };

  useEffect(() => {
    element.current = document.getElementById(honcIconId);
  }, []);

  useIntersectionObserver(element, handleIntersection, options);

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
