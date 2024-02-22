import { TaskRepository } from "../../../domain/repositories/task.repository";
import { Task } from "../../../domain/entities/task.entity";
import { TaskEntityInterface } from "../../../domain/entities/interfaces/task-entity.interface";

export class UpdateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(id: string, updatedTaskData: TaskEntityInterface): Promise<Task | null> {
        const existingTask = await this.retrieveTask(id);
        if (!existingTask) {
            return null;
        }

        const updatedTask = this.updateTaskData(existingTask, updatedTaskData);
        return await this.taskRepository.update(id, updatedTask);
    }

    private async retrieveTask(id: string): Promise<Task | null> {
        return await this.taskRepository.get(id);
    }

    private updateTaskData(existingTask: Task, updatedTaskData: TaskEntityInterface): Task {
        existingTask.content = updatedTaskData.content;
        existingTask.isDone = updatedTaskData.isDone;
        return existingTask;
    }
}
