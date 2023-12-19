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
						<div className="top-5 text-center mt-5">ALL EXPLORE - BANSKO</div>
						<Image src="/poster1.jpg" width={1000} height={500} alt="top" />
					</div>
				</div>
				<div className="body">
					<div className="text-center">
						<h2 className="text-2xl">Who are we..</h2>
						Welcome to Explore Bansko, your gateway to the enchanting mountain
						town in the heart of Bulgaria&apos;s Pirin Mountains. We are
						passionate locals and dedicated sports enthusiasts committed to
						showcasing the wonders Bansko has to offer. Whether you&apos;re an
						adventurer, a culture seeker, or someone simply seeking an escape,
						our platform is your go-to resource for unlocking the secrets of
						this beautiful destination. From unveiling the best ski slopes to
						guiding you through the rich culture of food and entertainment.
						Plus, we offer everything from ski lessons and equipment hire to
						transfers and much more, ensuring a seamless and enjoyable
						experience in this charming mountain retreat. Explore Bansko is your
						compass for an unforgettable experience.
					</div>
					<div className="text-center">
						<h2 className="text-2xl">Contacts</h2>
						Reservations Contact - Lorita Stoimenova <br />
						Telephone: +359 884 727 991 <br />
						Email: allexplorebansko@gmail.com
					</div>
				</div>
			</Curve>
		</>
	);
}
