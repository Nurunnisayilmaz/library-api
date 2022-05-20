

const allUsers = async (req, res) => {
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const userDetails = async (req, res) =>{
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const addNewUser = async (req, res) =>{
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const borrowBook = async (req, res) =>{
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const returnBook = async (req, res) =>{
    try {

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports ={allUsers,userDetails,addNewUser,borrowBook,returnBook}
