import { keyframes, css } from "hono/css";
import { useRef, useEffect, useMemo } from "hono/jsx";

type SvgGraphicSymbolProps = {
  shouldAnimate: boolean;
  variant: number;
};

const svgPolyLineElements = [
  {
    points: "0,0 0,50 100,50 100,150 150,150 150,100 50,100 50,0 -0.5,0",
    dimension: { x: 3, y: 3 },
  },
  {
    points: "50,0 50,100 100,100 100,50 0,50 0,0 50.5,0",
    dimension: { x: 2, y: 2 },
  },
  {
    points: "0,0 0,50 50,50 50,0 -0.5,0",
    dimension: { x: 1, y: 1 },
  },
  {
    points: "0,0 0,50 150,50 150,0 100,0 100,100 50,100 50,0 -0.5,0",
    dimension: { x: 3, y: 2 },
  },
] as const;

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

  const { height, points, width, viewBox } = useMemo(() => {
    const safeIndex = Math.min(variant, svgPolyLineElements.length - 1);
    const svgPolyLineElement = svgPolyLineElements[safeIndex];

    const viewBoxRootValue = 50;
    const viewBox = `0 0 ${svgPolyLineElement.dimension.x * viewBoxRootValue} ${
      svgPolyLineElement.dimension.y * viewBoxRootValue
    }`;

    const sizeRootValue = 24;
    const height = svgPolyLineElement.dimension.y * sizeRootValue;
    const width = svgPolyLineElement.dimension.x * sizeRootValue;

    return {
      height,
      points: svgPolyLineElement.points,
      viewBox,
      width,
    };
  }, [variant, svgPolyLineElements]);

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      class={svgClass}
      role="graphics-symbol"
    >
      <polyline points={points} />
      <polyline
        ref={polyLineRef}
        data-should-animate={shouldAnimate}
        points={points}
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
      stroke: hsl(20, 13%, 15%);
    }

    &[data-should-animate] {
      animation: ${svgAnimation} 1.5s ease-in-out forwards;
      stroke: var(--color-fg-primary);
      filter: drop-shadow(0 0 8px var(--color-bg-primary));
    }
  }
`;
