let spaceships=[]

function setSpaceship(name:string,pilot:string,crewLimit:number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew:[],
        inMission:Boolean
    }

    spaceships.push(spaceship)
    alert(`A nave ${spaceship.name} foi registrada!`)
}

function findSpaceship(name:string){
    let spaceship : {
    name:string,
    pilot:string,
    crewLimit:number,
    crew:string[],
    inMission:Boolean
    }

    spaceship = spaceships.find(ship=> ship.name === name)

    return spaceship
}




function addCrewMember(member:string,spaceship:{name:string,crewLimit:number,crew:string[]}){
    if(spaceship.crew.length >= spaceship.crewLimit){
        alert('limite atingido')
    }

    spaceship.crew.push(member)
    alert(`Foi adiciondo a ${spaceship.name} um novo tripulante!`)

}

function sendSpaceShip(spaceship:{name:string,crewLimit:number,crew:string[],inMission:Boolean}){
    if(spaceship.inMission){
        alert(`${spaceship.name} já se encontra em missão`)
    }else if(spaceship.crew.length < Math.floor(spaceship.crewLimit/3)){
        alert(`Tripulação insuficiente!`)
    }else{
        spaceship.inMission = true
        alert(`Enviando ${spaceship.name} em uma nova missão!`)
    }

}

function firstMenu(){
    let name = prompt('informe um nome para a nave')
    let pilot = prompt('informe o nome do piloto da nave')
    let crewLimit = Number(prompt('informe o limite da tripulação:'))

    setSpaceship(name,pilot,crewLimit)
}

function secondMenu(){
    let confirmShip =('Em qual nave deseja adicionar um membro?')
    let spaceship = findSpaceship(confirmShip)
    let member = prompt('informe o nome do membro')

    const confirmation = confirm(`Deseja realmente adicionar ${member} a ${spaceship.name}?`)

    if(confirmation){
        if(spaceship){
            addCrewMember(member,spaceship)
        }else{
            alert("a nave não existe!")
        }
    }
}

function thirdyMenu(){
    let spaceshipName = prompt('Qual nave deseja enviar em missão?')
    let spaceship = findSpaceship(spaceshipName)

    let confirmation = confirm(`Deseja enviar ${spaceship.name} em uma missão?`)

    if(confirmation){
        sendSpaceShip(spaceship)
    }

}






function mainMenu(){
    let option = prompt(`Selecione uma das opções:
    1-Cadastrar uma nave
    2-Adicionar um tripulante
    3-Enviar em missão
    4-Encerrar`)

   

    while(option!= '4'){
        switch(option){
            case "1":
                firstMenu()
                break
            case "2":
                secondMenu()
            case '3':

            
        }
    }

   
}
