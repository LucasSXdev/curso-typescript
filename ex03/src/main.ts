interface GithubUserResponse {
    id:number,
    login:string,
    name:string,
    bio:string,
    public_repos:number,
    repos_url:string
}

interface GithubReposReponse{
    name:string,
    description:string,
    fork:boolean,
    stargazers_count:number
}

const users:GithubUserResponse[]=[]

async function fetchUser(userName:string){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const user :GithubUserResponse= await response.json()

    if(!user){
        console.log('usuário não encontrado')
    }else{
        users.push(user)
        
        console.log(
            `O usuário ${user.login} foi salvo`+
            `\nid ${user.id}`+
            `\nLogin ${user.login}`+
            `\nNome ${user.name}`+
            `\nBio ${user.bio}`+
            `\nRepositórios: ${user.public_repos}`
        )
    }
}

async function showUser(username:string) {
    const user = users.find(user=>user.login === username)
  

    if(typeof user ===  'undefined'){
        console.log('usuário não encontrado!')
    }else{
        const response = await fetch(user.repos_url)
        const repos:GithubReposReponse[]= await response.json()

        let message = 
        `id ${user.id}`+
        `\nLogin ${user.login}`+
        `\nNome ${user.name}`+
        `\nBio ${user.bio}`+
        `\nRepositórios: ${user.public_repos}`

        repos.forEach(repo =>{
            message += `
            nome: ${repo.name}`+
            `\nDescription: ${repo.description}`+
            `\nEstrela: ${repo.stargazers_count}`+
            `\nÉ um fork : ${repo.fork?'sim':'não'}\n`
        })

        console.log(message)
    }
    
}