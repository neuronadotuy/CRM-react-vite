export function loader () {
	return 'Desde Loader';
}

const Index = () => {
	return ( 
		<>
			<h1 className="font-bold text-4xl text-blue-900">Clientes</h1>
			<p className="mt-3">Administra tus Clientes</p>
		</>
	 );
}
 
export default Index;