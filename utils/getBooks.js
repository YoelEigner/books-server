const { mongoClient } = require('../MongoDBConnect');
const db = mongoClient.db('books')
const collection = db.collection('books')

const getBooks = async () => {
    const books = await collection.find().toArray((err, books) => {
        if (err) {
            console.error('Failed to retrieve data from MongoDB:', err);
            return;
        }

        return (books)
    })
    return books
}
const getBookOfTheDay = async () => {
    const books = await getBooks();
    const today = new Date();
    const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );

    const bookIndex = dayOfYear % books.length;
    books[bookIndex].review = generateReview(books[bookIndex].title);
    return books[bookIndex];
}


const generateReview = (bookTitle) => {
    const reviewPhrases = [
        "A must-read!",
        "Highly recommended!",
        "A captivating story.",
        "An enjoyable read.",
        "Engaging and thought-provoking.",
        "I couldn't put it down.",
        "A delightful book.",
        "Well-written and entertaining.",
        "A great addition to your bookshelf.",
        "I loved every page."
    ];
    const randomIndex = Math.floor(Math.random() * reviewPhrases.length);
    const reviewPhrase = reviewPhrases[randomIndex];

    const review = `${reviewPhrase} ${bookTitle}`;
    return review;
}

module.exports = {
    getBooks,
    getBookOfTheDay
}