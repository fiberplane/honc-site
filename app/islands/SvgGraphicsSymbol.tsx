import { keyframes, css } from "hono/css";
import { useRef, useEffect } from "hono/jsx";

type SvgGraphicSymbolProps = {
  shouldAnimate: boolean;
  variant: number;
};

const variant1Points = "50,0 50,100 100,100 100,50 0,50 0,0 50.5,0";
const variant2Points =
  "0,0 0,50 100,50 100,150 150,150 150,100 50,100 50,0 0,0";

export function SvgGraphicsSymbol({
  shouldAnimate,
  variant,
}: SvgGraphicSymbolProps) {
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

  if (variant === 0) {
    return (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        height="60"
        width="60"
        class={svgClass}
        role="graphics-symbol"
      >
        <polyline points={variant1Points} />
        <polyline
          ref={polyLineRef}
          data-should-animate={shouldAnimate}
          points={variant1Points}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 150 150"
      xmlns="http://www.w3.org/2000/svg"
      height="90"
      width="90"
      class={svgClass}
      role="graphics-symbol"
    >
      <polyline points={variant2Points} />
      <polyline
        ref={polyLineRef}
        data-should-animate={shouldAnimate}
        points={variant2Points}
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
    stroke-width: 1;
    fill: none;

    &:first-of-type {
      stroke: rgb(from var(--color-bg-default) r g b / 0.6);
    }

    &[data-should-animate] {
      animation: ${svgAnimation} 1.5s ease-in-out forwards;
      stroke: var(--color-fg-primary);
      filter: drop-shadow(0 0 8px var(--color-bg-primary));
    }
  }
`;
