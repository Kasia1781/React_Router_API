import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

//aby sprawdzić aktualny stan ładowania danych uzywamy hook useNavigation.

export default function RootLayout() {
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{navigation.state === 'loading' && <p>Loading...</p>}
				<Outlet />
			</main>
		</>
	);
}
