import React from 'react';
import Cell from '../Cell';

export const Grid = (props: { gridSize: number }) => {
	const { gridSize = 3 } = props;

	const gridSizeStyle = 'auto '.repeat(gridSize);
	const gridTemplateDefinition = {
		gridTemplate: `${gridSizeStyle} / ${gridSizeStyle}`,
	};

	const cellFormation = [];
	let cellKey = 0;

	for (let r = 0; r < gridSize; r++) {
		for (let c = 0; c < gridSize; c++) {
			cellKey++;
			cellFormation.push(<Cell key={cellKey} coords={{ x: c, y: r }} />);
		}
	}
	return (
		<div className='Grid' style={gridTemplateDefinition}>
			{cellFormation}
		</div>
	);
};

export default Grid;
