"use client";

import "./globals.css";
import { Nav } from "./components/Nav";
import { Toaster } from "@/components/ui/toaster";
import { initAmplify } from "../lib/Amplify/amplifyConfig";
import { Provider } from "store/provider";

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const amplifyConfig = {
    cognitoRegion: process.env.NEXT_PUBLIC_COGNITO_REGION || "",
    cognitoUserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
    cognitoUserPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID || "",
  };

  initAmplify(amplifyConfig);

  return (
    <html lang="en">
      <body>
        <Provider>
          <Nav />
          <div className="container">{children}</div>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
