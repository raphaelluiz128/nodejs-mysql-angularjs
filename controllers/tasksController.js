const mysql = require('../mysql').pool;

exports.create = async (req, res, next) => {
    try {
        console.log('entrou')
    const task = {
        responsible: req.body.responsible,
        responsibleEmail: req.body.responsibleEmail,
        description: req.body.description,
        status: req.body.status,   
    };
   
    mysql.getConnection((error, conn) => {
        conn.query('INSERT INTO tasks (responsible, responsibleEmail, description, status, comeToPending) values (?,?,?,?)',
         [task.responsible,task.responsibleEmail,task.description,task.status, 0], (error, result, field) => {
             conn.release();
             if(error){
                return res.status(500).send({
                     error: error,
                     response: null
                 });
             }
                let dataTask = {id: result.insertId, responsibleEmail: task.responsibleEmail, 
                    responsible: task.responsible, description: task.description, status: task.status };
                return res.status(201).send({  
                 message: 'Tarefa criada com sucesso',
                 idTask: result.insertId,
                 dataTask: dataTask 
            });

         });
    });
  
} catch (error) {
    return res.status(500).send({ error: error });
}
};
  

exports.update = async (req, res, next) => {
    try {
    const task = {
        responsible: req.body.name,
        responsibleEmail: req.body.email,
        description: req.body.description,
        status: req.body.status,   
    };
   
    mysql.getConnection((error, conn) => {
        conn.query('UPDATE tasks SET responsible = ?, responsibleEmail = ?, description = ?, status = ? comeToPedingwhere id = ?',
         [task.responsible,task.responsibleEmail,task.description,task.status, task.comeToPeding, req.params.id], (error, result, field) => {
             conn.release();
             if(error){
                return res.status(500).send({
                     error: error,
                     response: null
                 });
             }
                return res.status(200).send({  
                 message: 'Tarefa alterada com sucesso',
                 dataTask: task,
                 idTask:  req.params.id
            });

         }
        )
    });
  
} catch (error) {
    return res.status(500).send({ error: error });
}
};


exports.get = async (req, res, next) => {
    try {

    mysql.getConnection((error, conn) => {
        conn.query('SELECT * FROM tasks',
         [], (error, result, field) => {
             conn.release();
             if(error){
                return res.status(500).send({
                     error: error,
                     response: null
                 });
             }
                return res.status(200).send({  
                 message: 'Tarefas retornadas com sucesso',
                 dataTask: result
            });

         }
        )
    });
  
} catch (error) {
    return res.status(500).send({ error: error });
}
};

