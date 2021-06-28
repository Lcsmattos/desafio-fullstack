import React, { useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async ()=> {
		const response = await commerce.products.list();
		console.log("Res:", response);
		const { data } = response;
		console.log("Data:", data);
		setProducts(data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div>
			<Navbar/>
			<Products products={products}/>
		</div>
	)
}

export default App
