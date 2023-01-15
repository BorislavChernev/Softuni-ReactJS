import { useState } from 'react';

export const Clicker = () => {
	const [clicks, setClicks] = useState(0);

	const clickHandler = (e) => {
		console.log(e);

		setClicks((oldClicks) => oldClicks + 1);
	};

	const dangerClicks = clicks > 10;

	if (clicks > 30) {
		return <h1>Finished Clicks</h1>;
	}

	return (
		<div>
			{dangerClicks && <h1>Danger Clicks</h1>}
			<h2>{clicks > 10 ? <h3>Medium Clicks</h3> : <h4>Normal Clicks</h4>}</h2>
			<button onClick={clickHandler}>{clicks}</button>
		</div>
	);
};
