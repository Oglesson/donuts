import Grid from './components/Grid';
import GameHeader from './components/GameHeader';
import CompletionStatus from './components/CompletionStatus';

function App() {
	return (
		<div className='Donuts'>
			<header>
				<h1>Donut Game</h1>
			</header>
			<GameHeader />
			<Grid />
			<CompletionStatus />
		</div>
	);
}

export default App;
