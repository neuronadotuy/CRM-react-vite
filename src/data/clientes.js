export async function obtenerClientes () {

	const req = await fetch(import.meta.env.VITE_API_URL);
	const res = await req.json();

	return res;
};

export async function obtenerCliente ( id ) {

	const req = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
	const res = await req.json();

	return res;
};


export async function agregarCliente( datos ) {
	try {
		const req = await fetch(import.meta.env.VITE_API_URL, {
			method: 'POST',
			body: JSON.stringify(datos),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		await req.json();
	} catch (error) {
		console.log(error)
	}
};

export async function actualizarCliente ( id, datos ) {
	try {
		const req = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
			method: 'PUT',
			body: JSON.stringify(datos),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		await req.json();
	} catch (error) {
		console.log(error)
	}
};

export async function eliminarCliente ( id ) {
	try {
		const req = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
			method: 'DELETE'
		})
		await req.json();
	} catch (error) {
		console.log(error)
	}
};