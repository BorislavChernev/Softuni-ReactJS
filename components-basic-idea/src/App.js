import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import { Timer } from "./components/Timer";
import { Clicker } from "./components/Clicker";
import { Counter } from "./components/Counter";

function App() {
	const books = [
		{
			title: 'Harry Potter',
			author: 'JK Rowling',
			description: 'Wizard school',
		},
		{
			title: 'A Song of Ice and Fire',
			author: 'George R. R. Martin',
			description: 'The best book',
		},
	];

	return (
		<div className="App">
			<header className="App-header">
				<Header>Hello React!</Header>
				<BookList books={books}></BookList>

                <Clicker></Clicker>
                <Counter></Counter>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
