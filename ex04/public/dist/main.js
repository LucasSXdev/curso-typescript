/*a) Crie um objeto chamado "pessoa" com propriedades "nome", "idade" e "profissão".

b) Adicione uma nova propriedade chamada "cidade" ao objeto "pessoa" e atribua a ela o nome de sua cidade.

c) Escreva uma função que receba um objeto do tipo "pessoa" como parâmetro e imprima todas as suas propriedades.
*/
function imprimirPropriedades(p) {
    p.nome = "Lucas";
    p.idade = 26;
    p.profissao = "programador";
    return (console.log("O nome da pessoa \u00E9 : ".concat(p.nome, "\n")
        + "A idade da pessoa \u00E9: ".concat(p.idade, "\n")
        + "A profiss\u00E3o da pessoa \u00E9: ".concat(p.profissao)));
}
console.log(imprimirPropriedades);
