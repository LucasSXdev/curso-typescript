var crew;
function setSpaceship(spaceship) {
    return spaceship;
}
var spaceship = setSpaceship({ name: 'Lucas', pilot: 'hans solo', crewLimit: 5, crew: [], inMission: false });
function addCrewMember(member) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(member);
    }
}
console.log(spaceship);
addCrewMember('maria');
console.log(spaceship);
