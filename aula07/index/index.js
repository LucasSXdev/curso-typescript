/*uma interface é utilizada mais para objetos
/*Tem algumas diferenças do type
//tem uma estrutura parecida com uma classe
//não implementa nada, serve apenas para definir os tipos dentro dela


/*sintaxe:*/
var sun;
sun.name = "Sol";
sun.age = 20;
//Implementando interfaces em classes:
var milkyWayPlanet = /** @class */ (function () {
    function milkyWayPlanet(name, mass, population) {
        this.name = name,
            this.mass = mass,
            this.population = population;
    }
    return milkyWayPlanet;
}());
