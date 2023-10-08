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
    res.json(allTasks)
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
    res.send(newTask)


}

const updateTask = async (req, res) => {
    res.send('update task')

}

const deleteTask = async (req, res) => {
    res.send('delete task')

}

module.exports = {
    createTask,
    getAllTasks,
    getSingleTask,
    updateTask,
    deleteTask
}