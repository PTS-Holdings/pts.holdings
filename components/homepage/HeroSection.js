import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import holdingLogo from "../../public/assets/holding-logo.svg";
import holdingArt from "../../public/assets/logo-art.svg";
const HeroSection = () => {
	return (
		<section className=" flex h-screen flex-col ">
			<div className=" relative flex w-full grow flex-col items-center justify-center overflow-hidden md:flex-row-reverse md:items-start md:justify-start">
				<div className="w-fit -translate-y-40 md:h-full md:translate-y-0 md:translate-x-[6vw] md:-rotate-90">
					<Image
						src={holdingArt}
						alt="PTS Holdings logo"
						layout="fixed"
						className="w-full md:h-full md:w-full"
					/>
				</div>

				<div className="z-10 w-fit md:my-auto lg:mr-60">
					<Image
						src={holdingLogo}
						alt="PTS Holdings logo"
						height={100}
						width={300}
					/>
					<p className=" mt-2 w-full text-center tracking-[0.2rem] md:text-sm">
						People . Seed . Technology
					</p>
				</div>
			</div>

			<div className="mx-auto mt-4 pb-8 pt-12">
				<HiOutlineChevronDoubleDown className="text-pts_blue animate-bounce text-6xl" />
			</div>
		</section>
	);
};

export default HeroSection;
