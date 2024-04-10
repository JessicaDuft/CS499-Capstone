



const express = require('express');
const router = express.Router();
const controller = require ('../controllers/sortUp');

router.get('/',controller.sortRoomsAsc);


module.exports = router;