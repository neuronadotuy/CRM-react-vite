import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	
	const error =  useRouteError();
	console.log(error.message);
	
	return ( 
		<div className="space-y-8">
			<h1 className="text-center text-6xl font-bold mt-20 text-blue-900 rotate-90">
				:(
			</h1>
			<p className="text-center">{error.message}</p>
		</div>
	 );
}
 
export default ErrorPage;