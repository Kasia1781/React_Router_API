import { Link } from 'react-router-dom';
import classes from './EventItem.module.css';

type EventProps = {
	event: {
		id: string;
		title: string;
		data: number;
		image: string;
		description: string;
	};
	startDeleteHandler: () => void;
};

export default function EventItem({ event }: EventProps) {
	function startDeleteHandler() {
		const proceed = window.confirm('Are you sure?'); //dostajemy true lub false

		//Wywołujemy akcje i przesyłamy dane za pomocą hook useSubmit(). Następnie submit wywołujemy w if przekazując mu 2 argumenty. Pierwszym są dane które chcemy przesłać, 2 argument to metoda w tym przypadku będzie to delete czyli usunięcie danych.
		if (proceed) {
			submit(null, { method: 'delete' }); //nie potrzebujemy 1 argumentu bo nie pobieramy żadnych danych
		}
	}

	return (
		<article className={classes.event}>
			<img src={event.image} alt={event.title} />
			<h1>{event.title}</h1>
			<time>{event.data}</time>
			<p>{event.description}</p>
			<menu className={classes.actions}>
				<Link to='edit'>Edit</Link>
				<button onClick={startDeleteHandler}>Delete</button>
			</menu>
		</article>
	);
}
