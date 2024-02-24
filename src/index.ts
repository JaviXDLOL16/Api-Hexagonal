import { config } from "dotenv";
import express, { Express, Request, Response } from "express";
import { RouterTodo } from "./todos/infrastructure/routes/todo.routes";

config();

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/todos", RouterTodo);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
} );