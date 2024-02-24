import { TodoEntity } from '../domain/todo.entity';
import { TodoRepository } from "../infrastructure/repositories/todo.repository";
import { v4 as uuidv4 } from 'uuid';

export class TodoUseCase {
    constructor(readonly todoRepository: TodoRepository) { }

    async get(id: string): Promise<TodoEntity> {
        return await this.todoRepository.getTodo(id);
    }

    async create(request: TodoEntity): Promise<TodoEntity> {
        const id = uuidv4();

        const todo = new TodoEntity(id, request.texto, request.completado);

        const entity = await this.todoRepository.createTodo(todo);

        return entity;
    }

    async update(request: TodoEntity): Promise<TodoEntity> {
        const todo = new TodoEntity(request.uuid || uuidv4(), request.texto, request.completado);

        const entity = await this.todoRepository.updateTodo(todo.uuid, todo);

        return entity;
    }

    async delete(id: string) {
        await this.todoRepository.deleteTodo(id);
    }
}