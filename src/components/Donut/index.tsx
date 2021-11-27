import React from 'react';
import donuts from '../../assets/images/donuts.svg';
import './donut.scss';

export const Donut = (props: { player: string }) => {
	const { player } = props;

	let imgSrc = '';

	if (player === 'o') {
		imgSrc = `${donuts}#pink-donut`;
	} else {
		imgSrc = `${donuts}#choc-donut`;
	}
	return (
		<svg
			viewBox='0 0 100 100'
			className='donut-icon'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<use xlinkHref={imgSrc}></use>
		</svg>
	);
};

export default Donut;
