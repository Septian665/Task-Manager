import express from 'express';
import taskRouter from './src/routes/tasks.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api',taskRouter);

app.listen(PORT, () => {
   console.log(`server running http://${process.env.SERVER}:${PORT}`)
})
