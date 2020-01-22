import React from "react";


const BookListItem = ({book}) => {
	const { title } = book;
	
	return (
		<div>{title}</div>
	)
};

export default BookListItem;