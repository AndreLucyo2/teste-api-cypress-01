import * as PUTBooks from '../requests/PUTBooks.request.JS'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {

    //----------------------------------------------------
    it.only('Alterar um livro', () => {
        //Obtem os livros antes de alterar:
        GETBooks.allBooks().then((resAllBooks) => {

            //cy.log(resAllBooks.body[0].id)
            //obtem a lista de livros e deleta o primreiro da lista: obtem o id e passa como parametro
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                //Espera uma resposta 200 de sucesso:
                expect(resChangeBook.status).to.equal(200);
                //Testa para nao ter o body null:
                expect(resChangeBook.body).to.be.not.null;
                //Espera que o titulo do livro seje alterado, teste se o titulo foi alterado mesmo:
                expect(resChangeBook.body.title).to.eq('Vingador do Futuro');
            })
        })

    });

    //----------------------------------------------------
    it('Cria e Alterar um Livro', () => {

        //cria o livro: ja obtem o registro criado.
        POSTBooks.addBook().then((resAddBook) => {

            //Alterar o livro criado, pelo ID retornado:
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                //Espera uma resposta 200 de sucesso:
                expect(resChangeBook.status).to.equal(200);
                //Testa para nao ter o body null:
                expect(resChangeBook.body).to.be.not.null;
                //Espera que o titulo do livro seje alterado, teste se o titulo foi alterado mesmo:
                expect(resChangeBook.body.title).to.be('Vingador do Futuro');
            })
        })

    });

});