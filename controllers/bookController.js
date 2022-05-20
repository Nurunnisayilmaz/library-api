

const allBooks = async (req, res) => {
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const bookDetails = async (req, res) =>{
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const addNewBook = async (req, res) =>{
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports = {allBooks,bookDetails,addNewBook}