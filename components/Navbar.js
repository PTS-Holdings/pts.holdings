import { companiesData } from "data/companiesData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	let navLinks = [
		{
			name: "About",
			description: "Our Mission and vision",
			href: "/about",
		},
		{
			name: "Subsidiaries",
			description: "Our Subsidiaries companies",
			href: "/subsidiaries",
			hoverOptions: Object.keys(companiesData).map((company) => ({
				name: companiesData[company].name,
				href: `/subsidiaries/${company}`,
			})),
		},
		{
			name: "Management Team",
			description: "Top leading team in the area",
			href: "/team",
		},
		{
			name: "Social Responsibilities",
			description: "Our aim towards our society",
			href: "/social-responsibilities",
		},
		{
			name: "Investment Portfolio",
			href: "/investment-portfolio",
		},
		{
			name: "Contact us",
			href: "/contact",
		},
	];

	console.log(navLinks);
	return (
		<header>
			<nav
				className={`$ h-24 w-full bg-white py-10 px-4 shadow-lg md:px-10 lg:h-fit lg:min-h-[180px] lg:py-10`}
			>
				<div className=" container hidden flex-wrap items-center justify-between lg:flex">
					<Link href="/">
						<div className="relative h-[35px] w-[57px] md:h-[88px] md:w-[140px]">
							<Image
								src="/assets/logos/holdings-nav-logo.svg"
								alt="PTS holdings logo"
								layout="fill"
								fill
							/>
						</div>
					</Link>
					<div>
						<ul className="mb-4 flex justify-end">
							{navLinks.map((navLink) => {
								if (navLink.description) return "";
								return (
									<a key={navLink.name} href={navLink.href}>
										<li className="caption-medium mr-6 cursor-pointer">
											{navLink.name}
										</li>
									</a>
								);
							})}
						</ul>
						<ul className="flex">
							{navLinks.map((navLink, i) => {
								if (!navLink.description) return "";
								return (
									<li
										key={navLink.name}
										className="group relative  flex h-16 items-center"
									>
										{i != 0 && (
											<div className="mx-8 h-full w-[0.5px] bg-navy-dark"></div>
										)}
										<a href={navLink.href}>
											<p className="body-medium-bold text-gray-bold">
												{navLink.name}
											</p>
											<p className="caption-regular w-[80%] text-gray-bold">
												{navLink.description}
											</p>
										</a>
										{navLink.hoverOptions && (
											<ul className="absolute top-20 -right-10 hidden h-fit w-fit border-t-[9px] border-navy-basic bg-white py-4 px-4 shadow-lg delay-75 group-hover:block">
												{navLink.hoverOptions.map(
													(option, i) => (
														<Link
															href={option.href}
															key={option.name}
														>
															<li
																className={`w-full cursor-pointer  ${
																	i !=
																		navLink
																			.hoverOptions
																			.length -
																			1 &&
																	"mb-9"
																}`}
															>
																{option.name}
															</li>
														</Link>
													)
												)}
											</ul>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className="flex h-full  items-center justify-between lg:hidden">
					{/* hamburger button */}
					<Link href="/">
						<div className="relative h-[50px] w-[81px] md:h-[88px] md:w-[140px]">
							<Image
								src="/assets/logos/holdings-nav-logo.svg"
								alt="PTS holdings logo"
								layout="fill"
								fill
							/>
						</div>
					</Link>

					<div
						className="relative z-50 flex h-7 w-7 flex-col items-center justify-between "
						onClick={() => {
							setOpen(!open);
						}}
					>
						<span
							className={`h-1 w-full transform rounded-full  bg-navy-basic transition duration-300 ease-in-out  ${
								open ? "translate-y-3 rotate-45" : ""
							}`}
						/>
						<span
							className={`h-1  rounded-full bg-navy-basic transition-all duration-300 ease-in-out ${
								open ? "h-0 w-0" : "w-full"
							}`}
						/>
						<span
							className={`h-1 w-full transform rounded-full  bg-navy-basic transition duration-300 ease-in-out  ${
								open ? "-translate-y-3 -rotate-45" : ""
							}`}
						/>
					</div>
				</div>
			</nav>
			<div
				className={` h-[80vh] bg-white pt-16  lg:hidden  ${
					open
						? "fixed top-0 left-0 z-40 block h-screen w-full"
						: "hidden"
				}`}
			>
				<ul className="container ">
					{navLinks.map((navLink, i) => (
						<a key={navLink.name} href={navLink.href}>
							<li
								className={` border-dashed border-b-gray-basic py-6
								${i != navLinks.length - 1 && "border-b-2"}`}
							>
								{navLink.name}
							</li>
						</a>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
