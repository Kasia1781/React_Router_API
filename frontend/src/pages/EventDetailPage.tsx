import { json, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

type EventData = {
	id: string;
	title: string;
	date: number;
	image: string;
	description: string;
};

export default function EventDetailPage() {
	const data = useRouteLoaderData('event-detail') as { event: EventData };

	return (
		<>
			<EventItem event={data} />
		</>
	);
}

//funkcja ładująca do pobierania szczegółów pojedyczego event
export async function loader({ params }: { eventId: string }) {
	const id = params.eventId;

	const response = await fetch('http://localhost:8080/events/' + id);
	//console.log(response);

	if (!response.ok) {
		throw json(
			{ message: 'Could not fetch details for selected event.' },
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData.event as EventData;
	}
}
