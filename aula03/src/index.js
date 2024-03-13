function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("a nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, ", foi enviada em miss\u00E3o!"));
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
var spaceshipCaptain = prompt('insira o nome do capitão da nave a ser envidada');
sendSpaceship(spaceshipName, spaceshipCaptain);
var currentSpaceShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var currentSpeed = parseInt(prompt("informe a velocidade atual da sua nave"));
acelerate(currentSpeed, currentSpaceShip);
