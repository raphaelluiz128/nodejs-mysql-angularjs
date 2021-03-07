const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const tasksRoutes = require('./routes/tasks');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 
    'Origin, Content-Type, Accept, Authorization');
    
if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'DELETE', 'GET')
    return res.status(200).send({});
}
    next();
});

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