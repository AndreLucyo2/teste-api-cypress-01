/// <reference types="cypress"/>

//importa o arquivo .json com o 
const payloadAddBook = require('../payloads/add-book.json')

function addBook() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBook }