function sendSpaceship(name:string,captain:string,crewList:CrewMember[]){
    const spaceship ={
        name,
        captain,
        speed:20,
        inMission:true,
        crew:crewList,
    }

    let crewDetails = ""
    spaceship.crew.forEach(member =>{
        crewDetails += ` tripulante: ${member.name},
         idade: ${member.age},
         profissão: ${member.occupation}\n`
    })

    alert(`a nave ${spaceship.name} comandada pelo capitão ${spaceship.captain}, foi enviada em missão com a equipe de tripulantes com a seguinte equipe:${crewDetails}`)

    return spaceship
}

function acelerate(targetSpeed:number,spaceship:{name:string,speed:number}){
    if(spaceship.speed > targetSpeed){
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    }else if(spaceship.speed < targetSpeed){
        alert(`aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else{
        alert(`mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt(`insira o nome da nave a ser enviada`)
const spaceshipCaptain = prompt('insira o nome do capitão da nave a ser enviada')
interface CrewMember {
    name:string
    age:number
    occupation:string
}

const spaceshipCrew:CrewMember[]= [
    {name:"Jhon",age:22,occupation:"pilot"},
    {name:"Lucas",age:25,occupation:"doctor"},
    {name:"Maria",age:27,occupation:"chef"}
]

const currentSpaceShip = sendSpaceship(spaceshipName,spaceshipCaptain,spaceshipCrew)
const currentSpeed = parseInt(prompt(`informe a velocidade atual da sua nave`))

acelerate(currentSpeed,currentSpaceShip)

