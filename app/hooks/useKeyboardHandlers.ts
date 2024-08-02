import { useEffect } from "hono/jsx";

type UseKeyboardHandler = (event: KeyboardEvent) => void;

export function useKeyboardHandler(handleKeyDown: UseKeyboardHandler) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
