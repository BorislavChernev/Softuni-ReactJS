import logo from './logo.svg';
const Header = (props) => {
	return (
		<header className="App-header">
			<h1>{props.text}</h1>
			<h2>{props.name}</h2>
			<img src={logo} className="App-logo" alt="logo" />
		</header>
	);
};

export default Header;
