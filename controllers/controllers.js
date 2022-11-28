const task = require('../model/task')


const getAllTasks = async(req,res)=>{
const allTasks = await task.find({});
res.status(200).json(allTasks);

}

const createTask =async (req,res)=>{
   const newTask = await task.create(req.body);
   res.status(201).json(newTask);
    
    }
    
const getTaskById =async (req,res)=>{
  const {id:taskId} = req.params;
  const singleTask = await task.findOne({_id:taskId});
  if(!singleTask){
    return res.status(404).json({msg:'Task was not found!'})
  }
        res.status(200).json({singleTask});
    }

const updateTask =async (req,res)=>{
    const {id:taskId} = req.params;
  const singleTask = await task.findOneAndUpdate({_id:taskId},req.body,
    {new:true,runValidators:true});
  if(!singleTask){
    return res.status(404).json({msg:'Task was not found!'})
  }
    res.status(200).json({singleTask});
}
            
const deleteTask =async (req,res)=>{
   const {id:taskId} = req.params;
  const singleTask = await task.findOneAndDelete({_id:taskId});
  if(!singleTask){
    return res.status(404).json({msg:'Task was not found!'})
  }
    res.status(200).json({singleTask});
                
    }
                
                          



module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}