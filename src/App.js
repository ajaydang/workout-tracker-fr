import { BrowserRouter, Router } from 'react-router-dom';
import './App.scss';
import AppRouter from './router/index';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
