let crew:String[]

function setSpaceship(spaceship:{name:string,pilot:string,crewLimit:number,crew:String[],inMission:Boolean}) {
    
    return spaceship
}

let spaceship = setSpaceship({ name: 'Lucas', pilot: 'hans solo', crewLimit: 5, crew: [], inMission: false });

function addCrewMember(member:string){
    if(spaceship.crew.length < spaceship.crewLimit){
        spaceship.crew.push(member)
    }
}

console.log(spaceship)
addCrewMember('maria')
console.log(spaceship)