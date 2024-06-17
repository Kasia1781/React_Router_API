import EventList from '../components/EventList';
import { useLoaderData } from 'react-router-dom';

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
	const response = await fetch('http://localhost:8080/events');
	//obsługa błędów
	if (!response.ok) {
		//..
	} else {
		const resData = await response.json();
		return resData.events as EventsData[];
	}
}
