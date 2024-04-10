



const express = require('express');
const router = express.Router();
const controller = require ('../controllers/sortDown');

router.get('/',controller.sortRoomsDesc);


module.exports = router;