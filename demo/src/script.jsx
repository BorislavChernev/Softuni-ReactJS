const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement)

reactElement = (
	<header className="site-header">
		<h1>Hello from JSX!</h1>
		<h2>React slogan</h2>
	</header>
);

ReactDOM.render(reactElement);