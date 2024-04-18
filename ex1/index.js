var spaceships = [];
function setSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
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
    var nameShip = prompt('Em qual nave deseja adicionar um membro?');
    var spaceship = findSpaceship(nameShip);
    if (spaceship) {
        var member = prompt('informe o nome do membro');
        addCrewMember(member, spaceship);
        alert("".concat(member, "foi adicionado a ").concat(spaceship.name));
    }
    else {
        alert("a nave não existe!");
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
function fourthMenu() {
    var list = "Lista de naves registradas: \n";
    spaceships.forEach(function (ship) {
        list += "\n    Nome da nave:".concat(ship.name, "\n    Piloto:").concat(ship.pilot, "\n    Limite da tripula\u00E7\u00E3o:").concat(ship.crewLimit, "\n    Tripula\u00E7\u00E3o:").concat(ship.crew.length, "\n    ");
        ship.crew.forEach(function (member) {
            list += "     -".concat(member, "\n");
        });
    });
    alert(list);
}
var option = 0;
while (option !== 5) {
    var menu = "\n        Selecione uma das op\u00E7\u00F5es:\n        1-Cadastrar uma nave\n        2-Adicionar um tripulante\n        3-Enviar em miss\u00E3o\n        4-Listar naves\n        5-Encerrar";
    option = Number(prompt(menu));
    switch (option) {
        case 1:
            firstMenu();
            break;
        case 2:
            secondMenu();
            break;
        case 3:
            thirdyMenu();
            break;
        case 4:
            fourthMenu();
            break;
        case 5:
            alert('Encerrando o programa!');
            break;
        default:
            alert('Opção inválida, por favor tente novamente!');
            break;
    }
}
