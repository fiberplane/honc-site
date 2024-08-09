import { css } from "hono/css";

type GooseIconProps = {
  width?: number;
};

export function GooseIcon({ width = 131 }: GooseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 131 166"
      height={Math.round(width * (161 / 131))}
      width={width}
      class={svgStyle}
      aria-hidden="true"
    >
      <switch>
        <g>
          <path
            d="M100.8 63.6h-5.1v-5H91v-4.9h-4.7V37.5h-4.7V32h-3.4v-5.3H41V32h-5.5v5.5h-5.1V48h-5v44.9h5v46.4h47.3V134H73v-10.1h-5V93.1h-4.7v-9.6h9.8v-4.9h32.6v-9.9h-4.8l-.1-5.1z"
            class="st0"
          />
          <path
            fill="#f57e20"
            fill-rule="evenodd"
            d="M87.3 68.6v-5.1h-8.7v-9.9H68v15.1h10.1v4.8h14v-4.9h-4.8z"
            clip-rule="evenodd"
          />
          <path d="M41 26.7h37.3V32H41v-5.3z" class="st2" />
          <path
            fill="#8692a3"
            fill-rule="evenodd"
            d="M35.5 32H41v5.5h-5.5V32z"
            clip-rule="evenodd"
          />
          <path
            fill="#e2ece9"
            fill-rule="evenodd"
            d="M40.8 32h5.6v5.5H41V32h-.2z"
            clip-rule="evenodd"
          />
          <path
            fill="#8793a2"
            fill-rule="evenodd"
            d="M86.3 48h-4.7V37.5h-3.4V32h3.4v5.5h4.7V48z"
            clip-rule="evenodd"
          />
          <path
            fill="#ebf3ee"
            fill-rule="evenodd"
            d="M51.2 37.5h16.9v16.2h-5.2V43H51.2v-5.5z"
            clip-rule="evenodd"
          />
          <path
            fill="#828fa3"
            fill-rule="evenodd"
            d="M35.5 37.5V48h-5.1V37.5h5.1z"
            clip-rule="evenodd"
          />
          <path d="M81.7 48h4.7v5.7h-4.7V48z" class="st8" />
          <path d="M68.1 48h5.3v5.7h-5.3V48z" class="st0" />
          <path
            d="M91.1 53.7v4.9h-4.7v-4.9h4.7zm0 4.9h4.7v5h-4.7v-5z"
            class="st8"
          />
          <path
            fill="#511e1d"
            fill-rule="evenodd"
            d="M77.7 58.6v5h5.1v-5h-5.1z"
            clip-rule="evenodd"
          />
          <path
            fill="#dee7e8"
            fill-rule="evenodd"
            d="M63.2 63.6v5.2h-5v-5.2h5z"
            clip-rule="evenodd"
          />
          <path
            fill="#c5cdd8"
            fill-rule="evenodd"
            d="M58.2 68.8h5v4.7H68v5.1H46.2v-5.1h12.1v-4.7z"
            clip-rule="evenodd"
          />
          <path
            fill="#d9453c"
            fill-rule="evenodd"
            d="M68 63.6v9.9h-4.8v-9.9H68z"
            clip-rule="evenodd"
          />
          <path d="M95.8 68.5h5.1v5h-5.1v-5z" class="st13" />
          <path
            fill="#b1bccc"
            fill-rule="evenodd"
            d="M41 73.5h5.2v5.1H41v-5.1z"
            clip-rule="evenodd"
          />
          <path
            fill="#da483b"
            fill-rule="evenodd"
            d="M100.8 68.7v4.8H86.3v5.1h19.3v-9.9h-4.8z"
            clip-rule="evenodd"
          />
          <path fill="#808ea2" d="M73.1 78.6H46.2v4.9h26.9v-4.9z" />
          <path
            fill="#8b909a"
            fill-rule="evenodd"
            d="M25.4 48h5v44.9h-5z"
            clip-rule="evenodd"
          />
          <path
            fill="#dae6e7"
            fill-rule="evenodd"
            d="M46.3 98.1h-5.4v-5h5.4v5z"
            clip-rule="evenodd"
          />
          <path
            fill="#ebf5ef"
            fill-rule="evenodd"
            d="M46.3 93.1h11.9v5h-6.8v31h-5.2l.1-20.5h-5.4V98.1h5.4v-5z"
            clip-rule="evenodd"
          />
          <path
            fill="#828ea2"
            fill-rule="evenodd"
            d="M30.4 92.9V134h5.3V92.9h-5.3z"
            clip-rule="evenodd"
          />
          <path
            fill="#e0eae9"
            fill-rule="evenodd"
            d="M41 139.3v-30.7h5.4l-.2 30.7"
            clip-rule="evenodd"
          />
          <path
            fill="#7f8da0"
            fill-rule="evenodd"
            d="M67.9 123.9h5V134h-5v-10.1z"
            clip-rule="evenodd"
          />
          <path
            fill="#d3e0e3"
            fill-rule="evenodd"
            d="M41 139.3H30.4V134H41v5.3z"
            clip-rule="evenodd"
          />
          <path
            fill="#818fa4"
            fill-rule="evenodd"
            d="M72.9 134h4.7v5.3h-4.7V134z"
            clip-rule="evenodd"
          />
          <path
            fill="#2e1b39"
            fill-rule="evenodd"
            d="M51.2 43v10.7h12.1V43H51.2zm3.3 5.3v-3.5h3.7v3.5h-3.7z"
            clip-rule="evenodd"
          />
          <path
            fill="#c5ced9"
            fill-rule="evenodd"
            d="M58.2 83.5h-12v-4.9H41v-5.1h-5.3v-9.9h-5.3v29.3h5.3V134H41V88.2h5.4v4.9h11.9v-9.6z"
            clip-rule="evenodd"
          />
          <path
            fill="#dce8e8"
            fill-rule="evenodd"
            d="M35.5 37.5V48h-5.1v10.5h5.5v-4.8H41V37.5h-5.5z"
            clip-rule="evenodd"
          />
          <path
            fill="#eef5f0"
            fill-rule="evenodd"
            d="M41 58.5H30.4v5.1h5.3v9.9h22.6v-4.7H41V58.5z"
            clip-rule="evenodd"
          />
          <path
            d="M91.1 63.6v-5h-4.7v-4.9h-4.6V48h-8.4v5.7h4.3v4.9h5.1v5h3.6v5.1h4.7v4.8h4.8v-9.9h-4.8z"
            class="st13"
          />
          <path fill="#d3463e" d="M68 78.6h5.2v-5.1H68v5.1z" />
          <path d="M68 73.6h5.1v-4.9H68v4.9z" class="st30" />
          <path
            fill="#edf5f1"
            fill-rule="evenodd"
            d="M46.3 88.2v4.9h-5.4v-4.9h5.4z"
            clip-rule="evenodd"
          />
          <path fill="#f15b2b" d="M78.1 68.7h-5v4.8h5v-4.8z" />
          <path d="M73.1 73.5v5.1h13.3v-5.1H73.1z" class="st30" />
          <path fill="#eef5f0" d="M63.2 63.6H68v-4.9h-4.8v4.9z" />
          <path
            fill="#6f6a8c"
            fill-rule="evenodd"
            d="M63.2 83.5v9.6h-5v-9.6h5z"
            clip-rule="evenodd"
          />
          <path d="M95.8 63.6h5.1v5.1h-5.1v-5.1z" class="st8" />
          <path
            fill="#fefdf2"
            fill-rule="evenodd"
            d="M58.2 44.8v3.5h-3.7v-3.5h3.7z"
            clip-rule="evenodd"
          />
          <path d="M67.9 93.1v30.8h-4.7V93.1h4.7z" class="st2" />
        </g>
      </switch>
    </svg>
  );
}

const svgStyle = css`
  .st0 {
    fill: #fff;
  }
  .st0,
  .st13,
  .st2,
  .st8 {
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
  .st2 {
    fill: #808ea2;
  }
  .st8 {
    fill: #d94437;
  }
  .st13 {
    fill: #faa31a;
  }
  .st30 {
    fill: #af344e;
  }
`;
