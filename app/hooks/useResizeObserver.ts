import { type RefObject, useEffect } from "hono/jsx";

type UseResizeObserver = {
  target: RefObject<HTMLElement>;
  handleResize: (entries: Array<ResizeObserverEntry>) => void;
};

export function useResizeObserver({ handleResize, target }: UseResizeObserver) {
  useEffect(() => {
    if (!target.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(target.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
}
