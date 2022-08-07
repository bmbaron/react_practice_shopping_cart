import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"
import ProductsSection from "./ProductsSection"
import { Box } from '@mui/material';

const Catalog = () => {
	const [cartCount, setCartCount] = useState(0)
	const [cartData, setCartData] = useState([])

	useEffect(()=> {
		cartCount === 0 && setCartData([])
	}, [cartCount])

	function addItem() {
		setCartCount(prevCount => prevCount + 1)
	}

	function addData(name, price, image, quantity) {
		setCartData(prevData => [...prevData, {name, price, image, quantity}])
	}

	function changeQuantity(indexToChange, amount) {
		// setCartData(prevData => 
		// 	prevData.filter(product => product.quantity + amount !== 0).map((data, index) => {
		// 	if (index === indexToChange) {
		// 		return {...data, quantity: data.quantity + amount}
		// 	}
		// 	else {
		// 		return {...data}
		// 	}
		// }))
		// setCartCount(cartData.length)
	}

	return (
		<Box>
			<NavBar cartCount={cartCount} cartData={cartData} changeQuantity={changeQuantity} />
			<ProductsSection addItem={addItem} addData={addData} />
		</Box>
	);
};

export default Catalog;