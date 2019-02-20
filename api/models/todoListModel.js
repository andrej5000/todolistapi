'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({

    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: [
            'pending',
            'ongoing',
            'completed'
        ],
        default: 'pending'
    }
});


module.exports = mongoose.model('Tasks', TaskSchema);

/*
const Task = require('./todoListModel');
var task = new Task({ name: 'Tutti', status: 'ongoing' });
console.log(task.save());
*/
