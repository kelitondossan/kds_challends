const motoboys = [
	{ name: 'Multpedidos', licence: 'ABC123', cellphone: '(123) 456-7890', email: 'Multpedidos@example.com' },
	{ name: 'Keliton', licence: 'DEF456', cellphone: '(234) 567-8901', email: 'keliton@example.com' },
	{ name: 'Everton', licence: 'GHI789', cellphone: '(345) 678-9012', email: 'everton@example.com' },
	{ name: 'João', licence: 'JKL012', cellphone: '(456) 789-0123', email: 'joao@example.com' },
	{ name: 'Maria', licence: 'MNO345', cellphone: '(567) 890-1234', email: 'maria@example.com' },
	{ name: 'Pedro', licence: 'PQR678', cellphone: '(678) 901-2345', email: 'pedro@example.com' },
	{ name: 'Ana', licence: 'STU901', cellphone: '(789) 012-3456', email: 'ana@example.com' },
	{ name: 'Carlos', licence: 'VWX234', cellphone: '(890) 123-4567', email: 'carlos@example.com' },
	{ name: 'Fernanda', licence: 'YZA567', cellphone: '(901) 234-5678', email: 'fernanda@example.com' },

];

const motoboysList = document.getElementById('motoboys-list');

const motoboyDetails = document.getElementById('motoboy-details');

function showMotoboyDetails(motoboy) {
	motoboyDetails.innerHTML = `
	  <h2>${motoboy.name}</h2>
	  <p>Placa do Veículo: ${motoboy.licence}</p>
	  <p>Telefone: ${motoboy.cellphone}</p>
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
			motoboy.name = newNome;
			showMotoboyDetails(motoboy);

		}
	});

	deleteButton.addEventListener('click', () => {
		const confirmation = confirm(`Tem certeza que deseja excluir ${motoboy.name}?`);
		if (confirmation) {
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
		li.textContent = motoboy.name;
		li.addEventListener('click', () => {
			showMotoboyDetails(motoboy);
		});
		motoboysList.appendChild(li);
	});
}

displayMotoboys();
