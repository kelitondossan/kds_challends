function searchUserByValue(arrayUsers, valueSearch) {
	return new Promise((resolve, reject) => {
		for (const user of arrayUsers) {
			if (user.nome === valueSearch || user.idade === valueSearch || user.email === valueSearch) {
				resolve(user);
			}
		}
		reject(new Error('No users found.'));
	});
}

const users = [
	{ nome: 'Keliton', idade: 30, email: 'keliton@example.com' },
	{ nome: 'Joao', idade: 25, email: 'joao@example.com' },
	{ nome: 'Everton', idade: 28, email: 'everton@example.com' },
];

const valueSearch = 'herc@example.com';

searchUserByValue(users, valueSearch)
	.then((userReturn) => {
		console.log('User found:', userReturn);
	})
	.catch((erro) => {
		console.error('Error:', erro.message);
	});
