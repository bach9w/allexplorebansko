import Image from 'next/image';
import poster from './poster1.jpg';
const PresentHero = () => {
	return (
		<div>
			<div className="mt-8 grid grid-col-3 align-center min-w-[550px] h-[150px] ">
				<div className=" text text-xl font-normal bg-gray-500 uppercase">
					The most optimal way of travel
				</div>
				<div className=" uppercase  text mt-2 w-[300px] text-xl font-normal rounded-b-md bg-opacity-40 bg-white text-gray-500">
					Design your ideal travel route with ALL EXPLORER AI. Our sophisticated
					technology considers your chosen destinations, culinary tastes, and
					accommodation preferences to formulate the best journey specifically
					designed for you.
				</div>
			</div>
		</div>
	);
};

export default PresentHero;
