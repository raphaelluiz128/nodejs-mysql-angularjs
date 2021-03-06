const express = require('express');
const app = express();

const usersRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
});

app.use((error, req, res ,next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;