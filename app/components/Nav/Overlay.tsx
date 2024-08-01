import { css, cx, keyframes } from "hono/css";
import { createPortal, useEffect } from "hono/jsx/dom";

import { useAnimationState, useKeyboardHandler } from "../../hooks";

type OverlayProps = {
  isActive: boolean;
  onClickHandler: () => void;
  onKeyDownHandler: (event: KeyboardEvent) => void;
};

/**
 * Renders a full-screen overlay that can be used to block user interaction with
 * the rest of the page.
 */
export function Overlay({
  isActive,
  onClickHandler,
  onKeyDownHandler,
}: OverlayProps) {
  useKeyboardHandler(onKeyDownHandler);

  const { handleAnimationEnd, shouldAnimateExit, shouldShow } =
    useAnimationState(isActive);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  if (!shouldShow) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div
          class={cx(overlayClass, shouldAnimateExit && overlayExitClass)}
          onClick={onClickHandler}
          onKeyDown={onKeyDownHandler}
          onAnimationEnd={handleAnimationEnd}
        />,
        document.body,
      )}
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

const overlayClass = css`
  position: fixed;
  inset: 0;
  background-color: rgb(from var(--color-bg-default) r g b / 60%);
  animation: ${fadeIn} 0.2s ease-out forwards;
`;

const overlayExitClass = css`
  animation: ${fadeOut} 0.2s ease-out forwards;
`;
