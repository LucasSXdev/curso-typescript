var spaceships = [];
function setSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: Boolean
    };
    spaceships.push(spaceship);
    alert("A nave ".concat(spaceship.name, " foi registrada!"));
}
function findSpaceship(name) {
    var spaceship;
    spaceship = spaceships.find(function (ship) { return ship.name === name; });
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert('limite atingido');
    }
    spaceship.crew.push(member);
    alert("Foi adiciondo a ".concat(spaceship.name, " um novo tripulante!"));
}
function sendSpaceShip(spaceship) {
    if (spaceship.inMission) {
        alert("".concat(spaceship.name, " j\u00E1 se encontra em miss\u00E3o"));
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert("Tripula\u00E7\u00E3o insuficiente!");
    }
    else {
        spaceship.inMission = true;
        alert("Enviando ".concat(spaceship.name, " em uma nova miss\u00E3o!"));
    }
}
function firstMenu() {
    var name = prompt('informe um nome para a nave');
    var pilot = prompt('informe o nome do piloto da nave');
    var crewLimit = Number(prompt('informe o limite da tripulação:'));
    setSpaceship(name, pilot, crewLimit);
}
function secondMenu() {
    var confirmShip = ('Em qual nave deseja adicionar um membro?');
    var spaceship = findSpaceship(confirmShip);
    var member = prompt('informe o nome do membro');
    var confirmation = confirm("Deseja realmente adicionar ".concat(member, " a ").concat(spaceship.name, "?"));
    if (confirmation) {
        if (spaceship) {
            addCrewMember(member, spaceship);
        }
        else {
            alert("a nave não existe!");
        }
    }
}
function thirdyMenu() {
    var spaceshipName = prompt('Qual nave deseja enviar em missão?');
    var spaceship = findSpaceship(spaceshipName);
    var confirmation = confirm("Deseja enviar ".concat(spaceship.name, " em uma miss\u00E3o?"));
    if (confirmation) {
        sendSpaceShip(spaceship);
    }
}
function mainMenu() {
    var option = prompt("Selecione uma das op\u00E7\u00F5es:\n    1-Cadastrar uma nave\n    2-Adicionar um tripulante\n    3-Enviar em miss\u00E3o\n    4-Encerrar");
    while (option != '4') {
        switch (option) {
            case "1":
                firstMenu();
                break;
            case "2":
                secondMenu();
            case '3':
        }
    }
}
