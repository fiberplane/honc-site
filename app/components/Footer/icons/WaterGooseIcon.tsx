import { css } from "hono/css";
import { GooseIcon } from "../../icons";
import { SplashIcon } from "./SplashIcon";

export function WaterGooseIcon() {
  return (
    <div class={iconsContainer}>
      <GooseIcon width={200} />
      <SplashIcon className={splashClass} width={120} />
    </div>
  );
}

const iconsContainer = css`
  height: fit-content;
  width: fit-content;
  position: relative;
`;

const splashClass = css`
  position: absolute;
  bottom: 2%;
  left: 10%;
`;
