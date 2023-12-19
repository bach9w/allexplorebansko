import Image from 'next/image';

export default function Component() {
	return (
		<div className=" container grid grid-cols-1 sm:grid-cols-1 gap-6 px-4 py-6">
			<div className="flex flex-col sm:flex-row gap-4 items-center">
				<Image
					alt="Placeholder"
					className="w-34 h-34 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg"
					height="350"
					src="/poster2.png"
					width="350"
				/>
				<div className="space-y-2">
					<h2 className="text-md sm:text-2xl font-bold">MANAGE YOUR FLYES</h2>
					<p className="text-gray-100 text-sm sm:text-base ">
						Design your ideal travel route with ALL EXPLORER AI. Our
						sophisticated technology considers your chosen destinations,
						culinary tastes, and accommodation preferences to formulate the best
						journey specifically designed for you.
					</p>
				</div>
			</div>
			<div className="bg-white rounded-b-xl text-black flex flex-col justify-center sm:flex-row gap-4 items-center">
				<div className="space-y-2">
					<h2 className="text-xl sm:text-2xl font-bold">
						Airport Transfer Services
					</h2>
				</div>
				<Image
					alt="Placeholder"
					width={400}
					height={400}
					className=" object-center object-cover"
					src="/poster3.png"
					style={{}}
				/>
				<p className="text-gray-700 font-thin text-sm sm:text-base uppercase">
					Efficient, reliable airport transfer services: Comfortable rides,
					timely arrivals, professional drivers, hassle-free travel, and 24/7
					customer support.
				</p>
			</div>
			<div className="flex">
				<div className="bg-blue-500 w-1/2 items-center justify-center flex">
					Private CARS
				</div>
				<div className="bg-red-500 w-1/2">
					Mini BUS
					<div className="bg-white text-black text-sm">up to 8 people</div>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-4 items-center">
				<Image
					alt="Placeholder"
					className="h-[200px] opacity-70 rounded-full object-cover"
					height="250"
					src="/poster4.png"
					style={{
						aspectRatio: '250/250',
						objectFit: 'cover',
					}}
					width="500"
				/>
				<div className="space-y-2">
					<h2 className="text-xl sm:text-2xl font-thin uppercase">
						Accommodation
					</h2>
					<p className="text-white 0 text-sm sm:text-base uppercase font-thin">
						your comfort is our top priority. Nestled in the heart of ALL
						EXPLORE, our accommodation offers a perfect blend of luxury and
						homely comfort, making it an ideal choice for both leisure and
						business travelers.
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center sm:flex-row gap-4 items-center bg-black">
				<div className="space-y-2">
					<h2 className="text-xl sm:text-2xl font-bold uppercase ">
						ski and snoboard lessons
					</h2>
					<p className="text-gray-600 bg-white text-sm sm:text-base uppercase">
						PLAN YOUR SKI HOLIDAY WITH ALL EXPLORE AI
					</p>
				</div>
			</div>

			<div className="w-full">SKI LESSONS</div>
			<div className="bg-gray-500 mt-[-20px] items-center flex">
				<div className="bg-gray-500 text-xs mt-[0px] uppercase w-1/5">
					1-2-1 sessions
				</div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">
					Small group (2-4)
				</div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">
					Large group (up to 8)
				</div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">Children </div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">
					Shared groups{' '}
				</div>
			</div>
			<div className="w-full">SNOWBOARD LESSONS</div>
			<div className="bg-gray-500 mt-[-20px] items-center flex">
				<div className="bg-gray-500 text-xs mt-[0px] uppercase w-1/5">
					1-2-1 sessions
				</div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">
					Small group (2-4)
				</div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">
					Large group (up to 8)
				</div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">Children </div>
				<div className="bg-gray-500 text-xs  w-1/5 uppercase">
					Shared groups
				</div>
			</div>
			<div className="equipment items-center flex justify-center bg-white text-black font-extralight h-[100px]">
				EQUIPMENT HIRE
			</div>
			<div className="font-thin text-sm mt-[-20px]">
				HELP YOU TO FIND THE BEST EQUIPMENT
			</div>
		</div>
	);
}
