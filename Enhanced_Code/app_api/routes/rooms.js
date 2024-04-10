const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');
const { expressjwt: jwt } = require('express-jwt');


const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:roomCode?', controller.getAllRooms);
router.get('/:roomCode?', controller.getAllRoomsTEST);

router.get('/:roomCode?',controller.getRoomByCode);
router.post('/', auth, controller.addRoom);
router.put('/:roomCode',auth,  controller.updateRoom);
router.delete('/:roomCode', auth, controller.deleteRoom);


module.exports = router;