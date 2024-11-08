import { keyframes, css } from "hono/css";
import { useRef, useEffect } from "hono/jsx";

type SvgTwoElementsProps = {
  shouldAnimate: boolean;
};

export function SvgTwoElements({ shouldAnimate }: SvgTwoElementsProps) {
  const polyLineRef = useRef<SVGPolylineElement>(null);
  useEffect(() => {
    const el = polyLineRef.current;
    if (!el) {
      return;
    }

    const length = el.getTotalLength();

    el.style.setProperty("stroke-dasharray", `${length}`);
    el.style.setProperty("stroke-dashoffset", `${length}`);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      height="60"
      width="60"
      class={svgClass}
      role="graphics-symbol"
    >
      <polyline points="50,0 50,100 100,100 100,50 0,50 0,0 52,0" />
      <polyline
        ref={polyLineRef}
        class={polyLineClass}
        data-should-animate={shouldAnimate}
        points="50,0 50,100 100,100 100,50 0,50 0,0 52,0"
      />
    </svg>
  );
}

const svgAnimation = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const svgClass = css`
  overflow: visible;

  polyline {
    stroke-width: 2;
    fill: none;

    &:first-of-type {
      stroke: rgb(from var(--color-bg-default) r g b / 0.5);
    }

    &[data-should-animate] {
      animation: ${svgAnimation} 1.5s ease-in-out forwards;
    }
  }
`;

const polyLineClass = css`
  stroke: hsl(from var(--color-fg-primary) h 80% 45%);
  filter: drop-shadow(0 0 8px var(--color-bg-primary));
`;
