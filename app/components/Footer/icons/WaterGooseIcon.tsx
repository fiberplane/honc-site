import { css } from "hono/css";
import { GooseIcon } from "../../icons";
import { SplashIcon } from "./SplashIcon";

export function WaterGooseIcon() {
  return (
    <>
      <GooseIcon width={200} />
      <SplashIcon className={splashClass} width={120} />
    </>
  );
}

const splashClass = css`
  position: absolute;
  bottom: 2%;
  left: 10%;
`;
