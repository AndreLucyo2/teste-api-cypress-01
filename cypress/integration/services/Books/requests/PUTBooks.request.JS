//video: https://youtu.be/rbObfNh2bno?t=3093
// Padrao de nome do arquivo:
// verbo / metodo - endpoin.motivo(request).extensão

/// <reference types="cypress"/>

function changeBook(idBook) {

    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        //cabeçalho da requisição
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,

        //https://youtu.be/rbObfNh2bno?t=3952 ---- parei aqui: 
    })

}

export { changeBook }