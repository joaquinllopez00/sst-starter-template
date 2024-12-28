import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /todo": "apps/server/functions/src/todo.list",
      "POST /todo": "apps/server/functions/src/todo.create",
      "GET /docs": "apps/server/functions/src/swaggerDocs.get",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
