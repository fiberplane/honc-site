import { type RefObject, useEffect } from "hono/jsx";

type UseResizeObserver = (
  target: RefObject<Element>,
  handleResize: (entries: Array<ResizeObserverEntry>) => void,
) => void;

export const useResizeObserver: UseResizeObserver = function useResizeObserver(
  target,
  callback,
) {
  useEffect(() => {
    if (!target.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(target.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
};
