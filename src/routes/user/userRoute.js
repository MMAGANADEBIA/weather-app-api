const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const router = express.Router();

const { index } = require('../../controllers/user.js');

router.get('/', index);

module.exports = router;
