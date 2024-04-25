var planets = [];
function createPlanet(name, coordinates, situation, satellite) {
    var planet = {
        name: name,
        coordinates: coordinates,
        situation: situation,
        satellite: []
    };
    planets.push(planet);
}
