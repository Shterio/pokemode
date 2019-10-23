import React, { Component } from 'react';
import './App.css';
import Pokegame from './components/Pokegame.js/Pokegame';
import BrokenClick from './BrokenClick';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Pokegame />
				<BrokenClick />
			</div>
		);
	}
}

export default App;
