import React from 'react';
import type { CoOrds } from '../../types';

export const Cell = (props: { coords: CoOrds }) => {
	return (
		<div className='Cell'>
			<p>This is a cell.</p>
		</div>
	);
};

export default Cell;
