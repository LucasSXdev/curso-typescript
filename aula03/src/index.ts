function sendSpaceship(name:string,captain:string){
    const spaceship ={
        name,
        captain,
        speed:20,
        inMission:true,
        crew:[],
    }

    alert(`a nave ${spaceship.name} comandada pelo capitão ${spaceship.captain}, foi enviada em missão!`)

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
const spaceshipCaptain = prompt('insira o nome do capitão da nave a ser envidada')

const currentSpaceShip = sendSpaceship(spaceshipName,spaceshipCaptain)
const currentSpeed = parseInt(prompt(`informe a velocidade atual da sua nave`))

acelerate(currentSpeed,currentSpaceShip)

