import * as AWS from "aws-sdk";

const { DYNAMO_REGION } = process.env;

const call = async (action, params, callback?: Function) => {
  try {
    let documentClient;
    documentClient = new AWS.DynamoDB.DocumentClient({
      httpOptions: { timeout: 6000 },
      maxRetries: 3,
      region: DYNAMO_REGION,
    });

    const response = await documentClient[action](params).promise();
    if (callback && typeof callback === "function") {
      return callback(response);
    }

    return response;
  } catch (err) {
    console.log("Database Error Occurred: ", err);

    return err;
  }
};

export default {
  call,
};
