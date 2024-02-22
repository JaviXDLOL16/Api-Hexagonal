import { TaskRepository } from "../../../domain/repositories/task.repository";

export class DeleteTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(id: string): Promise<void> {
        await this.deleteTask(id);
    }

    private async deleteTask(id: string): Promise<void> {
        await this.taskRepository.delete(id);
    }
}