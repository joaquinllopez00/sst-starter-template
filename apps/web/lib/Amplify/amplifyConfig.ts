import { Amplify } from "aws-amplify";

type Options = {
  cognitoRegion: string;
  cognitoUserPoolId: string;
  cognitoUserPoolWebClientId: string;
};

// eslint-disable-next-line
export const initAmplify = (options: Options): any => {
  Amplify.configure({
    Auth: {
      region: options.cognitoRegion,
      userPoolId: options.cognitoUserPoolId,
      userPoolWebClientId: options.cognitoUserPoolWebClientId,
    },
  });
};
