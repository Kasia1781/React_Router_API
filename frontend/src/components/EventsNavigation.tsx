import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

export default function EventNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to='/events'
							className={({ isActive }) => (isActive ? classes.active : '')}
							end>
							All events
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/events/new'
							className={({ isActive }) => (isActive ? classes.active : '')}>
							New Events
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
