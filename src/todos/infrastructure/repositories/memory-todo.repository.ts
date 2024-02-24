import { TodoInterface } from '../../domain/todo.interface';
import { TodoEntity } from '../../domain/todo.entity';
import { TodoRepository } from './todo.repository';

export class MemoryTodoRepository implements TodoRepository {
    createTodo(todo: TodoEntity): Promise<TodoEntity> {
        const todoEntity = new TodoEntity(todo.uuid, todo.texto, todo.completado);
        return Promise.resolve(todoEntity);
    }
    getTodo(uuid: string): Promise<TodoEntity> {
        const todoEntity = new TodoEntity(uuid, 'texto', false);
        return Promise.resolve(todoEntity);
    }
    updateTodo(uuid: string, todo: TodoEntity): Promise<TodoEntity> {
        const todoEntity = new TodoEntity(todo.uuid, todo.texto, todo.completado);
        return Promise.resolve(todoEntity);
    }
    deleteTodo(uuid: string): Promise<void> {
        return Promise.resolve();
    }


}