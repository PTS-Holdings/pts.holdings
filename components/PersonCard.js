import Image from "next/image";
import { ImLinkedin } from "react-icons/im";

const PersonalCard = ({ img, name, title, company, linkedin }) => {
	return (
		<div className="w-full md:w-52">
			<Image
				src={img}
				alt={`${name} img`}
				className="w-full rounded-lg md:w-52"
			/>
			<p className="mt-4 font-bold">{name}</p>
			<p className="font-normal">{title}</p>
			<p className="font-thin text-slate-600">{company}</p>

			{linkedin && (
				<div className="mt-2 w-fit cursor-pointer">
					<a href={linkedin} target="_blank" rel="noreferrer">
						<ImLinkedin />
					</a>
				</div>
			)}
		</div>
	);
};

export default PersonalCard;
