const express = require('express');
const router = express.Router();

const booksHandler = require('./handler/books');

router.get('/hardcovers', booksHandler.getAllHardcover);
router.get('/e-books', booksHandler.getAllEbook);

module.exports = router;