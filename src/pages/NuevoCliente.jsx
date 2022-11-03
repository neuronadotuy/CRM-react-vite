import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { agregarCliente } from '../data/clientes';
import { nanoid } from 'nanoid';

export async function action ({ request }) {
	 const formData = await request.formData();
	 const datos = Object.fromEntries(formData);

	 const email = formData.get('email');
	 
	// Validate the form
	 const errors = [];
	 if (Object.values(datos).includes('')) {
		errors.push('Todos los campos son obligatorios');
	 };

	let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

	if (!regex.test(email)) {
		errors.push('El email no es valido')
	};

	 if (Object.keys(errors).length) {
		return errors;
	 };

	 datos.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

	 await agregarCliente(datos);

	 return redirect('/');
}

const NuevoCliente = () => {

	const errors = useActionData();
	const navigate = useNavigate();

	return ( 
		<>
			<h1 className="font-bold text-4xl text-blue-900">Nuevo Cliente</h1>
			<p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>
			<div className="flex justify-end">
				<button 
					className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
					onClick={() => navigate(-1)}
				>
					Volver
				</button>
			</div>
			<div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
				{errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error>)}
				<Form 
					method='post'
					noValidate
				>
					<Formulario />
					<input 
						type="submit"
						className='mt-5 w-full bg-blue-800 text-white p-3 uppercase font-bold text-lg'
						value='Registrar Cliente' 
					/>
				</Form>
			</div>
		</>
	 );
}
 
export default NuevoCliente;