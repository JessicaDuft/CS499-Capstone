const express = require('express');
const router = express.Router();
const controller = require('../controllers/sortUp');

router.get('/:roomCode?', controller.sortRoomsAsc);

router.get('/:roomCode?',controller.getRoomByCode);


module.exports = router;