var planets = [];
function createPlanet(name, cordinates, situation) {
    planets.push({
        name: name,
        cordinates: cordinates,
        situation: situation,
        satellites: []
    });
    alert("O planeta ".concat(name, " foi adicionado com sucesso"));
}
function findPlanet(name) {
    var planet = planets.find(function (plan) { return plan.name === name; });
    return planet;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert("A situa\u00E7\u00E3o do planeta".concat(planet.name, " foi atualizada"));
}
function addSatellite(name, planet) {
    planet.satellites.push[name];
    alert("o satelite".concat(name, "foi adicionado ao planeta ").concat(planet.name));
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(function (satellite) { return satellite !== name; });
    alert("O satelite ".concat(name, " foi removido do planeta ").concat(planet.name));
}
function validSituation() {
    var situation;
    var validSituation = false;
    while (!validSituation) {
        var situatuionInput = prompt('informe a situação atual do planeta:\n1-Habitado-\n2-Habitável-\n3-Inabitável-\n4-Inexplorado');
        switch (situatuionInput) {
            case '1':
                situation = 'Habitado';
                validSituation = true;
                break;
            case '2':
                situation = 'Habitável';
                validSituation = true;
                break;
            case '3':
                situation = 'Inabitável';
                validSituation = true;
                break;
            case '4':
                situation = 'inexplorado';
                validSituation = true;
                break;
            default:
                alert('Opção inválida');
                break;
        }
        return situation;
    }
}
function validPlanet(calbackfn) {
    var planetName = prompt('informe o nome do planeta');
    var planet = findPlanet(planetName);
    if (planet) {
        calbackfn(planet);
    }
    else {
        alert('planeta não encontrado, retornando para o menu...');
    }
}
function firtMenuOption() {
    var name = prompt('informe o nome do planeta');
    var cordinateA = Number(prompt('informe a cordenada A'));
    var cordinateB = Number(prompt('informe a cordenada B'));
    var cordinateC = Number(prompt('informe a cordenada c'));
    var cordinateD = Number(prompt('informe a cordenada D'));
    var situation = validSituation();
    var confirmation = confirm("confirma o registro do planeta ".concat(name, "?\n    Cordernadas: (").concat(cordinateA, ",").concat(cordinateB, ",").concat(cordinateC, ",").concat(cordinateD, ")\n    Situation:").concat(situation));
}
function secondMenuOption() {
    validPlanet(function (planet) {
        var situation = validSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    validPlanet(function (planet) {
        var satelitte = prompt('informe o nome do satellite a ser adicionado');
        addSatellite(satelitte, planet);
    });
}
function fourthMenuOption() {
    validPlanet(function (planet) {
        var satellite = prompt('informe o nome do satelite a ser removido');
        removeSatellite(satellite, planet);
    });
}
function fifthMenuOption() {
    var list = 'Planetas\n';
    planets.forEach(function (planet) {
        var _a = planet.cordinates, a = _a[0], b = _a[1], c = _a[2], d = _a[3];
        list += "\n        Nome:".concat(planet.name, "\n        Cordenadas:").concat(planet.cordinates, "\n        Situa\u00E7\u00E3o:").concat(planet.situation, "\n        Satelites:").concat(planet.satellites.length);
        planet.satellites.forEach(function (satelitte) {
            list += "-   ".concat(satelitte, "\n");
        });
        alert('list');
    });
}
var option = 0;
while (option !== 6) {
    var menu = "Menu\n    1-Registrar planeta\n    2-Atualizar situa\u00E7\u00E3o\n    3-Adicionar um satelite ao planeta\n    4-Remover satelite do planeta\n    5-Listar todos o planetas\n    6-Sair\n    ";
    option = Number((prompt(menu)));
    switch (option) {
        case 1:
            firtMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('encerrando o sistema!');
            break;
        default:
            alert('Opção inválida!Voltando para o painel principal');
    }
}
