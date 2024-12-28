import { ApiHandler } from "sst/node/api";

/**
 * @swagger
 * tags:
 *  name: Todos
 *  description: Todo management
 */

/**
 * Swagger API Example
 * @swagger
 * /todos:
 *   post:
 *     description: Create a new todo
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Todo created
 *   get:
 *     description: List all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos
 */

export const create = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: "Todo created",
  };
});

export const list = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: "",
  };
});
