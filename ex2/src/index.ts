
type planetSituation = 'Habitado'|'Habitável'|'Inabitável'|'inexplorado'
type planetCordinates =[number,number,number,number]
type planet = {
    name:string,
    cordinates:planetCordinates,
    situation:planetSituation,
    satellites:string[]
}
const planets : planet []=[]

function createPlanet(name:string,cordinates:planetCordinates,situation:planetSituation){
    
    planets.push({
        name,
        cordinates,
        situation,
        satellites:[]
    })

    alert(`O planeta ${name} foi adicionado com sucesso`)

}


function findPlanet(name:string){
    const planet = planets.find(plan=> plan.name === name)
    return planet
}

function updatePlanet(situation:planetSituation,planet:planet){
    planet.situation = situation
    
    alert(`A situação do planeta${planet.name} foi atualizada`)
}

function addSatellite(name,planet:planet){
    planet.satellites.push[name]
    alert(`o satelite${name}foi adicionado ao planeta ${planet.name}`)
}

