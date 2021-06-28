import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/Delivery.png';

import useStyles from './styles';


const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<AppBar position="fixed" className={classes.AppBar} color="inherit">
				<Toolbar>
					<Typography variant="h6" className={classes.title} color="inherit">
						<img src={logo} alt="Pedidos Delivery" height="25px" className={classes.image}/>
						Pedidos Delivery
					</Typography>
					<div className={classes.grow} />
					<div classMame={classes.button}>
						<IconButton aria-label="Show cart Items" color="inherit" >
							<Badge badgeContent={2} color="secondary">
								<ShoppingCart/>
							</Badge> 
						</IconButton>
					</div>
				</Toolbar>

			</AppBar>
		</>
	)
}

export default Navbar
