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
    phoneNumber: {
        type: Number,
        required:[true,'Please provide a Telephone Number']
       
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
       
      },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide an User']
        
    },
},{timestamps:true})


module.exports = mongoose.model('Task',TaskSchema)