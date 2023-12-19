import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import '@/styles/styles.scss';
import { useEffect, useState } from 'react';

export default function MyApp({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;
	return (
		<div className="main">
			<div className="header">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/services">Services</Link>
			</div>
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
		</div>
	);
}
