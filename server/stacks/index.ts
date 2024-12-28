import * as sst from "sst/constructs";
import { CognitoStack } from "./CognitoStack";
import { API } from "./ApiStack";
import { NextStack } from "./NextStack";
import { UserTable } from "./UserTable";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs18.x",
  });

  if (app.mode !== "dev") {
    app.stack(UserTable);
  }

  app.stack(CognitoStack);
  app.stack(API);
  app.stack(NextStack);
}
