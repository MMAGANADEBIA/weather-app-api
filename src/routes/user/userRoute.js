const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const router = express.Router();

const { getLocation, index } = require('../../controllers/user.js');

router.get('/', getLocation);
router.post('/index', urlencodedParser, index);

module.exports = router;
