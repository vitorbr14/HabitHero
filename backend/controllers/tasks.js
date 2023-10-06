

const createTask = async (req, res) => {
    res.send(req.userTokenData)

  }
  
  const getAllTasks = async (req, res) => {
    res.send('All tasks')

  }

  const getSingleTask = async (req, res) => {
    res.send('single Task')

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