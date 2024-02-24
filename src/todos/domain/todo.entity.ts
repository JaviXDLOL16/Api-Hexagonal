import { TodoInterface } from "./todo.interface";

export class TodoEntity implements TodoInterface {
    _uuid: string;
    _texto: string;
    _completado: boolean;

    constructor(id: string, texto: string, completado: boolean) {
        this._uuid = id;
        this._texto = texto;
        this._completado = completado;
    }

    public get uuid(): string {
        return this._uuid;
    }

    public get texto(): string {
        return this._texto;
    }

    public get completado(): boolean {
        return this._completado;
    }

    public set uuid(id: string) {
        this._uuid = id;
    }

    public set texto(texto: string) {
        this._texto = texto;
    }

    public set completado(completado: boolean) {
        this._completado = completado;
    }

}