import React, { Component } from 'react';
import Pokedext from '../pokedex/Pokedext';
import data from '../../data';

class Pokegame extends Component {
	state = data;

	render() {
		let hand1 = [];
		let hand2 = [...this.state.pokemon];

		while (hand1.length < hand2.length) {
			let randomIndex = Math.floor(Math.random() * hand2.length);
			let randomPokemon = hand2.splice(randomIndex, 1)[0];
			hand1.push(randomPokemon);
		}
		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

		return (
			<div>
				<Pokedext pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
				<Pokedext pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
			</div>
		);
	}
}

export default Pokegame;
