export const Book = (props) => {
	return (
		<li>
			{' '}
			<article>
				<h1>{props.title}</h1>
				<main>Description: {props.description}</main>
				<footer>
					<span>Author: {props.author}</span>
				</footer>
			</article>
		</li>
	);
};
