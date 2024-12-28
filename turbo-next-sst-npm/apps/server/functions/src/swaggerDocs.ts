import { ApiHandler } from "sst/node/api";
import swaggerJSDoc from "swagger-jsdoc";

export const get = ApiHandler(async (_evt) => {
  // Swagger definition
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Swagger API Example",
        version: "1.0.0",
      },
    },
    // Paths to files containing OpenAPI definitions
    apis: ["./**/*.ts"],
  };

  const swaggerSpec = swaggerJSDoc(options);
  
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(swaggerSpec),
  };
});
