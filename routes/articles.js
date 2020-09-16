const express = require('express');
const router = express.Router();

const articlesHandler = require('./handler/articles');

router.get('/', articlesHandler.getAll);

module.exports = router;