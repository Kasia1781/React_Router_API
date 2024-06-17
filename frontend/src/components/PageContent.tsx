import { type ReactNode } from 'react';
import classes from './PageContent.module.css';

type PageContentProps = {
	title: string;
	children: ReactNode;
};

export default function PageContent({ title, children }: PageContentProps) {
	return (
		<div className={classes.content}>
			<h1>{title}</h1>
			{children}
		</div>
	);
}
