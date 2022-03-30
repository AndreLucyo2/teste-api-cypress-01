
//importa a função:
import * as POSTBooks from '../requests/POSTBooks.request'

context('POST Books', () => {

    it('Adicionar um novo livro', () => {
        //Metodo post:
        POSTBooks.addBook().should((response) => {

            //teste01: Espera 200 de retorno ao fazer post: 
            expect(response.status).to.eq(200);
            //Teste 02: o corpo da resposta nao pode ser null
            expect(response.body.title).to.eq("Alien");

        })
    });

    //https://youtu.be/rbObfNh2bno?t=2889 dar comtinuidade

});