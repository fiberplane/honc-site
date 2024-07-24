import type { css } from "hono/css";

type SplashIconProps = {
  width?: number;
  className?: ReturnType<typeof css>;
};

export function SplashIcon({ className, width = 200 }: SplashIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278 164"
      width={width}
      height={Math.round(width * (164 / 278))}
      fill="none"
      class={className}
    >
      <title>Splash icon</title>
      <path
        fill="#1C6289"
        d="M24 68h24v24H24V68Zm24 24h24v24H48V92ZM0 92h24v24H0V92Z"
      />
      <path
        fill="#fff"
        d="M72 116h24v24H72v-24Zm24 24h24v24H96v-24Zm110-48h24v24h-24V92Zm48-49h24v24h-24V43Z"
      />
      <path fill="#1C6289" d="M230 67h24v24h-24V67ZM24 24h24v24H24V24Z" />
      <path fill="#fff" d="M0 0h24v24H0V0Z" />
    </svg>
  );
}
