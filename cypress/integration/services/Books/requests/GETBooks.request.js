
//video: https://youtu.be/rbObfNh2bno
// Padrao de nome do arquivo:
// verbo / metodo - endpoin.motivo(request).extensão

/// <reference types="cypress"/>

function allBooks() {

    // cy.request - cliente http
    return cy.request({
        method: 'GET',
        url: '/Books',
        failOnStatusCode: false,
    })
}
//exporta a função des arquivo
export { allBooks };