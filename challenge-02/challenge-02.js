// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const soma = (a,b) => a + b;

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const a = soma(5,10);

// Qual o valor atualizado dessa variável?
//15

// Declare uma nova variável, sem valor.
let nova_var;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const addValor = (a) => a = "VALOR";

// Invoque a função criada acima.
addValor(nova_var);

// Qual o retorno da função? (Use comentários de bloco).
/*
  Ela irá retornar "VALOR"
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
  Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

const multiplica = (a,b,c) => {
  if(!a || !b || !c){
    return "Preencha todos os valores corretamente!";
  }
  return (a * b * c) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 
  Preencha todos os valores corretamente!
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(5,5,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
127
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

const foo = (a, b, c) => {
  if(!a && !b && !c){
    return false;
  }
  if(!b && !c){
    return a;
  }else if(a && b && !c){
    return soma(a,b);
  }else if(a && b && c){
    return soma(a,b) / c;
  }
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
foo(4);
foo(4,3);
foo(4,3,2);
foo();