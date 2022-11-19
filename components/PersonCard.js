import Image from "next/image";
import { ImLinkedin } from "react-icons/im";

const PersonalCard = ({ img, name, title, linkedin }) => {
	return (
		<div>
			<Image
				src={img}
				alt={`${name} img`}
				className="h-60 w-60 rounded-lg"
			/>
			<p className="mt-4 font-semibold ">{name}</p>
			<p className="font-light">{title}</p>

			{linkedin && (
				<div className="w-fit cursor-pointer">
					<a href={linkedin} target="_blank" rel="noreferrer">
						<ImLinkedin />
					</a>
				</div>
			)}
		</div>
	);
};

export default PersonalCard;
