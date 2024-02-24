import express from "express";
import { todoController } from "../dependences/dependencies";

export const RouterTodo = express.Router();

RouterTodo.post("/", todoController.create.bind(todoController));
RouterTodo.get("/:id", todoController.get.bind(todoController));
RouterTodo.put("/", todoController.update.bind(todoController));
RouterTodo.delete("/:id", todoController.delete.bind(todoController));
