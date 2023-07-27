import PersonalCard from "components/PersonCard";
import { peopleData } from "data/peopleData";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Team() {
	return (
		<div className="container pt-10 ">
			<NextSeo
				title="PTS Holdings | Team"
				description="Discover our experienced management team at PTS Investments Holdings, providing strategic advice and extensive networks to clients in Egypt and the MEA region."
			/>

			<h1 className="body-medium-bold lg:header3 mb-6 text-center text-navy-basic md:text-left">
				Management Team
			</h1>

			<p>
				PTS Holdings was established by a group of HNW & Investors with
				investment banking, Private equity Telco's, Startups, &
				financial institutions.
			</p>
			<br />
			<p>
				At PTS Investment Holdings, our success is driven by the
				expertise and dedication of our management team. With a diverse
				group of seasoned professionals at the helm, we strive to
				provide unparalleled financial services and investment solutions
				to our valued clients.
			</p>

			<div className=" mt-5 flex flex-col gap-5">
				<div className="flex flex-col items-center gap-7 md:flex-row">
					<div className="w-1/2">
						<p className=" text-4xl font-extrabold text-red-basic ">
							50+
						</p>
						<p className="text-lg font-bold text-navy-basic md:text-xl">
							Accumulative years of experience
						</p>
					</div>
					<div className="w-1/2">
						<p className=" text-4xl font-extrabold text-red-basic ">
							250+
						</p>
						<p className="text-lg font-bold text-navy-basic md:text-xl">
							Deals & Mandates worked on since 2007
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center gap-7 md:flex-row">
					<div className="w-1/2">
						<p className=" text-4xl font-extrabold text-red-basic ">
							150M +
						</p>
						<p className="text-lg font-bold text-navy-basic md:text-xl">
							USD was raised in transactions closed
						</p>
					</div>
					<div className="w-1/2">
						<p className=" text-4xl font-extrabold text-red-basic ">
							250+
						</p>
						<p className="text-lg font-bold text-navy-basic md:text-xl">
							countries where our mandates and portfolio are
							located
						</p>
					</div>
				</div>
			</div>

			<div className="relative mt-6 overflow-hidden rounded-2xl">
				<Image
					src="/assets/pics/team.jpg"
					alt="PTS Management Team"
					width={1920}
					height={1080}
					style={{ objectFit: "contain" }}
				/>
			</div>

			{/* <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
				{peopleData.map((person) => (
					<PersonalCard key={person.name} {...person} />
				))}
			</div> */}
		</div>
	);
}
