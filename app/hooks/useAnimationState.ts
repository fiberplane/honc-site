import { useEffect, useState } from "hono/jsx";

export function useAnimationState(isActive: boolean) {
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldAnimateExit, setShouldAnimateExit] = useState(false);

  const handleAnimationEnd = () => {
    if (!isActive && shouldShow) {
      setShouldShow(false);
      setShouldAnimateExit(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      setShouldShow(true);
      return;
    }

    setShouldAnimateExit(true);

    return () => {
      setShouldAnimateExit(false);
      setShouldShow(isActive);
    };
  }, [isActive]);

  return {
    shouldShow,
    shouldAnimateExit,
    handleAnimationEnd,
  };
}
