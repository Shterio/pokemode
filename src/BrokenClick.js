import React, { Component } from 'react';

class BrokenClick extends Component {
	constructor(props) {
		super(props);
		this.state = { clicked: 0 };
	}
	handleClick = e => {
		let num = Math.floor(Math.random() * 10) + 1;
		this.setState({ clicked: num });
	};
	render() {
		return (
			<div>
				<h1>{this.state.clicked}</h1>
				{this.state.clicked === 7 ? <h2>WINNER</h2> : <button onClick={this.handleClick}>Click Me!</button>}
			</div>
		);
	}
}

export default BrokenClick;
