import Image from "next/image";
import compassImg from "/public/assets/compass.jpg";
const VisionSection = () => {
	return (
		<section className="container flex h-fit flex-col-reverse items-center justify-center gap-12 md:flex-row md:items-end">
			<div className="bg-gradient-to-r from-pts-red to-pts-blue-base pb-2 md:w-[50%]">
				<p className=" bg-white text-3xl">
					We aim to be recognized as a direct value add team within
					the investment value chain for the customers we serve.
				</p>
			</div>

			<div className="h-60 w-60  md:w-96">
				<Image
					src={compassImg}
					alt="Picture of a stairway that with a compass in the middle"
					className=" rounded-xl"
				/>
			</div>
		</section>
	);
};

export default VisionSection;
