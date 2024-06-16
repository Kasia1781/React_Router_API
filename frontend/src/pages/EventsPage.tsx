import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
	{ id: 'e1', title: 'Some events' },
	{ id: 'e2', title: 'Another events' },
];

export default function EventsPage() {
	return (
		<>
			<h1>Events Page</h1>
			{DUMMY_EVENTS.map((event) => (
				<li key={event.id}>
					<Link to={event.id}>{event.title}</Link>
				</li>
			))}
		</>
	);
}
