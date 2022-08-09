import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardActions, CardMedia, CardContent, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Product = ({ name, description, price, image, quantity, addData }) => {
	
	const [productAdded, setProductAdded] = useState(false)

	function handleClick(event, name, price, image, quantity) {
		event.preventDefault()
		addData(name, price, image, quantity)
		setProductAdded(prev => !prev)
	}
	
	return (
		<Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
			<Card sx={{ margin: "2rem", marginLeft: "1rem", marginRight: "1rem" }}>
				<CardContent sx={{ textAlign: "center"}}>
					<Accordion sx={{backgroundColor: "#f5f5f5", maxWidth: "300px"}}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Grid container>
								<Grid item>
									<Typography sx={{width: "14rem"}} noWrap>{name}</Typography>
								</Grid>
							</Grid>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{description}</Typography>
						</AccordionDetails>
					</Accordion>
				</CardContent>
				<CardMedia
					component="img"
       		alt="backpack"
        	height="140"
        	image={image}
					sx={{objectFit: "contain"}}
				/>
				<Container sx={{ marginTop: "1rem", width: "50%", display: "flex", flexDirection: {xs: "column", sm: "row"}, justifyContent: "center", alignItems: "center" }}>
					<Box sx={{ marginRight: "10px" }}>
						<Typography sx={{fontSize: "1.5rem"}}>{`$${price}`}</Typography>
					</Box>
					<CardActions>
						<Button sx={{whiteSpace: "nowrap"}} variant={productAdded ? "outlined" : "contained"} onClick={(e) => handleClick(e, name, price, image, quantity)}  color={productAdded ? 'secondary' : 'success'} >
							add to cart
						</Button>
					</CardActions>
				</Container>
			</Card>
		</Grid>
	);
};

export default Product;