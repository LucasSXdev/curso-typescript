function first(array) {
    return array[0];
}
function last(array) {
    return array[array.length - 1];
}
var pilots = ['lucas', 'rafaela', "Maria", 'João'];
var firstPilot = first(pilots);
var LastPilot = last(pilots);
// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
function cloneShip(ship, newName, newPilot) {
    var newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
var falcon = {
    name: 'Millenium Falcon',
    pilot: 'Han'
};
var xWing = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
};
// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
var copy1 = cloneShip(falcon, 'Milano', 'Peter');
var copy2 = cloneShip(xWing, 'Black One', 'Poe');
