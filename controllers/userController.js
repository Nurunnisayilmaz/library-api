const sql = require("../db.js");

const allUsers = async (req, res) => {
    try {
        const rows = await sql.promise().query( 'SELECT * FROM users' );
        return res.status(200).json({code: 200, data:rows[0]})
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const userDetails = async (req, res) =>{
    const id  = req.params.id;
    const query = `SELECT * FROM users WHERE idusers = ${id}`
    try {
        const rows = await sql.promise().query( query);
        console.log(rows);
        return res.status(200).json({code: 200, data:rows[0]})

    }catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const addNewUser = async (req, res) =>{
    const username = req.body.username
    const query = `INSERT INTO users (username) VALUES ("${username}")`
    try {
        const queryResult = await sql.promise().query( query);
        return res.status(201).json({code: 201, status:"Created"})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const borrowBook = async (req, res) =>{
    const idUser = req.params.idUser;
    const idBook = req.params.idBook;
    const query = `INSERT INTO borrowedBooks (user_id,book_id,borrowDate) VALUES (${idUser},${idBook},NOW())`
    try {
        const queryResult = await sql.promise().query( query);
        return res.status(201).json({code: 201, status:"Created"})
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const returnBook = async (req, res) =>{
    const idUser = req.params.idUser;
    const idBook = req.params.idBook;
    const score = req.body.score;

    //check book first if borrowed and borrowed by requested person.
    const result = await isTaken(idBook,idUser)
    if (!result)
        return res.status(500).json({code: 500, message: "There is no record that provides user borrowed that book please try again"})

    const query = `UPDATE borrowedBooks set score = ${score} , returnDate = NOW() WHERE  user_id = ${idUser} AND book_id = ${idBook}`
    try {
        const request = await sql.promise().query( query);
        return res.status(201).json({code: 201, status:"Created"})
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}


const isTaken = async (idBook,idUser) => {
    const query = `SELECT * FROM borrowedBooks WHERE book_id = ${idBook} AND user_id = ${idUser} AND returnDate is null`
    const request = await sql.promise().query(query);
    if (request[0].length > 0){
        return true;
    }
    return false;

}

module.exports ={allUsers,userDetails,addNewUser,borrowBook,returnBook}
