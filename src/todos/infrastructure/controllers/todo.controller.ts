import { TodoUseCase } from "../../application/todo.usercase";
import { Request, Response } from "express";
import { TodoEntity } from "../../domain/todo.entity";

export class TodoController {
    constructor( readonly todoUseCase: TodoUseCase) {}

    async get(req: Request, res: Response) {
        const id = req.params.id;
        const todo = await this.todoUseCase.get(id);
        todo ? res.status(200).json(todo) : res.status(404).json({message: "No encontrado"});
    }

    async create(req: Request, res: Response) {
        const content = req.body.content;
        const todo = await this.todoUseCase.create(content);
        res.status(201).json(todo);
    }

    async update(req: Request, res: Response) {
        const todoRequest = new TodoEntity(req.body.id, req.body.description, req.body.completed);
        const todo = await this.todoUseCase.update(todoRequest);
        todo ? res.status(200).json(todo) : res.status(404).json({message: "No encontrado"});
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await this.todoUseCase.delete(id);
        res.status(204).json({message: "Borrado"});
    }
}