//video: https://youtu.be/rbObfNh2bno?t=3093
// Padrao de nome do arquivo:
// verbo / metodo - endpoin.motivo(request).extensão

/// <reference types="cypress"/>

//importa o arquivo .json com os dados do objeto
const payloadChangeBook = require('../payloads/change-book.json')

function changeBook(idBook) {

    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        //cabeçalho da requisição
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook

    })

}

export { changeBook }