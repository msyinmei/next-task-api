import express from 'express'
import taskRouter from './routes/task.router';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/tasks', taskRouter);

app.get('/ping', (req, res) => {
    res.json({message: "pong"}).status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });