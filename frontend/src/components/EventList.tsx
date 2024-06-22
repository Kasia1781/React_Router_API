import classes from './EventList.module.css';
import { Link } from 'react-router-dom';

type EventsProps = {
	events: {
		id: string;
		title: string;
		data: number;
		image: string;
		description: string;
	};
};

export default function EventList({ events }: EventsProps) {
	return (
		<div className={classes.events}>
			<h1>All Events</h1>
			<ul className={classes.list}>
				{events.map((event) => (
					<li key={event.id} className={classes.item}>
						<Link to={`/events/${event.id}`}>
							<img src={event.image} alt={event.title} />
							<div className={classes.content}>
								<h2>{event.title}</h2>
								<time>{event.date}</time>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
