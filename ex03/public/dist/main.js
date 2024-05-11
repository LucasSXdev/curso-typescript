const users = [];
async function fetchUser(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const user = await response.json();
    if (!user) {
        console.log('usuário não encontrado');
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.login} foi salvo` +
            `\nid ${user.id}` +
            `\nLogin ${user.login}` +
            `\nNome ${user.name}` +
            `\nBio ${user.bio}` +
            `\nRepositórios: ${user.public_repos}`);
    }
}
async function showUser(username) {
    const user = users.find(user => user.login === username);
    if (typeof user === 'undefined') {
        console.log('usuário não encontrado!');
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id ${user.id}` +
            `\nLogin ${user.login}` +
            `\nNome ${user.name}` +
            `\nBio ${user.bio}` +
            `\nRepositórios: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `
            nome: ${repo.name}` +
                `\nDescription: ${repo.description}` +
                `\nEstrela: ${repo.stargazers_count}` +
                `\nÉ um fork : ${repo.fork ? 'sim' : 'não'}\n`;
        });
        console.log(message);
    }
}
