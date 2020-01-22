import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import {StoreServiceProvider} from "./components/bookstore-service-context";

import bookStore from "./store";
import StoreService from "./services/store-service";


const storeService = new StoreService();

ReactDOM.render(
	<Provider store={bookStore}>
		<ErrorBoundary>
			<StoreServiceProvider value={storeService}>
				<Container maxWidth="md">
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Container>
			</StoreServiceProvider>
		</ErrorBoundary>
	</Provider>
	, document.getElementById('root'));