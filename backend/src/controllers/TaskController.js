import Task from "../models/Task.js";
import NotFoundError from "../errors/NotFoundError.js";
import ClientError from "../errors/ClientError.js";

const responseError = (error, res) => {
   if(error instanceof NotFoundError) {
      return res.status(error.statusCode).json({
         error: error.message
      })
   }
}

const getTask = async (req, res) => {
   try {
      const task = await Task.findAll({
         attributes: ['id','name','completed']
      });
      return res.status(200).json({
         data: task
      });
   } catch (error) {
      responseError(error, res);
   }
}

const addTask = async (req, res) => {
   try {
      const {name} = req.body;
      if(!name) { 
         throw new ClientError('Name is required')
      }
      const task = await Task.create({
         name: name
      });
      return res.status(201).json({
         data: {
            id: task.id,
            name: task.name
         }
      })
   } catch (error) {
      if(error instanceof ClientError) {
         res.status(error.statusCode).json({
            error: error.message
         })
      }
   }
}

const getTaskById = async (req, res) => {
   try {
      const taskId = req.params.id
      const task = await Task.findOne({ 
         where: {
            id: taskId
         } 
      })
      if(!task) { 
         throw new NotFoundError('Task is not found')
      }
      return res.status(200).json({
         data: {
            id: task.id,
            name: task.name,
            completed: task.completed,
         } 
      });
   } catch (error) {
      responseError(error, res);
   }
}

const updateTask  = async(req, res) => {
   try {
      const taskId = req.params.id
      const task = await Task.findOne({ 
         where: {
            id: taskId
         } 
      })
      if(!task) { 
         throw new NotFoundError('Task is not found')
      }
      
      const {name, completed} = req.body;

      const data = {
         id: taskId,
         name: name,
         completed: completed
      }
      await Task.update(data,{
         where: {
            id: taskId
         }
      })
      res.status(200).json({
         data: {
            id: data.id,
            name: data.name,
            completed: data.completed
         }
      });
   } catch (error) {
      responseError(error, res);
   }
}

const deleteTask = async(req, res) => {
   try {
      const taskId = req.params.id
      const task = await Task.destroy({ 
         where: {
            id: taskId
         }
      });
      if(!task) { 
         throw new NotFoundError('Task is not found');
      }
      res.status(200).json({
         data: 'OK'
      });
   } catch (error) {
      responseError(error, res);
   }
}

export { getTask, addTask, getTaskById, updateTask, deleteTask }