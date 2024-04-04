var express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', controller.travelList);


module.exports = router;