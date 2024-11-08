import { keyframes, css } from "hono/css";
import { useRef, useEffect } from "hono/jsx";

type SvgTwoElementsProps = {
  shouldAnimate: boolean;
};

export function SvgThreeElements({ shouldAnimate }: SvgTwoElementsProps) {
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
      viewBox="0 0 150 150"
      xmlns="http://www.w3.org/2000/svg"
      height="90"
      width="90"
      class={svgClass}
      role="graphics-symbol"
    >
      <polyline points="0,0 0,50 100,50 100,150 150,150 150,100 50,100 50,0 0,0" />
      <polyline
        ref={polyLineRef}
        class={polyLineClass}
        data-should-animate={shouldAnimate}
        points="0,0 0,50 100,50 100,150 150,150 150,100 50,100 50,0 0,0"
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
  stroke: hsl(from var(--color-fg-primary) h 80% 45% / .8);
  filter: drop-shadow(0 0 8px var(--color-bg-primary));
`;
