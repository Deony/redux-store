import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header';
import { HomePage, BookListPage, Cart } from "../pages";

import 'reset-css/reset.css';


const App = () => {
	
	return (
		<Fragment>
			<Header />
			
			<main>
				<Switch>
					<Route path='/'
						   exact
						   component={HomePage}
					/>
					
					<Route path='/catalog-book'
						   component={BookListPage}
					/>
					
					<Route path='/cart'
						   component={Cart}
					/>
				</Switch>
			</main>
		</Fragment>
	)
};

export default App;