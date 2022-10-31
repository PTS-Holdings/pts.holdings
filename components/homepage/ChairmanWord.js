import Image from "next/image";
import ceoImg from "public/assets/abd-elaziz-mandour.png";
import signatureImg from "public/assets/signature.svg";
const ChairmanWord = () => {
	return (
		<section className=" container md:px-20">
			<p className="">
				Since our evolving on 2012, PTS has emerged as the premier
				provider of x-tech solutions, connecting the dots through
				digital leading-edge innovation platforms based on seamless
				cognitive customer experience to the investment management
				industry.
				<br />
				our group of companies have been focusing to add a significant
				value to the global disrupted technological ecosystems and
				industrywide platforms through develop and invest in the people
				and technology focusing on startups, early -stage companies and
				midsize corporates.
				<br />
				we have adapted an ecosystem-based approach enabling us to serve
				as a catalyst for our investment portfolios success. Tapping our
				deep industry knowledge of our diverse team members and our
				robust ecosystem of collaborative partners enabling us to
				provide a suite of tailored products and services for both our
				motivated entrepreneurs and investors to help businesses build
				resilience, spur innovation, expedite growth and expand into key
				markets
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
					className="h-14 "
				/>
			</div>
		</section>
	);
};

export default ChairmanWord;
