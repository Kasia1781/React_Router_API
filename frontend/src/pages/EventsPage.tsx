import { useEffect, useState } from 'react';
import EventList from '../components/EventList';

export default function EventsPage() {
	const [eventsFetching, setEventsFetching] = useState<EventsData[] | null>(
		null
	);
	const [error, setError] = useState<string | null>(null);
	const [isFetching, setIsFetching] = useState(false);

	type EventsData = {
		id: string;
		title: string;
		data: number;
		image: string;
		description: string;
	};

	useEffect(() => {
		async function fetchEvents() {
			setIsFetching(true);

			try {
				const response = await fetch('http://localhost:8080/events');

				if (!response.ok) {
					throw new Error('Fetching events failed!');
				}

				const data = (await response.json()) as { events: EventsData[] };
				setEventsFetching(data.events);
				setError(null);
			} catch (error: any) {
				setError(error.message || 'An unknown error occurred');
				setEventsFetching(null);
			}
			setIsFetching(false);
		}
		fetchEvents();
	}, []);

	return (
		<>
			<h1>Events Page</h1>
			{isFetching && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{eventsFetching && <EventList events={eventsFetching} />}
		</>
	);
}
