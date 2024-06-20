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
		//...
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
