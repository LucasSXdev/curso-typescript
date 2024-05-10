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
