import * as sst from "sst/constructs";

const SERVICE_PATH = "server/services";

export const usersRoutes: Record<string, sst.ApiRouteProps<"Authorizer">> = {
  "POST   /users/signup": {
    authorizer: "none",
    function: {
      handler: `${SERVICE_PATH}/users/signUp/signUp.handler`,
    },
  },
};
