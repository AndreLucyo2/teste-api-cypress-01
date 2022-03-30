//video: https://youtu.be/rbObfNh2bno?t=3093
// Padrao de nome do arquivo:
// verbo / metodo - endpoin.motivo(request).extensão

/// <reference types="cypress"/>

function deleteBook(idBook) {

    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false,
    })

}

export { deleteBook }

