import { type RefObject, useEffect } from "hono/jsx";

type TargetType =
  | Element
  | NodeListOf<Element>
  | RefObject<Element | NodeListOf<Element>>;

type UseIntersectionObserver = (
  target: TargetType,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) => void;

export const useIntersectionObserver: UseIntersectionObserver =
  function useIntersectionObserver(target, callback, options) {
    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);

      const isList = isNodeList(target);
      if (isList) {
        for (const element of target) {
          observer.observe(element);
        }
        return;
      }

      const isRef = isRefObject(target);
      if (isRef) {
        const currentTarget = target.current;
        if (!currentTarget) {
          return;
        }

        const isList = isNodeList(currentTarget);
        if (isList) {
          for (const element of currentTarget) {
            observer.observe(element);
          }
          return;
        }

        observer.observe(currentTarget);
        return;
      }

      observer.observe(target);

      return () => {
        observer.disconnect();
      };
    }, [target]);
  };

function isNodeList(target: TargetType): target is NodeListOf<Element> {
  return typeof (target as NodeListOf<Element>)[Symbol.iterator] === "function";
}

function isRefObject(
  target: TargetType,
): target is RefObject<Element | NodeListOf<Element>> {
  return !!(target as RefObject<Element>)?.current;
}
