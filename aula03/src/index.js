function sendSpaceship(name, captain, crewList) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: crewList,
    };
    var crewDetails = "";
    spaceship.crew.forEach(function (member) {
        crewDetails += " tripulante: ".concat(member.name, ",\n         idade: ").concat(member.age, ",\n         profiss\u00E3o: ").concat(member.occupation, "\n");
    });
    alert("a nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, ", foi enviada em miss\u00E3o com a equipe de tripulantes com a seguinte equipe:").concat(crewDetails));
    return spaceship;
}
function acelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt("insira o nome da nave a ser enviada");
var spaceshipCaptain = prompt('insira o nome do capitão da nave a ser enviada');
var spaceshipCrew = [
    { name: "Jhon", age: 22, occupation: "pilot" },
    { name: "Lucas", age: 25, occupation: "doctor" },
    { name: "Maria", age: 27, occupation: "chef" }
];
var currentSpaceShip = sendSpaceship(spaceshipName, spaceshipCaptain, spaceshipCrew);
var currentSpeed = parseInt(prompt("informe a velocidade atual da sua nave"));
acelerate(currentSpeed, currentSpaceShip);
