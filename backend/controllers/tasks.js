const Task = require('../models/Task')

const {
    StatusCodes
} = require('http-status-codes')
const {
    BadRequestError,
    NotFoundError
} = require('../errors')

const createTask = async (req, res) => {
    req.body.createdBy = req.userTokenData.userId
    const task = await Task.create(req.body)
    res.status(StatusCodes.CREATED).json({
        task
    })

}

const getAllTasks = async (req, res) => {
    const allTasks = await Task.find({
        createdBy: req.userTokenData.userId
    })
    res.status(StatusCodes.CREATED).json(allTasks)
}

const getSingleTask = async (req, res) => {


    const {
        id
    } = req.params
    const {
        userId
    } = req.userTokenData
    console.log(id)
    const newTask = await Task.findOne({
      
        _id: id,
        createdBy: userId,
    });

    if (!newTask) {
        throw new NotFoundError(`No task found with this ID: ${id}`)
    }
    res.status(StatusCodes.OK).json(newTask)


}

const updateTask = async (req, res) => {
 const {id} = req.params
 const {userId} = req.userTokenData
 const {taskTitle,TaskDesk,TaskStatus} = req.body


 
 const updatedTask = await Task.findOneAndUpdate(
    { _id: id, createdBy: userId }, // Condições de pesquisa
    req.body, // Dados a serem atualizados
    { new: true, runValidators: true } // Opções de configuração
    )

    if(!updatedTask) {
        throw new NotFoundError(`No task found with this ID: ${id}`)
    }
    res.status(StatusCodes.CREATED).json(updatedTask)

}

const deleteTask = async (req, res) => {
    const {id} = req.params
    const {userId} =   req.userTokenData 
   
    const taskDelete = await Task.findOneAndRemove({_id:id,createdBy:userId})

    if(!taskDelete) {
        throw new NotFoundError(`No task found with this ID: ${id}`)
    }
    res.status(StatusCodes.CREATED).json(taskDelete)



}

module.exports = {
    createTask,
    getAllTasks,
    getSingleTask,
    updateTask,
    deleteTask
}