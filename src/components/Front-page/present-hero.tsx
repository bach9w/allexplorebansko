import Image from 'next/image';
import poster from './poster1.jpg';
import Component from './column-hero';
const PresentHero = () => {
	return (
		<>
			<div>
				<div className="mt-0 grid grid-col-3 align-center min-w-[550px] h-[20px] ">
					<div className=" text text-xl font-normal bg-white text-black uppercase">
						The most optimal way of travel
					</div>
				</div>
			</div>
			<Component />
		</>
	);
};

export default PresentHero;
