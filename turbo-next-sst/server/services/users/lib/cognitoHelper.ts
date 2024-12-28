import * as AWS from "aws-sdk";
import { v4 } from "uuid";

const identity = new AWS.CognitoIdentityServiceProvider({ region: process.env.COGNITO_REGION });
const UserPoolId = process.env.COGNITO_USER_POOL_ID;
const CognitoClientId = process.env.COGNITO_CLIENT_ID;

export const createCognitoUser = async (email, password) => {
  let params = {
    DesiredDeliveryMediums: ["EMAIL"],
    ForceAliasCreation: false,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
      {
        Name: "email_verified",
        Value: "true",
      },
    ],
    UserPoolId,
    Username: v4(),
  };
  if (password) {
    params = {
      ClientId: CognitoClientId /* required */,
      Password: password /* required */,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
      ] /* required */,
      Username: email,
    };

    const userDetails = await identity.signUp(params).promise();

    return userDetails.UserSub;
  }
  const userDetails = await identity.adminCreateUser(params).promise();

  return userDetails.User.Username;
};

export const updateCognitoUserEmail = async (oldEmail, newEmail) => {
  const params = {
    UserAttributes: [
      {
        Name: "email",
        Value: newEmail,
      },
    ],
    UserPoolId,
    Username: oldEmail,
  };

  return await identity.adminUpdateUserAttributes(params).promise();
};

export const getCognitoUser = async (email) => {
  const params = {
    UserPoolId,
    Username: email,
  };

  return identity.adminGetUser(params).promise();
};

export const disableCognitoUser = async (email) => {
  const params = { UserPoolId, Username: email };

  return await identity.adminDisableUser(params).promise();
};

export const enableCognitoUser = async (email) => {
  const params = { UserPoolId, Username: email };

  return await identity.adminEnableUser(params).promise();
};
