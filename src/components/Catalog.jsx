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
		const alreadyHas = cartData.some(product => product.name === name)

		if(!alreadyHas) {
			setCartData(prevData => [...prevData, {name, price, image, quantity}])
			addItem()
		}
		else return
	}

	function changeQuantity(indexToChange, amount) {
		setCartData(prevData => 
			prevData.map((data, index) => {
			if (index === indexToChange) {
				return {...data, quantity: data.quantity + amount}
			}
			else {
				return {...data}
			}
		}))
	}

	function removeData(indexToRemove, nameToRemove) {
		if (indexToRemove !== '') {
			setCartData(prevState => prevState.filter((data, index) => index !== indexToRemove))
			setCartCount(prevCount => prevCount - 1)
		}
		else if (indexToRemove === '' && nameToRemove !== '') {
			setCartData(prevState => prevState.filter((data) => data.name !== nameToRemove))
			setCartCount(prevCount => prevCount - 1)
		}
		else {
			return 
		}
	}

	return (
		<Box>
			<NavBar cartCount={cartCount} cartData={cartData} changeQuantity={changeQuantity} removeData={removeData} />
			<ProductsSection addData={addData} cartData={cartData} />
		</Box>
	);
};

export default Catalog;