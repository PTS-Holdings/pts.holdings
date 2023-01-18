import Image from "next/image";
import compassImg from "/public/assets/compass.webp";
const VisionSection = () => {
	return (
		<section className="container flex h-fit flex-col-reverse items-center justify-center gap-12 md:flex-row md:items-end">
			<div className="bg-gradient-to-r from-pts-red to-pts-blue-base pb-2 md:w-[50%]">
				<p className=" bg-white text-3xl font-semibold">
					We aim to be recognized as a direct value add team within
					the investment value chain for the customers we serve
				</p>
			</div>

			<div className="relative h-72 w-72  md:h-96 md:w-96">
				<Image
					src={compassImg}
					alt="Picture of a stairway that with a compass in the middle"
					className=" rounded-xl"
				/>
				<div className="absolute top-0 -z-10 h-full w-full translate-x-6 translate-y-4  bg-pts-red">
					.
				</div>
			</div>
		</section>
	);
};

export default VisionSection;
