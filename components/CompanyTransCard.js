import Image from "next/image";
import Button from "./Button";
const CompanyTransCard = ({ title, img, description, href, buttonColor }) => {
	// if (!buttonColor) buttonColor = "#222222";

	return (
		<div className=" mt-12 w-fit bg-gradient-to-b from-pts-red to-pts-blue-base ">
			<div className="flex w-fit flex-col gap-14 bg-white pr-4 md:flex-row">
				<div className="md:w-[60%]">
					<h2 className="mb-2 text-2xl font-semibold">{title}</h2>
					<p className="mb-4">{description}</p>
					{href && (
						<a
							href={href}
							target="_blank"
							rel="noreferrer"
							className="w-fit"
						>
							<Button>
								<p>Visit</p>
							</Button>
						</a>
					)}
				</div>
				<Image src={img} alt={`${title} img`} className=" h-32" />
			</div>
		</div>
	);
};
export default CompanyTransCard;
