import Image from "next/image";
import Link from "next/link";
import holdingLogo from "public/assets/holding-logo.svg";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	let navLinks = [
		{
			name: "About",
			link: "#chairman-word",
		},
		{
			name: "Management Team",
			link: "#board",
		},
		{
			name: "Subsidiaries",
			link: "#subsidiaries",
		},
		{
			name: "Social Responsibilities",
			link: "#social",
		},
	];
	return (
		<nav
			className={`sticky top-0 z-50 flex h-11 w-screen max-w-full items-center justify-between bg-white py-10 shadow-sm md:px-10`}
		>
			<Image
				src={holdingLogo}
				alt="PTS holdings logo"
				className="h-11 w-fit pl-7 md:p-0"
			/>
			<ul
				className={`absolute z-50 flex h-screen w-screen flex-col gap-6 overflow-hidden bg-white
					 transition-all duration-300 ease-in-out md:static md:h-fit md:w-fit md:flex-row md:content-center md:items-center ${
							open ? "top-16 h-screen pt-10" : "-top-10 h-2"
						}`}
			>
				{navLinks.map((navLink) => (
					<a
						key={navLink.name}
						href={navLink.link}
						onClick={() => setOpen(false)}
					>
						<li className="group relative mx-auto w-8/12 cursor-pointer md:w-fit ">
							<span>{navLink.name}</span>
							<span className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-pts-blue-base transition-all group-hover:w-full"></span>
						</li>
					</a>
				))}
			</ul>

			{/* hamburger button */}
			<div
				className="relative z-50  mr-8 flex h-7 w-7 flex-col items-center justify-between md:hidden "
				onClick={() => {
					setOpen(!open);
				}}
			>
				<span
					className={`h-1 w-full transform rounded-full  bg-pts-blue-dark transition duration-300 ease-in-out  ${
						open ? "translate-y-3 rotate-45" : ""
					}`}
				/>
				<span
					className={`h-1 w-full rounded-full  bg-pts-blue-dark transition-all duration-300 ease-in-out  ${
						open ? "h-0 w-0" : "w-full"
					}`}
				/>
				<span
					className={`h-1 w-full transform rounded-full  bg-pts-blue-dark transition duration-300 ease-in-out  ${
						open ? "-translate-y-3 -rotate-45" : ""
					}`}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
