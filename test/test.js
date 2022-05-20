'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = require('chai').expect;
const server = require('../app');

const {allUsers,
    userDetails,
    erorUserDetails,
    fakeUser,
    erorUser,
    borrowBook,
    erorBorrowBook,
    returnBook,
    erorReturnBook,
    allBooks,
    bookDetails,
    erorBookDetails,
    fakeBook,
    erorBook} = require('./testData');

chai.should();
chai.use(chaiHttp);

describe("API TEST", () => {

    /*
     * Test the add all users
     */
    describe("GET /", () => {
        it("It should GET users", (done) => {
            const users = allUsers
            chai.request(server)
                .get("/users")
                .send(users)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.allUsers.should.be.a('array');
                    response.body.should.have.property('status');
                    expect(response.body.status).to.equal("OK");
                    done();
                });
        });

    });


    /*
       * Test the user details
       */
    describe("GET /", () => {
        it("It should GET  user", (done) => {
            chai.request(server)
                .get("/users/" + userDetails.existedId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.userDetails.should.be.a('array');
                    response.body.should.have.property('code');
                    response.body.should.have.property('success');
                    response.body.should.have.property('message');
                    expect(response.body.code).to.equal(200);
                    expect(response.body.status).to.equal("OK");

                    done();
                });
        });
        it("It should not GET ", (done) => {
            chai.request(server)
                .get("/users/" + erorUserDetails.existedId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('code');
                    response.body.should.have.property('message');
                    response.body.should.have.property('error');
                    expect(response.body.code).to.equal(404);
                    expect(response.body.message).to.equal("Not Found");
                    done();
                });
        });
    });


    /*
     * Test the add new user
     */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const user = fakeUser
            chai.request(server)
                .post("/users")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201);
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const user = erorUser
            chai.request(server)
                .post("/users")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
    * Test the borrow book
    */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const book = borrowBook
            chai.request(server)
                .post("/users/" + borrowBook.existedId+"/borrow"+borrowBook.existedId2)
                .send(book)
                .end((err, response) => {
                    response.should.have.status(204);
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const book = erorBorrowBook
            chai.request(server)
                .post("/users/" + erorBorrowBook.existedId+"/borrow"+erorBorrowBook.existedId2)
                .send(book)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
       * Test the return book
       */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const book = returnBook
            chai.request(server)
                .post("/users/" + borrowBook.existedId+"/return"+borrowBook.existedId2)
                .send(book)
                .end((err, response) => {
                    response.should.have.status(204);
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const book = erorReturnBook
            chai.request(server)
                .post("/users/" + erorReturnBook.existedId+"/borrow"+erorReturnBook.existedId2)
                .send(book)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });


    /*
    * Test the add all books
    */
    describe("GET /", () => {
        it("It should GET users", (done) => {
            const books = allBooks
            chai.request(server)
                .get("/books")
                .send(books)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.allBooks.should.be.a('array');
                    response.body.should.have.property('status');
                    expect(response.body.status).to.equal("OK");
                    done();
                });
        });

    });


    /*
       * Test the book details
       */
    describe("GET /", () => {
        it("It should GET  user", (done) => {
            chai.request(server)
                .get("/books/" + bookDetails.existedId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.bookDetails.should.be.a('array');
                    response.body.should.have.property('code');
                    response.body.should.have.property('success');
                    response.body.should.have.property('message');
                    expect(response.body.code).to.equal(200);
                    expect(response.body.status).to.equal("OK");

                    done();
                });
        });
        it("It should not GET ", (done) => {
            chai.request(server)
                .get("/books/" + erorBookDetails.existedId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('code');
                    response.body.should.have.property('message');
                    response.body.should.have.property('error');
                    expect(response.body.code).to.equal(404);
                    expect(response.body.message).to.equal("Not Found");
                    done();
                });
        });
    });


    /*
     * Test the add new book
     */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const book = fakeBook
            chai.request(server)
                .post("/books")
                .send(book)
                .end((err, response) => {
                    response.should.have.status(201);
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const book = erorBook
            chai.request(server)
                .post("/books")
                .send(book)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });


})