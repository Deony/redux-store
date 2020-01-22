import React from "react";

import { StoreServiceConsumer } from "../bookstore-service-context";


const withBookStoreService = (Wrapped) => {
	return (props) => {
		return (
			<StoreServiceConsumer>
				{
					(storeService) => {
						return (
							<Wrapped {...props} storeService ={storeService} />
						)
					}
				}
			</StoreServiceConsumer>
		)
	}
};

export default withBookStoreService;