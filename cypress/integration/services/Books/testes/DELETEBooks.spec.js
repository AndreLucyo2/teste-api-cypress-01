import * as DELETEBooks from '../requests/DELETEBooks.request'

//obtem os books antes de deletar:
import * as GETBooks from '../requests/GETBooks.request'

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        //Obtem os livros antes de deletar:
        GETBooks.allBooks().then((resAllBooks) => {

            //cy.log(resAllBooks.body[0].id)
            //obtem a lista de livros e deleta o primreiro da lista: obtem o id e passa como parametro
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBooks) => {
                //Espera uma resposta 200 de sucesso:
                expect(resDeleteBooks.status).to.equal(200);
            })
        })

    });

});