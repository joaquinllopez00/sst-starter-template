import { TableName } from "@repo/app-types";
import generateModel from "./lib/generateModel";

export const UserModel = generateModel(TableName.USER, "id", null, [
  {
    key: "email",
    indexObj: {
      name: "email",
      global: true,
    },
  },
]);
