import { SSTConfig } from "sst";
import { API } from "./stacks/ApiStack";
import { NextStack } from "./stacks/NextStack";
// import { VPCStack } from "./stacks/VPCStack";

const config: SSTConfig = {
  config(_input) {
    return {
      name: "server",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(NextStack);
    // app.stack(VPCStack);
  },
};

export default config;
