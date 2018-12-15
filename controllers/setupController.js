var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){

        var starterTodos = [
            {
                username: 'test',
                todo: 'Read book',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn React Native',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });

}