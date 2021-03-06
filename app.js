const express = require('express');
const app = express();

const usersRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);



module.exports = app;