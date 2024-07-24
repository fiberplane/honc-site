import { css, cx } from "hono/css";
import { GooseIcon } from "../../icons";
import { SplashIcon } from "./SplashIcon";

type WaterGooseIconProps = {
  className?: ReturnType<typeof css>;
};

export function WaterGooseIcon({ className }: WaterGooseIconProps) {
  return (
    <div class={cx(iconsWrapper, className)}>
      <GooseIcon width={200} />
      <SplashIcon className={splashClass} width={120} />
    </div>
  );
}

const iconsWrapper = css`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const splashClass = css`
  position: absolute;
  bottom: 2%;
  left: 10%;
`;
