const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        
    });
});

router.post('/', (req, res, next) => {
    const task = {
        user: req.body.user,
        email: req.body.email,
        description: req.body.description,
        status: req.body.status,   
    };
    res.status(201).send({   
    });
});

router.put('/:id', (req, res, next) => {
    res.status(201).send({
        
    });
});

module.exports = router;