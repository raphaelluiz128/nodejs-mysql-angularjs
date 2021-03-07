const express =  require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.get);
router.post('/', tasksController.create);
router.put('/:id', tasksController.update);
//router.put('/', tasksController.update);


module.exports = router;