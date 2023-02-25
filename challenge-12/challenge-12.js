(function() {/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
const person = {
  name: "Glauber",
  lastname: "Santana",
  weight: 15,
}
for (prop in person){
  console.log(`Propriedades de "person": ${prop}`);
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
let books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
const book1 = {
  name: "Harry Potter e A Camera Kodak",
  pages: "1"
}

const book2 = {
  name: "Harry Potter e as trancas do careca",
  pages: "2"
}

const book3 = {
  name: "Harry Potter - A volta dos que nao foram",
  pages: "3"
}

books.push(book1, book2, book3);

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log(Object.entries(books));

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
let myName = ['G','L','A','U','B','E','R']
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
let nameStr = myName.join('');
console.log(nameStr);

console.log( '\nMeu nome invertido é:' );
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
nameStr = myName.reverse().join('');
console.log(nameStr);

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
nameStr = [nameStr].sort().join('');
console.log(nameStr)
})();
