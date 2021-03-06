const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({

    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        
    });
});

router.put('/', (req, res, next) => {
    res.status(201).send({
        
    });
});

module.exports = router;