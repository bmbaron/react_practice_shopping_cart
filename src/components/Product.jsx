import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardActions, CardMedia, CardContent, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Product = ({ name, description, price, image, quantity, addItem, addData }) => {
	
	const [buttonDisabled, setButtonDisabled] = useState(false)

	function handleClick(event, name, price, image, quantity) {
		if (!buttonDisabled) {
			event.preventDefault()
			addItem()
			addData(name, price, image, quantity)
			setButtonDisabled(true)
		}
	}
	
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card sx={{ margin: "3rem"}}>
				<CardContent sx={{ textAlign: "center" }}>
					<Accordion sx={{backgroundColor: "lightyellow"}}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>{name}</Typography>
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
				<Container sx={{width: "100%", display: "flex", justifyContent: {xs: "space-evenly", sm: "space-around"} }}>
					<Box pt={2}>
						<Typography>{`$${price}`}</Typography>
					</Box>
					<CardActions>
						<Button sx={{whiteSpace: "nowrap"}} variant={buttonDisabled ? "disabled" : "contained"} onClick={(e) => handleClick(e, name, price, image, quantity)}>
							{buttonDisabled ? "added successfully" : "add to cart"}
						</Button>
					</CardActions>
				</Container>
			</Card>
		</Grid>
	);
};

export default Product;