import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePages';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RooyLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{index: true, element: <HomePage />},
			{ path: '/events', element: <EventsPage /> },
			{ path: '/events/:eventID', element: <EventDetailPage /> },
			{ path: 'events/new', element: <NewEventPage /> },
			{ path: 'events/:eventID/edit', element: <EditEventPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
