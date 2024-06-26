import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function EditEventPage() {
	const data = useRouteLoaderData('event-detail');

	return <EventForm event={data} method='patch' />; //metoda patch do edycji wydarzenia
}
