const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');




const auth = jwt({
    secret: process.env.JWT_SECRET,
    
    userProperty: 'payload',
    algorithms: ['HS256']
});



const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const roomsController= require('../controllers/rooms')

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
    
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post( tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put( tripsController.tripsUpdateTrip);


    router
    .route('/rooms')
    .get(roomsController.getAllRooms)
    .post(auth, roomsController.roomsAddRoom);

    
    router
    .route('/rooms/:roomCode')
    .get(roomsController.getRoomByCode)
    .put(auth, roomsController.roomsUpdateRoom);

    

module.exports = router;