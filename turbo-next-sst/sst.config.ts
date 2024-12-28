import { SSTConfig } from "sst";
import stacks from "./server/stacks/index";

const config: SSTConfig = {
  config(_input) {
    return {
      name: "server",
      region: "us-east-1",
    };
  },
  stacks,
};

export default config;
