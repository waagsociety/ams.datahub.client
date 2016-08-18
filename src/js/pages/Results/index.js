import React from 'react';

export default class Results extends React.Component {
	
	render() {
		const { query } = this.props.location;
		console.log(query);
		return (
			<h1>Results</h1>
		);
	}

}