/*a) Crie um objeto chamado "pessoa" com propriedades "nome", "idade" e "profissão".

b) Adicione uma nova propriedade chamada "cidade" ao objeto "pessoa" e atribua a ela o nome de sua cidade.

c) Escreva uma função que receba um objeto do tipo "pessoa" como parâmetro e imprima todas as suas propriedades.
*/

type Pessoa = {
    nome:string,
    idade:number,
    profissao:string
}




function imprimirPropriedades(p:Pessoa){
    p.nome = "Lucas"
    p.idade = 26
    p.profissao = "programador"

    return(
        console.log(
            `O nome da pessoa é : ${p.nome}\n`
        +`A idade da pessoa é: ${p.idade}\n`
        +`A profissão da pessoa é: ${p.profissao}`
    )
    
    )
}

imprimirPropriedades(Pessoa)


