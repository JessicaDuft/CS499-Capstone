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
const roomsController= require('../controllers/rooms');
const sortRoomsController= require('../controllers/sortUp');
const sortDownRoomsController= require('../controllers/sortdown');




router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
    
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth,  tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth,  tripsController.tripsUpdateTrip);

    router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .delete(auth, tripsController.tripsDeleteTrip);

    


    router
    .route('/rooms')
    .get(roomsController.getAllRooms)
    .post( roomsController.roomsAddRoom);

   

    router
    .route('/sortUp')
    .get(sortRoomsController.sortRoomsAsc);
    

    router
    .route('/sortUp/:roomCode')
    .get(sortRoomsController.sortRoomsAsc);



    router
    .route('/sortDown')
    .get(sortDownRoomsController.sortRoomsDesc);
    

    router
    .route('/sortDown/:roomCode')
    .get(sortDownRoomsController.sortRoomsDesc);
    
    


    router
    .route('/rooms/:roomCode')
    .get(roomsController.getRoomByCode)
    .put(roomsController.roomsUpdateRoom);


    router
    .route('/rooms/:roomCode')
    .get(roomsController.getRoomByCode)
    .delete( roomsController.roomsDeleteRoom);

    

    

module.exports = router;