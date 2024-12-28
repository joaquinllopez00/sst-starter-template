import * as dynamoose from "dynamoose";

// This should be the only direct import of dynamoose in the app
// To trick webpack into using a single instance across the app.

const ddb = new dynamoose.aws.sdk.DynamoDB({
  region: process.env.DYNAMO_REGION,
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);

// Defaults to port 8000
// if (process.env.STAGE !== 'prod' && process.env.STAGE !== 'dev') {
//   dynamoose.local(process.env.DYNAMO_ENDPOINT);
// }

export default dynamoose;
