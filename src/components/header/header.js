import React from "react";
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import StoreIcon from '@material-ui/icons/StorefrontTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooksTwoTone';

const useStyles = makeStyles({
	headerIcon: {
		padding: 5,
		maxWidth: 30,
		width: '100%',
		height: 'auto',
		verticalAlign: 'middle',
		cursor: 'pointer'
	},
	cartText: {
		verticalAlign: 'middle'
	}
});


const Header = () => {
	const classes = useStyles();
	
	return (
		<header>
			<Grid container
				  justify='space-between'
				  alignItems='center'>
				
				<Grid item xs={3}>
					<Link to='/'>
						<StoreIcon className={classes.headerIcon} />
					</Link>
				</Grid>
				
				<Grid container
					  item
					  xs={9}
					  justify='flex-end'
				>
					<Link to='/catalog-book'>
						<LibraryBooksIcon className={classes.headerIcon} />
					</Link>
					
					<Link to='/cart'>
						<div className="header-cart">
							<ShoppingCartIcon className={classes.headerIcon} />
							<span className={classes.cartText}>5 items($200)</span>
						</div>
					</Link>
				</Grid>
			</Grid>
		</header>
	)
};

export default Header;