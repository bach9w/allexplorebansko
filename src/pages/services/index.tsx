import Image from 'next/image';
import { Inter } from 'next/font/google';
import Curve from '@/components/Curve';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Curve backgroundColor={'#B0AD98'}>
				<div className="top">
					<div className="text-white text-center text-3xl font-bold">
						<div className="justify-end items-end top-5 right-5 text-end mt-5">
							ALL EXPLORE - BANSKO
						</div>
					</div>
				</div>
				<div className="">
					<h1 className="text-center text-3xl font-bold text-white ">
						Services
					</h1>
					<ul>
						<li>Airport Transfers</li>
						<li>Accomodation</li>
						<li>Ski & Snowboard lessons</li>
						<li>Equipment Hire</li>
						<li>Restaurant Reservations</li>
						<li>Entertainment/ Night Life</li>
					</ul>
				</div>
			</Curve>
		</>
	);
}
