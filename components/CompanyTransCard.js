import Image from "next/image";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscChevronDown } from "react-icons/vsc";
const CompanyTransCard = ({ title, img, description, href, borderColor }) => {
	return (
		<div
			className={`column-span-2 relative row-span-2 inline-block rounded-2xl border bg-slate-100 transition md:min-w-[40%]	md:flex-1`}
			style={{ borderBottom: `3px solid ${borderColor}` }}
		>
			<div
				className={`flex h-fit flex-col items-start gap-8  rounded-2xl  p-10 transition-all md:flex-row `}
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
