import { Book } from './Book';

export const BookList = (props) => {
	return (
		<ul>
			<Book
				title={props.books[0].title}
				author={props.books[0].author}
				description={props.books[0].description}
			/>
			<Book
				title={props.books[1].title}
				author={props.books[1].author}
				description={props.books[1].description}
			/>
		</ul>
	);
};
