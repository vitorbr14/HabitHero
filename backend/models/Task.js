const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required:[true, 'Please provida the task name'],
        maxlength:50
    },
    taskDesc: {
        type: String,
        maxlength:150
    },
    taskStatus: {
        type: String,
        enum:['completed', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide an User']
        
    },
},{timestamps:true})


module.exports = mongoose.model('Task',TaskSchema)