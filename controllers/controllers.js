const { createCustomError } = require('../errors/custom_error');
const asyncWrapper = require('../middlewares/async');
const task = require('../model/task')


const getAllTasks =asyncWrapper(async(req,res)=>{
const allTasks = await task.find({});
res.status(200).json(allTasks);
});

const createTask = asyncWrapper( async (req,res)=>{
   const newTask = await task.create(req.body);
   res.status(201).json(newTask);
    });
    
const getTaskById =asyncWrapper( async (req,res,next)=>{
  const {id:taskId} = req.params;
  const singleTask = await task.findOne({_id:taskId});
  if(!singleTask){
    return next(createCustomError('Task not found',404));
  }
        res.status(200).json({singleTask});
    });

const updateTask =asyncWrapper( async (req,res)=>{
    const {id:taskId} = req.params;
  const singleTask = await task.findOneAndUpdate({_id:taskId},req.body,
    {new:true,runValidators:true});
  if(!singleTask){
    return next(createCustomError('Task not found',404));

  }
    res.status(200).json({singleTask});
});
            
const deleteTask =asyncWrapper(async (req,res)=>{
   const {id:taskId} = req.params;
  const singleTask = await task.findOneAndDelete({_id:taskId});
  if(!singleTask){
    return next(createCustomError('Task not found',404));

  }
    res.status(200).json({msg:'Task was successfully deleted'});         
    });
                
                          
module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}