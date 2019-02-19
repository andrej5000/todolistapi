'use strict';

module.exports = function (app) {

    const todoList = require('../controllers/todoListController');

    // todoList routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_task);

    app.route('/task/:taskId')
        .get(todoList.read_task)
        .put(todoList.update_task)
        .delete(todoList.delete_task);
};
