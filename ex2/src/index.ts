let planets = []

function createPlanet(name:string,coordinates:[number,number,number,number],situation:"Habitado"|"Habitável"|"inabitavel"|"Inexplorado",satellite:string[]){
    const planet = {
        name,
        coordinates,
        situation,
        satellite:[]
    }

    planets.push(planet)

    alert(`O planeta ${planet.name} foi adicionado`)

}

function updatePlanet(){
    
}