import * as DELETEBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('DELETE Books', () => {

    //----------------------------------------------------
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

    //----------------------------------------------------
    it('Cria e exlui o Livro', () => {

        //cria o livro:
        POSTBooks.addBook().then((resAddBokk) => {

            cy.log('Id:' + resAddBokk.body.id)
            cy.log('Titulo:' + resAddBokk.body.title)

            //Deleta o livro criado, pelo ID retornado:
            DELETEBooks.deleteBook(resAddBokk.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.equal(200);
            })
        })

    });

});