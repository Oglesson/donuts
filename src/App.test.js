import React from 'react';

import { mount } from 'enzyme/build';
import 'TestUtilities/enzyme';

import App from './App';

describe('Donuts Noughts and Crosses', () => {
	it('renders and is empty', () => {
		const construct = mount(<App />);
		expect(construct.find('.Grid').exists()).toBeTruthy();
	});
	it('adds a donut when square is clicked', () => {
		/*const construct = mount(
			<div style={{ width: '1200px' }}>
				<VideoHeader
					videos={testInitialState.videos}
					isHeaderClosed={testInitialState.is_header_closed}
				/>
			</div>,
		);
		expect(construct.find('.VideoHeader--visible')).toHaveLength(1);
		const findButton = construct.find('.icon-close').at(0);
		findButton.simulate('click');
		expect(construct.find('.VideoHeader--visible')).toHaveLength(0);*/
	});
	it('cannot change/unclick donut once added on click', () => {
		/*const construct = mount(
			<div style={{ width: '1200px' }}>
				<VideoHeader
					videos={testInitialState.videos}
					isHeaderClosed={testInitialState.is_header_closed}
				/>
			</div>,
		);
		const findButton = construct.find('.VideoHeader__video').at(0);
		findButton.simulate('click');
		expect(construct.find('.VideoHeader__playVideoLargeSection')).toHaveLength(
			1,
		);*/
	});
	it('shows a win when same donuts occupy a row', () => {});
	it('shows a win when same donuts occupy a coloumn', () => {});
	it('shows a win when donuts occupy a row', () => {});
	it('declares a draw when no lines occur', () => {});
	it('resets the grid/game when reset button is hit', () => {});
});
