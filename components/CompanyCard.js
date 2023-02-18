import Image from "next/image";

const CompanyCard = ({ companyName, logo, description, href }) => {
	return (
		<div className="relative h-[371px] w-[278px]  rounded-xl px-4 pb-6 text-center shadow-xl ">
			<div className="absolute left-1/2 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded-full bg-white shadow-xl">
				<div className="relative h-[80%] w-[80%] ">
					<Image
						src={logo}
						layout="fill"
						alt={`${companyName} Logo`}
						fill
					/>
				</div>
			</div>
			<div className="flex h-full flex-col justify-between space-y-4 pt-24">
				<div className="space-y-2">
					<h3 className="body-large-bold">{companyName}</h3>
					<p className="body-medium-regular  text-gray-bold line-clamp-6">
						{description}
					</p>
				</div>
				<div className="body-medium-bold text-red-basic ">
					<a href={href}>Learn More</a>
				</div>
			</div>
		</div>
	);
};
export default CompanyCard;
