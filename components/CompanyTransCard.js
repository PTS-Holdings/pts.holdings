import Image from "next/image";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscChevronDown } from "react-icons/vsc";
const CompanyTransCard = ({ title, img, description, href, buttonColor }) => {
	const [isOpened, setOpened] = useState(true);
	// if (!buttonColor) buttonColor = "#222222";

	return (
		<div
			className={`relative inline-block rounded-2xl border bg-white  drop-shadow-sm transition md:min-w-[40%] md:flex-1	 ${
				isOpened
					? "column-span-2 row-span-2 bg-slate-100 "
					: " h-36 overflow-hidden "
			}`}
		>
			<div
				className={` flex flex-col items-start gap-8 rounded-2xl  p-10  transition-all md:flex-row ${
					isOpened ? "h-fit " : " overflow-hidden"
				}`}
			>
				<div className="w-[60%]  md:w-[20%] ">
					<Image
						src={img}
						alt={`${title} img`}
						className="h-20 w-fit"
					/>
				</div>
				<div className="md:w-[80%]">
					<h2 className="text-2xl font-bold">{title}</h2>
					{href && (
						<a
							href={href}
							target="_blank"
							rel="noreferrer"
							className="flex w-fit items-center underline"
						>
							<span>{<FiExternalLink />}</span>
							<p>{href.split("/")[2]}</p>
						</a>
					)}
					<p className=" mt-2 h-fit break-inside-auto">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
export default CompanyTransCard;
