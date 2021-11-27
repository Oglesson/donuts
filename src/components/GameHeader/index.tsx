import React from 'react';
import Donut from '../Donut';
import './gameheader.scss';

export const GameHeader = (props: {
	playStatus: string;
	currentPlayer: string;
}) => {
	const { playStatus = 'ongoing', currentPlayer = 'x' } = props;
	return (
		<div className='GameHeader'>
			<h2>{`Game is ${playStatus}`}</h2>
			{playStatus === 'ongoing'
				? `It's ${(<Donut player={currentPlayer} />)}'s turn`
				: null}
			<button>Reset Game</button>
		</div>
	);
};

export default GameHeader;
