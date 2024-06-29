import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePages';
import EventsPage from './pages/EventsPage';
import EventDetailPage, {
	action as deleteEventAction,
} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RooyLayout';
import EventsRootLayout from './pages/EventsRootLayout';
import { loader as eventsLoader } from './pages/EventsPage';
import ErrorPage from './pages/ErrorPage';
import { loader as eventDetailLoader } from './pages/EventDetailPage';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, {
	action as newsletterAction,
} from './pages/NewsletterPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{ index: true, element: <EventsPage />, loader: eventsLoader },
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{
								path: 'edit',
								element: <EditEventPage />,
								action: manipulateEventAction,
							},
						],
					},
					{
						path: 'new',
						element: <NewEventPage />,
						action: manipulateEventAction,
					},
				],
			},
			{
				path: 'newsletter',
				element: <NewsletterPage />,
				action: newsletterAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
