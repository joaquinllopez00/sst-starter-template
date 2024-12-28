import { StackContext, Api, use } from "sst/constructs";
import { CognitoStack } from "./CognitoStack";
import { usersRoutes } from "./routes";
import * as iam from "aws-cdk-lib/aws-iam";
import * as sst from "sst/constructs";

export function API({ stack, app }: StackContext) {
  const { auth } = use(CognitoStack);

  const permissions = [
    "dynamodb",
    "s3",
    "ses",
    new iam.PolicyStatement({
      actions: [
        "cognito-idp:AdminGetUser",
        "cognito-idp:AdminCreateUser",
        "cognito-idp:AdminDeleteUser",
        "cognito-idp:AdminSetUserPassword",
        "cognito-idp:AdminDisableUser",
        "cognito-idp:AdminEnableUser",
        "cognito-idp:AdminUpdateUserAttributes",
      ],
      effect: iam.Effect.ALLOW,
      resources: [auth.userPoolArn],
    }),
  ] as sst.Permissions;

  const api = new Api(stack, "api", {
    defaults: {
      function: {
        environment: {
          APP_NAME: app.name,
          APP_STAGE: app.mode === "dev" ? "dev" : stack.stage,
          COGNITO_REGION: app.region || process.env.REGION,
          COGNITO_USER_POOL_ID: auth.userPoolId || process.env.COGNITO_USER_POOL_ID,
          COGNITO_CLIENT_ID: auth.userPoolClientId || process.env.COGNITO_USER_POOL_WEB_CLIENT_ID,
          DYNAMO_REGION: app.region || process.env.REGION,
        },
        permissions,
      },
    },
    routes: {
      ...usersRoutes,
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return { api };
}
