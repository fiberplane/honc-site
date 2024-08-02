type HamburgerIconProps = {
  isOpened: boolean;
};

export function HamburgerIcon({ isOpened }: HamburgerIconProps) {
  return (
    <svg
      viewBox="0 0 7 7"
      height="32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
    >
      {Array.from({ length: 5 }).map((_, colIndex) =>
        Array.from({ length: 5 }).map((_, rowIndex) => {
          const isDiagonalCrossPart =
            colIndex === rowIndex || colIndex + rowIndex === 4;
          const x = colIndex + 1;
          const y = isOpened ? rowIndex + 1 : rowIndex * 2 + 1;

          if (isOpened && !isDiagonalCrossPart) {
            return null;
          }

          return (
            <rect
              key={{ colIndex, rowIndex }}
              width="1"
              height="1"
              x={x}
              y={y}
            />
          );
        }),
      )}
    </svg>
  );
}
