import React from 'react';
import Product from "./Product"
import { Paper, Grid } from '@mui/material'
import { data } from "../data/productData"

const ProductsSection = ({ addItem, addData}) => {
	const productArray = data.map((product) => {
		return <Product
						key={product.price}
						name={product.name}
						description={product.description}
						price={product.price}
						image={product.image}
						quantity={1}
						addItem={addItem}
						addData={addData}
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