import { useEffect } from "hono/jsx";
import posthog from "posthog-js";

const posthogProjectKey = import.meta.env.POSTHOG_PROJECT_KEY;

export default function PostHog() {
  useEffect(() => {
    posthog.init(posthogProjectKey, {
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    });
  }, []);

  return <></>;
}
