import { Task } from "../../domain/entities/task.entity";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { tasks } from "../in-memory-db/db";

export class InMemoryTaskRepository implements TaskRepository {
    private readonly initTasks: Task[];

    constructor() {
        this.initTasks = [...tasks]; // Crear una copia de tasks para evitar cambios no deseados
    }

    create(task: Task): Promise<Task> {
        tasks.push(task);
        return Promise.resolve(task);
    }

    list(): Promise<Task[]> {
        return Promise.resolve([...this.initTasks]); // Devolver una copia de initTasks
    }

    get(id: string): Promise<Task | null> {
        const foundTask = this.initTasks.find(task => task.id === id);
        return Promise.resolve(foundTask || null);
    }

    update(id: string, task: Task): Promise<Task | null> {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            return Promise.resolve(null);
        }

        tasks[taskIndex] = task;
        return Promise.resolve(task);
    }

    delete(id: string): Promise<null> {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        return Promise.resolve(null);
    }
}
