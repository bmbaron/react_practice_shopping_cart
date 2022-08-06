import React, { useState } from 'react';
import NavBar from "./NavBar"
import ProductsSection from "./ProductsSection"
import { Box } from '@mui/material';

const Catalog = () => {
	const [cartCount, setCartCount] = useState(0)
	const [cartData, setCartData] = useState([])

	function addItem() {
		setCartCount(prevCount => prevCount + 1)
	}

	function addData(name, price, image, quantity) {
		setCartData(prevData => [...prevData, {name, price, image, quantity}])
	}

	function changeQuantity(indexToIncrease, amount) {
		setCartData(prevData => prevData.map((data, index) => {
			if (index === indexToIncrease) {
				if (data.quantity + amount !== 0) {
					return {...data, quantity: data.quantity + amount}
				}
				//if the quantity was reduced to 0, delete from the state count and cart
				else {
					setCartCount(prevCount => prevCount - 1)
					return {}
				}
			}
			else {
				return {...data}
			}
		}))
	}

	return (
		<Box>
			<NavBar cartCount={cartCount} cartData={cartData} changeQuantity={changeQuantity} />
			<ProductsSection addItem={addItem} addData={addData} />
		</Box>
	);
};

export default Catalog;