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
    try {
        const rows = await sql.promise().query( query);
        console.log(rows);
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
        return res.status(201).json({code: 201, status:"Created"})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports = {allBooks,bookDetails,addNewBook}