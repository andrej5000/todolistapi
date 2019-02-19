'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');


exports.list_all_tasks = function (request, response) {

    Task.find({}, function (error, task) {

        handleError(error);

        response.json(task);
    })
};


exports.create_task = function (request, response) {

    const new_task = new Task(request.body);

    new_task.save(function (error, task) {

        handleError(error);

        response.json(task);
    })
};


exports.read_task = function (request, response) {

    Task.findById(request.params.taskId, function (error, task) {

        handleError(error);

        response.json(task);
    });
};


exports.update_task = function (request, response) {

    Task.findOneAndUpdate(
        {_id: request.params.taskId},
        request.body,
        {new: true},
        function (error, task) {

            handleError(error);

            response.json(task);
        }
    );
};


exports.delete_task = function (request, response) {

    let taskName = '';

    Task.findById(request.params.taskId, function (error, task) {

        handleError(error);

        taskName = task.name;
    });

    Task.remove(
        {_id: request.params.taskId},
        function (error, task) {

            handleError(error);

            response.json({
                message: 'Task ´' + taskName + '´ successfully deleted'
            });
        }
    )
};


const handleError = function (error, response) {

    if (error) {
        response.send(error);
    }
};
