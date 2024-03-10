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

const motoboys = [
	{ nome: 'Multpedidos', placa: 'ABC123', telefone: '(123) 456-7890', email: 'Multpedidos@example.com' },
	{ nome: 'Keliton', placa: 'DEF456', telefone: '(234) 567-8901', email: 'keliton@example.com' },
	{ nome: 'Everton', placa: 'GHI789', telefone: '(345) 678-9012', email: 'everton@example.com' },
	{ nome: 'João', placa: 'JKL012', telefone: '(456) 789-0123', email: 'joao@example.com' },
	{ nome: 'Maria', placa: 'MNO345', telefone: '(567) 890-1234', email: 'maria@example.com' },
	{ nome: 'Pedro', placa: 'PQR678', telefone: '(678) 901-2345', email: 'pedro@example.com' },
	{ nome: 'Ana', placa: 'STU901', telefone: '(789) 012-3456', email: 'ana@example.com' },
	{ nome: 'Carlos', placa: 'VWX234', telefone: '(890) 123-4567', email: 'carlos@example.com' },
	{ nome: 'Fernanda', placa: 'YZA567', telefone: '(901) 234-5678', email: 'fernanda@example.com' },

];

const motoboysList = document.getElementById('motoboys-list');

const motoboyDetails = document.getElementById('motoboy-details');

function showMotoboyDetails(motoboy) {
	motoboyDetails.innerHTML = `
	  <h2>${motoboy.nome}</h2>
	  <p>Placa do Veículo: ${motoboy.placa}</p>
	  <p>Telefone: ${motoboy.telefone}</p>
	  <p>Email: ${motoboy.email}</p>
	  <button class="edit-button">Editar</button>
	  <button class="delete-button">Excluir</button>
	`;
	motoboyDetails.classList.add('show');

	const editButton = motoboyDetails.querySelector('.edit-button');
	const deleteButton = motoboyDetails.querySelector('.delete-button');

	editButton.addEventListener('click', () => {

		const newNome = prompt('Digite o novo nome:');
		if (newNome) {
			motoboy.name = novoNome;
			showMotoboyDetails(motoboy);

		}
	});

	deleteButton.addEventListener('click', () => {
		const confirmacao = confirm(`Tem certeza que deseja excluir ${motoboy.nome}?`);
		if (confirmacao) {
			motoboys.splice(motoboys.indexOf(motoboy), 1);
			displayMotoboys();
			motoboyDetails.classList.remove('show');
		}
	});
}
function displayMotoboys() {
	motoboysList.innerHTML = '';
	motoboys.forEach(motoboy => {
		const li = document.createElement('li');
		li.classList.add('motoboy');
		li.textContent = motoboy.nome;
		li.addEventListener('click', () => {
			showMotoboyDetails(motoboy);
		});
		motoboysList.appendChild(li);
	});
}

displayMotoboys();
