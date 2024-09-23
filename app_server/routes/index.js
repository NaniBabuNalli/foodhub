// var express = require('express');
// var router = express.Router();
// const homepageController = (req, res) => {
//   res.render('index', { title: 'Express' });
// };
// /* GET homepage. */
// router.get('/', homepageController);
// module.exports = router;

const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main'); /* GET homepage. */
router.get('/', ctrlMain.index);
module.exports = router;