//Tipo literal
//Quando criamos um tipo específico para alguma variável

let literal : "Hello, world"//criamos um tipo chamado hello world

//------------------------------------------------------------------------------
//Union types
//utiliza essa barra | para o operador de comparaçao "ou":
let option : 'yes' | 'no'

//Poderíamos criar uma variável com vários tipo de opções:
let Planet:'terra'|'marte'|'Vênus'|'mercúrio'

//podemos criar o nosso próprio tipo:
//dessa forma podemos reaprovetar o tipo e reutilizar em vários lugares

type Planet='terra'|'marte'|'Vênus'|'mercúrio'

let planet:Planet

if(planet === 'terra'){
    console.log('estamos na terra')
}




