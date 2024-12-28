import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { Cognito, Function, StackContext } from "sst/constructs";

export function CognitoStack({ stack, app }: StackContext) {
  // Create a Lambda function for the pre-signup trigger
  const autoConfirmFunction = new Function(stack, "AutoConfirmFunction", {
    handler: "apps/server/services/users/auth/autoConfirm.handler",
    runtime: "nodejs16.x",
  });

  if (app.mode !== "dev") {
    // Create the Cognito construct
    const auth = new Cognito(stack, "CognitoAuth", {
      login: ["email"],
      triggers: {
        preSignUp: autoConfirmFunction,
      },
    });

    return {
      auth,
    };
  }

  const auth = new Cognito(stack, "CognitoAuth", {
    cdk: {
      userPool: UserPool.fromUserPoolId(stack as any, "IUserPool", process.env.COGNITO_USER_POOL_ID) as any,
      userPoolClient: UserPoolClient.fromUserPoolClientId(
        stack as any,
        "IUserPoolClient",
        process.env.COGNITO_USER_POOL_WEB_CLIENT_ID,
      ) as any,
    },
  });

  return {
    auth,
  };
}
