import React, { Component } from "react";

import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';


export default class ErrorBoundary extends Component {
	state = {
		hasError: false
	};
	
	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true
		})
	}
	
	render() {
		if(this.state.hasError) {
			return <ErrorTwoToneIcon />
		}
		
		return this.props.children;
	}
};