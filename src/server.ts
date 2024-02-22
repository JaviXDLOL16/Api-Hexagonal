import express from 'express';
import morgan from 'morgan';
import { taskRouter } from './task-management/infrastructure/routes/taskRoutes';

const PORT = 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Routes
app.use('/api/tasks', taskRouter);

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Exportar para posibles pruebas
export default server;
