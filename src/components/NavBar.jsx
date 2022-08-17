import React, { useState } from 'react'
import { Container, Divider, Grid, AppBar, Toolbar, IconButton, Button, SwipeableDrawer, Badge, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { ShoppingCart, Add, Remove } from '@mui/icons-material'

const NavBar = ({ cartCount, cartData, changeQuantity, removeData}) => {
	const [drawerOpen, setDrawerOpen] = useState(false)

	function handleRemove(event, index) {
		event.preventDefault()
		cartData[index].quantity === 1 ? removeData(index, '') : changeQuantity(index, -1)
	}

	function getTotal() {
		const prices = cartData.map(product => product.price * product.quantity)
		const sum = prices.reduce((accumulator, value) => {
			return accumulator + value;
		}, 0)
		return sum.toFixed(2)
	}
	
	const styles = {
		appBar: {
			position: "sticky",
		},
		toolBar: {
			justifyContent: "space-between",
			padding: "5px"
		},
		cartButton: {
			backgroundColor: "white",
			padding: "10px",
			"&:hover":
			{
				backgroundColor: "orange",
			}
		},
		drawerContainer: {
			height: "100%",
			width: {xs: "70vw", sm: "450px"}
		},
		card: {
			justifyContent: "center",
			marginBottom: "1rem",
			width: {xs: "60vw",  sm: "400px"}
		},
		cardContent: {
			justifyContent: "center",
			textAlign: "center", 
		},
		cardName: {
			textAlign: "center", 
			justifyContent: "center",

		},
		cardQuantityPrice: {
			display: "flex", 
			justifyContent: "center"
		},
		cardEditSection: {
			display: "flex",
			width: {xs: "60vw", sm: "300px"}
		},
		cardAddSubtractButtons: {
			backgroundColor: "#f5f5f5",
			height: "50px",
			width: "50px",
			margin: "auto"
		},
		drawerTotalText: {
			fontSize: "1.5rem", 
			textAlign: "center"
		},
		drawerTotalPrice: {
			fontSize: "1.5rem",
			fontWeight: "bold",
			textAlign: "center"
		},
		drawerCheckoutButton: {
			margin: "auto",
			marginBottom: "3rem"
		}

	}

	return (
		<AppBar sx={styles.appBar} color="primary">
			<Toolbar sx={styles.toolBar}>
				<Typography ml={2}>
					Decent Backpacks!
				</Typography>
				<IconButton
					sx={styles.cartButton}
					onClick={() => setDrawerOpen(prevValue => !prevValue)}
				>
					<Badge badgeContent={cartCount} color="error">
						<ShoppingCart fontSize="large"/>
					</Badge>
				</IconButton>
				<SwipeableDrawer
					onClose={() => setDrawerOpen(false)}
					onOpen={() => setDrawerOpen(true)}
					anchor='right'
          open={drawerOpen}
        >
					<Container sx={styles.drawerContainer} >
							{cartCount === 0 ? 
								<CardContent sx={{marginTop: "2rem"}}>
									<Typography variant="h4">
										The cart is empty.
									</Typography>
									<Divider />
									<Typography mt={2} variant="h6">
										Time to go shopping!
									</Typography>
								</CardContent>
							:
								<Grid container mt={2} flexDirection="column">
								{
									cartData.map((product, index) => (
									<Grid item mt={1} key={Math.random()}>
										<Card sx={styles.card}>
											<CardContent sx={styles.cardContent}>
												<Grid container sx={styles.cardName}>
													<Typography variant="h6" noWrap>
														{product.name}
													</Typography>
												</Grid>
												<Container sx={styles.cardQuantityPrice}  >
													<Typography variant="h8" mt={2} mr={1}>
														Quantity: {product.quantity}
													</Typography>
													<Typography variant="h8" mt={2}>
														Price: ${(product.price * product.quantity).toFixed(2)}
													</Typography>
												</Container>
											</CardContent>
											<Container sx={styles.cardEditSection}>
												<IconButton
													onClick={() => changeQuantity(index, 1)}
													color="primary"
													sx={styles.cardAddSubtractButtons}
												>
													<Add fontSize="large" />
												</IconButton>
												<CardMedia
													component="img"
													alt="backpack"
													height="100"
													image={product.image}
													sx={{objectFit: "contain"}}
												/>
												<IconButton
													onClick={(e) => handleRemove(e, index)}
													color="warning"
													sx={styles.cardAddSubtractButtons}
												>
													<Remove fontSize="large" />
												</IconButton>
											</Container>
										</Card>
									</Grid>				
									))
								}					
									<Grid item> 
										<Typography mt={4} sx={styles.drawerTotalText}>
											Your total is
										</Typography>
										<Typography mb={3} sx={styles.drawerTotalPrice}>
											<strong>${getTotal()}</strong>
										</Typography>
									</Grid>
									<Button fontSize="large" sx={styles.drawerCheckoutButton} variant="contained">checkout</Button>
								</Grid>
							}
					</Container>
        </SwipeableDrawer>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;