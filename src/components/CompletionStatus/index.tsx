import React from 'react';

export const CompletionStatus = (props: {
	gameWon: boolean;
	winner: string;
}) => {
	const { gameWon = false, winner = 'x' } = props;

	return (
		<div className='Status'>
			<p>{gameWon ? `Game has been won by ${winner}` : `Game is a draw!`}</p>
		</div>
	);
};

export default CompletionStatus;
