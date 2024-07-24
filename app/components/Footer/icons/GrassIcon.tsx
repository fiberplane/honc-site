import type { css } from "hono/css";

type GrassIconProps = {
  width?: number;
  className?: ReturnType<typeof css>;
};

export function GrassLeftIcon({ width = 621, className }: GrassIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 621 170"
      width={width}
      height={Math.round(width * (170 / 621))}
      fill="none"
      class={className}
    >
      <title>Grass icon</title>
      <path
        fill="#00A010"
        d="M525 180h24v-24h-24zm-48 0h24v-24h-24zm72-24h24v-24h-24zm24-24h24V84h-24zm24-48h24V36h-24zm-144 51h24V84h-24z"
      />
      <path fill="#00A010" d="M453 156h24v-24h-24z" />
      <path
        fill="#024B0A"
        d="M573 180h24v-24h-24zm-120 0h24v-24h-24zm72 0h24v-24h-24zm-24-24h24V84h-24z"
      />
      <path
        fill="#024B0A"
        d="M501 156h24v-24h-24zm-120 24h24v-24h-24zm-120 0h24v-24h-24zm24-96h24V60h-24zm0-24h24V36h-24zm48 120h24v-24h-24zm-120 0h24v-24h-24zm192-24h24v-24h-24zm0-24h24v-24h-24zm0-24h24V84h-24zm0-24h24V60h-24zm-96 48h24V84h-24zm0 24h24v-24h-24z"
      />
      <path
        fill="#00A010"
        d="M405 180h24v-24h-24zm-120 0h24v-24h-24zm72 0h24v-24h-24zm-120 0h24v-24h-24zm192-24h24v-24h-24zm-96 0h24v-24h-24zm-120 0h24v-24h-24zM21 180H-3v-24h24zm120 0h-24v-24h24zm-72 0H45v-24h24zm120 0h-24v-24h24zm-96-48H69V0h24zm0 24H69v-24h24zm120 0h-24v-24h24z"
      />
      <path
        fill="#024B0A"
        d="M93 180H69v-24h24zm-72 0H-3v-24h24zm120 0h-24v-24h24zm-96-72H21V84h24zm0 48H21v-24h24zm144-72h-24V12h24zm0 72h24v-24h-24zm-120 0h24v-24H69zm144-24h24v-24h-24zm-120 0h24v-24H93zm72 0h24v-24h-24zm-120 0h24v-24H45zm96-24h24V84h-24z"
      />
      <path fill="#024B0A" d="M21 108h24V84H21z" />
    </svg>
  );
}

export function GrassRightIcon({ width = 552, className }: GrassIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 552 158"
      width={width}
      height={Math.round(width * (158 / 552))}
      fill="none"
      className={className}
    >
      <title>Grass icon</title>
      <path
        fill="#024B0A"
        d="M288 168h-24v-24h24zm120 0h-24v-24h24zm-72 0h-24v-24h24zm120 0h-24v-24h24zm-192-24h-24v-24h24zm0-24h-24V96h24zm0-24h-24V72h24zm24-24h-24V48h24zm72 24h-24V72h24zm0 48h-24v-24h24zm120 0h-24v-24h24zM288 48h-24V24h24zM48 168H24v-24h24zm120 0h-24v-24h24zm-72 0H72v-24h24zm120 0h-24v-24h24zM24 144H0v-24h24zm0-24H0V96h24zm0-24H0V72h24zm24-24H24V48h24zm0-24H24V24h24zm144 120h-24v-24h24zm0-24h-24v-24h24zm0-24h-24V96h24zm-24-24h-24V72h24zm0-24h-24V48h24zm-48 72H96v-24h24zm120 0h-24v-24h24z"
      />
      <path
        fill="#00A010"
        d="M168 168h-24v-24h24zm-96 0H48v-24h24zm216 0h-24v-24h24zm-72 0h-24v-24h24zm-96 0H96v-24h24zm216 0h-24v-24h24zm-192-24h-24v-24h24zm-96 0H24v-24h24zm0-24H24V96h24zm96 0h-24V96h24zm96 24h-24v-24h24z"
      />
      <path
        fill="#00A010"
        d="M144 144h-24v-24h24zm216 0h-24v-24h24zm72 24h-24v-24h24zm-96 0h-24v-24h24zm192 0h-24v-24h24zm-48 0h-24v-24h24zm-96 0h-24v-24h24zm24-24h-24v-24h24zm-96 0h-24v-24h24zm0-24h-24V96h24zm96 0h-24V96h24zm96 24h-24v-24h24z"
      />
      <path fill="#00A010" d="M408 144h-24v-24h24z" />
      <path
        fill="#024B0A"
        d="M504 120h24V96h-24zm-120 0h24V96h-24zm144-24h24V72h-24zm-120 0h24V72h-24zm72 0h24V72h-24zm0 24h24V96h-24zM360 96h24V72h-24zm96-48h24V0h-24zm0 24h24V48h-24zm-120 0h24V48h-24z"
      />
    </svg>
  );
}
