const express = require('express');
const router = express.Router();
const controller = require('../controllers/sortdown');

router.get('/:roomCode?', controller.sortRoomsDesc);

router.get('/:roomCode?',controller.getRoomByCode);


module.exports = router;