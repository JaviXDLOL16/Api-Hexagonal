import { TodoController } from "../controllers/todo.controller";
import { TodoUseCase } from "../../application/todo.usercase";
import { MemoryTodoRepository } from "../repositories/memory-todo.repository";

const mongoTodoRepository = new MemoryTodoRepository();

const createTodoUseCase = new TodoUseCase(mongoTodoRepository);
export const todoController = new TodoController(createTodoUseCase);