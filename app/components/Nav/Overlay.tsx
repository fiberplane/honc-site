import { css, cx, keyframes } from "hono/css";
import { createPortal, Fragment } from "hono/jsx/dom";
import { useAnimationState } from "../../hooks";

type OverlayProps = {
  isActive: boolean;
  onClickHandler: () => void;
  onKeyDownHandler: (event: KeyboardEvent) => void;
};

export function Overlay({
  isActive,
  onClickHandler,
  onKeyDownHandler,
}: OverlayProps) {
  const { handleAnimationEnd, shouldAnimateExit, shouldShow } =
    useAnimationState(isActive);

  if (!shouldShow) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div
          class={cx(overlayClass, shouldAnimateExit && "exit")}
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
  animation: ${fadeIn} 0.2s ease-out;

  &.exit {
    animation: ${fadeOut} 0.2s ease-out;
  }
`;
