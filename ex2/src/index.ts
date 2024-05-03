
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

function updateSituation(situation:planetSituation,planet:planet){
    planet.situation = situation
    
    alert(`A situação do planeta${planet.name} foi atualizada`)
}

function addSatellite(name:string,planet:planet){
    planet.satellites.push[name]
    alert(`o satelite${name}foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite(name:string,planet:planet){
    planet.satellites = planet.satellites.filter(satellite=> satellite !== name)
    alert(`O satelite ${name} foi removido do planeta ${planet.name}`)
}


function validSituation(){
    let situation :planetSituation
    let validSituation = false

    while(!validSituation){
        let situatuionInput = prompt('informe a situação atual do planeta:\n1-Habitado-\n2-Habitável-\n3-Inabitável-\n4-Inexplorado')
        
        switch(situatuionInput){
            case '1':
                situation = 'Habitado'
                validSituation = true
                break
            case '2':
                situation = 'Habitável'
                validSituation = true
                break
            case '3':
                situation = 'Inabitável'
                validSituation = true
                break
            case '4':
                situation = 'inexplorado'
                validSituation = true
                break
            default:
                alert('Opção inválida')
                break
        }
        return situation
    }
}

function validPlanet(calbackfn:(planet:planet)=>void){
    const planetName = prompt('informe o nome do planeta')
    const planet = findPlanet(planetName)

    if(planet){
        calbackfn(planet)
    }else{
        alert('planeta não encontrado, retornando para o menu...')
    }
}

function firtMenuOption(){
    const name = prompt('informe o nome do planeta')
    const cordinateA = Number(prompt('informe a cordenada A'))
    const cordinateB = Number(prompt('informe a cordenada B'))
    const cordinateC = Number(prompt('informe a cordenada c'))
    const cordinateD = Number(prompt('informe a cordenada D'))

    const situation = validSituation()

    const confirmation = confirm(`confirma o registro do planeta ${name}?
    Cordernadas: (${cordinateA},${cordinateB},${cordinateC},${cordinateD})
    Situation:${situation}`)
}


function secondMenuOption(){
    validPlanet(planet =>{
        const situation = validSituation()
        updateSituation(situation, planet)
    })
}

function thirdMenuOption(){
    validPlanet(planet=>{
        const satelitte = prompt('informe o nome do satellite a ser adicionado')
        addSatellite(satelitte, planet)
    })
}

function fourthMenuOption(){
    validPlanet(planet=>{
        const satellite = prompt('informe o nome do satelite a ser removido')
        removeSatellite(satellite, planet)
    })
}

function fifthMenuOption() {
    let list = 'Planetas\n'

    planets.forEach(planet=>{
        const [a,b,c,d]=planet.cordinates

        list +=`
        Nome:${planet.name}
        Cordenadas:${planet.cordinates}
        Situação:${planet.situation}
        Satelites:${planet.satellites.length}`

        planet.satellites.forEach(satelitte=>{
            list+=`-   ${satelitte}\n`
        })

        alert('list')
    })
}

let option = 0

while(option !== 6){
    const menu = `Menu
    1-Registrar planeta
    2-Atualizar situação
    3-Adicionar um satelite ao planeta
    4-Remover satelite do planeta
    5-Listar todos o planetas
    6-Sair
    `

    option = Number((prompt(menu)))

    switch(option){
        case 1 :
            firtMenuOption()
            break
        case 2 :
            secondMenuOption()
            break
        case 3 :
            thirdMenuOption()
            break
        case 4 :
            fourthMenuOption()
            break
        case 5 : 
            fifthMenuOption()
            break
        case 6 :
            alert('encerrando o sistema!')
            break
        default :
            alert('Opção inválida!Voltando para o painel principal')
    }
}