import Image from "next/image";
import ceoImg from "public/assets/abd-elaziz-mandour.png";
import signatureImg from "public/assets/signature.svg";
const ChairmanWord = () => {
	return (
		<section id="chairman-word" className=" container md:px-20">
			<p className="">
				Since our evolving on 2012, PTS investments holdings group has
				emerged as the premier provider of managed services, project
				management, technology solutions, and business venture builders
				to the investment management industry.
				<br />
				PTS group of companies have been focusing to add a significant
				value to the global disruptive technological ecosystems and
				industry-wide platforms through developing and investing in the
				people and technology.
				<br />
				We have adapted ecosystem-based approach enabling us to serve as
				a catalyst for our investment portfolios success. Tapping our
				deep industry knowledge of our diverse team members and our
				robust ecosystem of collaborative partners enabling us to
				provide a suite of tailored products and services for both our
				motivated entrepreneurs, governments, and investors to help
				businesses build resilience, spur innovation, expedite growth
				and expand into key markets.
				<br />
				<br />
				On 2021, we had a strategic direction to build and manage secure
				and valuable investment portfolios in the disruptive
				technologies across the globe aiming to ensure maximum benefits,
				fewer risks as well as seeding in the entrepreneurs over the
				globe.
			</p>

			<div className=" mt-8 flex w-fit flex-wrap items-center justify-center gap-4">
				<Image
					src={ceoImg}
					alt="Eng. Abdulaziz mandour"
					className="h-14 w-14 rounded-full"
				/>
				<div>
					<h3 className=" font-bold">Eng. Abdulaziz Mandour</h3>
					<p className=" font-light">Chairman of PTS Holdings</p>
				</div>
				<Image
					src={signatureImg}
					alt="Eng. Abdulaziz mandour"
					className="h-14 w-auto"
				/>
			</div>
		</section>
	);
};

export default ChairmanWord;
