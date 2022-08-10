import React from 'react';
import { Box, Container, Grid, Card, CardActions, CardMedia, CardContent, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Product = ({ name, description, price, image, quantity, addData, inCart}) => {
	
	function handleClick(event, name, price, image, quantity) {
		event.preventDefault()
		addData(name, price, image, quantity)
	}

	const styles = {
		card: {
			margin: "2rem",
			marginLeft: "1rem",
			marginRight: "1rem"
		},
		cardContent: {
			textAlign: "center"
		},
		accordion: {
			backgroundColor: "#f5f5f5",
			maxWidth: "300px"
		},
		cardContainer: {
			marginTop: "1rem",
			width: "50%",
			display: "flex",
			flexDirection: {
				xs: "column",
				sm: "row"
			},
			justifyContent: "center",
			alignItems: "center" 
		}
	}
	
	return (
		<Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
			<Card sx={styles.card}>
				<CardContent sx={styles.cardContent}>
					<Accordion sx={styles.accordion}>
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
				<Container sx={styles.cardContainer}>
					<Box sx={{ marginRight: "10px" }}>
						<Typography sx={{fontSize: "1.5rem"}}>{`$${price}`}</Typography>
					</Box>
					<CardActions>
						<Button sx={{whiteSpace: "nowrap"}} variant={inCart ? "outlined" : "contained"} onClick={(e) => handleClick(e, name, price, image, quantity)}  color={inCart ? 'secondary' : 'success'} >
							{inCart ? "added" : "add to cart"}
						</Button>
					</CardActions>
				</Container>
			</Card>
		</Grid>
	);
};

export default Product;