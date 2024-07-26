import { useEffect } from "hono/jsx";
import posthog from "posthog-js";

/**
 * HACK: Honox's client.ts only gets initialised only when an island exists;
 * therefore we need to create an island to initialise PostHog.
 */
export default function PostHog() {
  useEffect(() => {
    const posthogProjectKey =
      import.meta.env.VITE_POSTHOG_PROJECT_KEY ||
      process.env.VITE_POSTHOG_PROJECT_KEY;

    if (!posthogProjectKey) {
      console.error("PostHog project key not set");
      return;
    }

    posthog.init(posthogProjectKey, {
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only",
    });
  }, []);

  return <></>;
}
