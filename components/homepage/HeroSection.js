import Image from "next/image";
import ceoImg from "public/assets/abd-elaziz-mandour.webp";
import signatureImg from "public/assets/signature.svg";
import waveImg from "public/assets/wave.svg";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
const HeroSection = () => {
	return (
		<section
			id="hero"
			className="container relative flex h-[90vh] flex-col items-center justify-center text-center "
		>
			<div className=" flex flex-col items-center justify-center">
				<h2 className="text-4xl font-bold md:text-5xl">
					Ready to build the future
				</h2>
				<p className="mt-4 md:w-1/2">
					We are flexible, understanding that business conditions
					change, goals change, and technology changes. We
					continuously seek ways to develop and improve ourselves,
					both as a company and as individuals
				</p>
				<div className=" mt-8 flex w-fit flex-wrap items-center justify-center gap-4">
					<Image
						src={ceoImg}
						alt="Eng. Abdulaziz mandour"
						className="h-14 w-14 rounded-full"
					/>
					<div>
						<h3 className=" whitespace-nowrap font-bold	">
							Eng. Abdulaziz Mandour
						</h3>
						<p className=" whitespace-nowrap font-light">
							Chairman of PTS Holdings
						</p>
					</div>
					<Image
						src={signatureImg}
						alt="Eng. Abdulaziz mandour"
						className="h-14 w-auto"
					/>
				</div>
			</div>

			{/* <Image
				src={waveImg}
				alt=""
				className="absolute -z-10 w-screen select-none object-cover"
			/> */}

			<div className="mx-auto mt-4 pb-8 pt-12">
				<HiOutlineChevronDoubleDown className="text-pts_blue animate-bounce text-6xl" />
			</div>
		</section>
	);
};

export default HeroSection;
