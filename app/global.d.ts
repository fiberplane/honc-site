import "hono";

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props?: {
        frontmatter: {
          title?: string;
          description?: string;
          image?: string;
        };
      }
    ): Response | Promise<Response>;
  }
}
