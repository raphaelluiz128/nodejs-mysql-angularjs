const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const tasksRoutes = require('./routes/tasks');
app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



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