const express = require('express');
const { getBooks, getBookOfTheDay } = require('../utils/getBooks');

const router = express.Router();


router.get('/books', async (req, res) => {
    try {
        let books = await getBooks()
        res.json(books);
    } catch (error) {
        res.sendStatus(500)
    }
});
router.get('/bookofday', async (req, res) => {
    try {
        let book = await getBookOfTheDay()
        res.json(book);
    } catch (error) {
        res.sendStatus(500)
    }
});

module.exports = router;

