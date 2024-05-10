/*uma interface é utilizada mais para objetos
/*Tem algumas diferenças do type
//tem uma estrutura parecida com uma classe
//não implementa nada, serve apenas para definir os tipos dentro dela


/*sintaxe:*/

interface CelestialBody {
    name:string,
    mass:number
}

interface planet extends CelestialBody{
    population:number,
    createSatellite:(name:string)=>void
    
}

interface star extends CelestialBody{
    age:number,
    planets:[]
}

let sun:star

sun.name = "Sol"
sun.age = 20


//Implementando interfaces em classes:

class milkyWayPlanet implements planet{
    name:string
    mass:number
    population:number

    constructor(name:string,mass:number,population:number){
        this.name = name,
        this.mass = mass,
        this.population = population
    }

    createSatellite: (name: string) => {
        //......
    };
}
