import EventList from '../components/EventList';
import { json, useLoaderData } from 'react-router-dom';

type EventsData = {
	id: string;
	title: string;
	date: number;
	image: string;
	description: string;
};

export default function EventsPage() {
	const events = useLoaderData() as EventsData[];

	return (
		<>
			<EventList events={events} />
		</>
	);
}

export async function loader() {
	const response = await fetch('http://localhost:8080/eventss');
	//obsługa błędu ze statusem 500
	if (!response.ok) {
		throw json(
			{
				message: 'Could not fetch events!',
			},
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData.events as EventsData[];
	}
}
