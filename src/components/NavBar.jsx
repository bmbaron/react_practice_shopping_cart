import React, { useState } from 'react'
import { Container, Divider, Grid, AppBar, Toolbar, IconButton, SwipeableDrawer, Badge, Typography, Card, CardContent, CardMedia } from '@mui/material'
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
	return (
		<AppBar position="sticky" color="primary">
			<Toolbar sx={{ justifyContent: "space-between", padding: "5px"}}>
				<Typography ml={2}>
					Decent Backpacks!
				</Typography>
				<IconButton
					sx={{ 
						backgroundColor: "white",
						padding: "10px",
						"&:hover":
							{backgroundColor: "orange"}
					}}
					onClick={() => setDrawerOpen(prevValue => !prevValue)}
				>
					<Badge badgeContent={cartCount} color="error">
						<ShoppingCart sx={{ color: "black" }} fontSize="large"/>
					</Badge>
				</IconButton>
				<SwipeableDrawer
					onClose={() => setDrawerOpen(false)}
					onOpen={() => setDrawerOpen(true)}
					anchor='right'
          open={drawerOpen}
        >
					<Container sx={{height: "100%", width: {xs: "70vw", sm: "55vw", md: "40vw"} }} >
							{cartCount === 0 ? 
								<CardContent sx={{marginTop: "2rem"}}>
									<Typography variant="h4" sx={{marginBottom: "1rem"}}>
										The cart is empty.
									</Typography>
									<Divider />
									<Typography variant="h6" sx={{marginTop: "1rem"}}>
										Time to go shopping!
									</Typography>
								</CardContent>
							:
								<Grid container mt={2} flexDirection="column">
								{
									cartData.map((product, index) => (
									<Grid item mt={2} sx={{backgroundColor: "green"}} key={Math.random()}>
										<Card>
											<CardContent sx={{textAlign: "center"}}>
												<Grid container sx={{justifyContent: "center"}}>
													<Typography sx={{width: {sm: "300px", xs: "200px"} }} variant="h6" noWrap>
														{product.name}
													</Typography>
												</Grid>
												<Container sx={{display: "flex", justifyContent: "space-between"}}  >
													<Typography variant="h8">
														Quantity: {product.quantity}
													</Typography>
													<Typography variant="h8">
														Price: ${product.price * product.quantity}
													</Typography>
												</Container>
											</CardContent>
											<Container sx={{display: "flex", textAlign: "center"}}>
												<IconButton
													onClick={() => changeQuantity(index, 1)}
												>
													<Add fontSize="large" />
												</IconButton>
												<CardMedia
													component="img"
													alt="backpack"
													height="50"
													image={product.image}
													sx={{objectFit: "contain"}}
												/>
												<IconButton
													onClick={(e) => handleRemove(e, index)}
												>
													<Remove fontSize="large" />
												</IconButton>
											</Container>
										</Card>
									</Grid>				
									))
								}					
									<Grid item> 
										<Typography mt={4} sx={{fontSize: "1.5rem", textAlign: "center"}}>
											Your total is
										</Typography>
										<Typography mb={3} sx={{fontSize: "1.5rem", color: "rosybrown", fontWeight: "bold", textAlign: "center"}}>
											<strong>${getTotal()}</strong>
										</Typography>
									</Grid>
								</Grid>
							}
					</Container>
        </SwipeableDrawer>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;