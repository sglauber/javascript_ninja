/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const arr = [1,2,3,4,5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const foo = (arr) => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
foo(arr)[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const bar = (arr, n) => arr[n];
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
const arr2 = ["a", true, 1, 1.5, {a: 1}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
foo(arr2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = (nome) => {
  const obj = {
		'Livro Um': {
			quantidadeDePaginas: 100,
			autor: 'Glauber',
			editora: 'teste 1'
		},
		'Livro Dois': {
			quantidadeDePaginas: 200,
			autor: 'Glauber 2',
			editora: 'Teste 2'
		},
		'Livro Tres': {
			quantidadeDePaginas: 300,
			autor: 'Glauber 3',
			editora: 'Teste 3'
		}
	}
	return nome ? obj[nome] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(book("Livro Um")["quantidadeDePaginas"])

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(book("Livro Dois")["autor"])

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(book("Livro Tres")["editora"])
