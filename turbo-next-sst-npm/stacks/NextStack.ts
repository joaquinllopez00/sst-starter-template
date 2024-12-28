import { NextjsSite, StackContext } from "sst/constructs";

export function NextStack({ stack }: StackContext) {
  // Create the Next.js site
  const siteWeb = new NextjsSite(stack, "SiteWeb", {
    path: "apps/web",
  });
  // Create the Next.js site
  const siteDocs = new NextjsSite(stack, "SiteDocs", {
    path: "apps/docs",
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    WebURL: siteWeb.url,
    DocsURL: siteDocs.url,
  });
}
