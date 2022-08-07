import React, { useState } from 'react'
import { Container, Divider, Grid, AppBar, Toolbar, IconButton, SwipeableDrawer, Badge, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { ShoppingCart, Add, Remove } from '@mui/icons-material'

const NavBar = ({ cartCount, cartData, changeQuantity }) => {
	const [drawerOpen, setDrawerOpen] = useState(false)


	function getTotal() {
		const prices = cartData.map(product => product.price * product.quantity)
		const sum = prices.reduce((accumulator, value) => {
			return accumulator + value;
		}, 0)
		return sum
	}
	return (
		<AppBar position="sticky">
			<Toolbar sx={{ justifyContent: "space-between", padding: "5px"}}>
				<Typography>
					Let's shop
				</Typography>
				<IconButton
					sx={{ 
						backgroundColor: "white",
						padding: "15px",
						"&:hover":
							{backgroundColor: "orange"}
					}}
					onClick={() => setDrawerOpen(prevValue => !prevValue)}
				>
					<Badge badgeContent={cartCount}>
						<ShoppingCart sx={{ color: "black" }} fontSize="large"/>
					</Badge>
				</IconButton>
				<SwipeableDrawer
					onClose={() => setDrawerOpen(false)}
					onOpen={() => setDrawerOpen(true)}
					anchor='right'
          open={drawerOpen}
        >
					<Container sx={{height: "100%", width: "40vw"}} >
							{cartCount === 0 ? 
								<CardContent sx={{marginTop: "2rem", textAlign: "center"}}>
									<Typography variant="h4" sx={{marginBottom: "1rem"}}>
										The cart is empty.
									</Typography>
									<Divider />
									<Typography variant="h6" sx={{marginTop: "1rem"}}>
										Time to go shopping!
									</Typography>
								</CardContent>
							:
								<Grid container m={2} flexDirection="column">
								{
									cartData.map((product, index) => (
									<Grid item mt={2} sx={{backgroundColor: "green"}} key={Math.random()}>
										<Card>
											<CardContent sx={{textAlign: "center"}}>
												<Typography variant="h6">
													{product.name}
												</Typography>
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
													onClick={() => changeQuantity(index, -1)}
												>
													<Remove fontSize="large" />
												</IconButton>
											</Container>
										</Card>
									</Grid>				
									))
								}					
									<Grid item> 
										<Typography>
											Your total is ${getTotal()}
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