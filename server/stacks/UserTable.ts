// import { TableName } from "@repo/app-types";
import { StackContext, Table } from "sst/constructs";

export function UserTable({ stack, app }: StackContext) {
  const userTable = new Table(stack, "User", {
    fields: {
      email: "string",
      id: "string",
    },
    globalIndexes: {
      email: { partitionKey: "email" },
    },
    primaryIndex: { partitionKey: "id" },
    stream: "new_image",
  });

  return userTable;
}
