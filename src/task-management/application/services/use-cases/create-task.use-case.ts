import { Task } from "../../../domain/entities/task.entity";
import { TaskRepository } from "../../../domain/repositories/task.repository";
import { v4 as uuidv4 } from 'uuid';

export class CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(content: string): Promise<Task> {
        const newTask = this.createNewTask(content);
        return await this.saveTask(newTask);
    }

    private createNewTask(content: string): Task {
        const id = uuidv4();
        return new Task(id, content, false);
    }

    private async saveTask(task: Task): Promise<Task> {
        return await this.taskRepository.create(task);
    }
}