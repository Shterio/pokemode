import React, { Component } from 'react';

import './Pokecard.scss';

const POKN_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThreeNumber = number => (number <= 999 ? `00${number}`.slice(-3) : number);
export default class Pokecard extends Component {
	render() {
		const { name, id, exp, type } = this.props;
		const imgSrc = `${POKN_IMG}${padToThreeNumber(id)}.png`;

		return (
			<div className='card'>
				<h1>{name}</h1>
				<img src={imgSrc} alt={name} />
				<p>Id: {padToThreeNumber(id)}</p>
				<p>Type: {type}</p>
				<p>Exp: {exp}</p>
			</div>
		);
	}
}
