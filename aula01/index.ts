const spaceship ={
    name:"X-wing",
    number:0
}//Ao passar com o mouse sobre a variável spaceship é possível ver que a IDE já inferiu os tipos string e number. Mas é possível fazer mais.


//Passe o mouse sobre os parâmetros da função e clique em "Correção rápida" e "Inferir todos os tipos de uso". Seu código agora estará assim:
function accelerate(spaceship: { name: string; number: number },speed: number){
    spaceship.number = speed; 
}

accelerate(spaceship,50)




