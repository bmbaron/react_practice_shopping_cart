import React from 'react';
import Product from "./Product"
import { Paper, Grid } from '@mui/material'
import { data } from "../data/productData"

const ProductsSection = ({ addData, cartData}) => {

	const namesInCart = cartData.map(product => (
		product.name
	))

	const productArray = data.map((product) => {
		return <Product
						key={product.price}
						name={product.name}
						description={product.description}
						price={product.price.toFixed(2)}
						image={product.image}
						quantity={1}
						addData={addData}
						inCart={namesInCart.includes(product.name)}
					/>
	})
	return (
		<Paper sx={{ height: "auto"}}>
			<Grid container>
				{ productArray }
			</Grid>
		</Paper>
	);
};

export default ProductsSection;