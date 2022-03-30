//importa a função:
import * as GETBooks from '../requests/GETBooks.request'

describe('GETBooks', () => {
    it('Listar todos os livros', () => {
        GETBooks.allBooks().should((response) => {

            //log --------------------------------------------------
            cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body)

            //teste01: Espera 200 de retorno: 
            expect(response.status).to.equal(200);
            //Teste 02: o corpo da resposta nao pode ser null
            expect(response.body).to.be.not.null;

        })
    });
});    