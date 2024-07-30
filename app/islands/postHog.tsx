import { Fragment, useEffect } from "hono/jsx";
import posthog from "posthog-js";

type PostHogProps = {
  projectKey?: string;
};

/**
 * HACK: Honox's client.ts only gets initialised only when an island exists;
 * therefore we need to create an island to initialise PostHog.
 */
export default function PostHog({ projectKey }: PostHogProps) {
  useEffect(() => {
    if (!projectKey) {
      console.error("PostHog project key is not defined.");
      return;
    }

    posthog.init(projectKey, {
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only",
    });
  }, [projectKey]);

  return <Fragment />;
}
