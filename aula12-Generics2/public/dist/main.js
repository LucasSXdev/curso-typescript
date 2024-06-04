// O tipo Ship não estaria correto aqui
var enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy');
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
var enemyCopy2 = cloneShip(falcon, 'Enemy', 'Enemy');
// Aqui temos um erro por conta do tipo Ship
enemyCopy.flag = 'Imperial';
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial';
