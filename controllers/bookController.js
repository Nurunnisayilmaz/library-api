const sql = require("../db.js");

const allBooks = async (req, res) => {
    try {
        const rows = await sql.promise().query( 'SELECT * FROM books' );
        return res.status(200).json({code: 200, data:rows[0]})
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const bookDetails = async (req, res) =>{
    const id  = req.params.id;
    const query = `SELECT * FROM books WHERE idbooks = ${id}`
    const averageScore = `SELECT AVG(SCORE) FROM borrowedBooks where book_id = ${id}`

    try {
        const rows = await sql.promise().query( query);
        const average = await sql.promise().query( averageScore);
        rows[0][0].score = average[0][0]['AVG(SCORE)']
        return res.status(200).json({code: 200, data:rows[0]})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const addNewBook = async (req, res) =>{
    const bookname = req.body.name
    const query = `INSERT INTO books (name) VALUES ("${bookname}")`
    try {
        const queryResult = await sql.promise().query( query);
        return res.status(201).json({code: 204, status:"No content"})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports = {allBooks,bookDetails,addNewBook}