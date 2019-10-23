import React, { Component } from 'react';
import Pokecard from '../pokecard/Pokecard';

export default class Pokedext extends Component {
	render() {
		let title;
		if (this.props.isWinner) {
			title = <h2>WINNER</h2>;
		} else {
			title = <h2>LOSER</h2>;
		}
		return (
			<div>
				<h1>Pokedext</h1>
				<p>{this.props.exp}</p>
				{title}
				<h3>{/*this.props.isWinner ? 'Winner' : 'Loser' */}</h3>
				<div className='card-group'>
					{this.props.pokemon.map(poke => (
						<Pokecard
							key={poke.id}
							id={poke.id}
							name={poke.name}
							type={poke.type}
							exp={poke.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}
