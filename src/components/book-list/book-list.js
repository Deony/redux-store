import React, { Component } from "react";
import { connect } from 'react-redux';

import BookListItem from "../book-list-item";
import withBookStoreService from "../hoc";
import { booksLoaded } from '../../actions';

class BookList extends Component {
	componentDidMount() {
		console.log(this.props);
		const { storeService, booksLoaded } = this.props;
		const data = storeService.getBooks();
		
		booksLoaded(data)
	}
	
	render() {
		const { books } = this.props;
		
		return (
			<ul>
				{
					books.map(book => {
						return (
							<li key={book.id}>
								<BookListItem book={book}/>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

const mapStateToProps = ({books}) => {
	return { books }
};

const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => {
			dispatch(booksLoaded(newBooks));
		}
	}
};

export default withBookStoreService(connect(mapStateToProps, mapDispatchToProps)(BookList));