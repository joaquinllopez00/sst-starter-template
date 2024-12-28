import { NextjsSite, StackContext, use } from "sst/constructs";
import { API } from "./ApiStack";
import { CognitoStack } from "./CognitoStack";

export function NextStack({ stack }: StackContext) {
  const { api } = use(API);
  const { auth } = use(CognitoStack);
  console.log("process.env.apiurl", process.env.API_URL, api.url);
  // Create the Next.js site
  const siteWeb = new NextjsSite(stack, "SiteWeb", {
    path: "apps/web",
    environment: {
      NEXT_PUBLIC_API_URL: api.url || process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_COGNITO_REGION: stack.region ?? "n/a",
      NEXT_PUBLIC_COGNITO_USER_POOL_ID: auth.userPoolId || process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID:
        auth.userPoolClientId || process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID,
      NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID:
        auth.cognitoIdentityPoolId || process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID,
    },
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

  return { siteWeb, siteDocs };
}
