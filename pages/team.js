import PersonalCard from "components/PersonCard";
import { peopleData } from "data/peopleData";
import { NextSeo } from "next-seo";

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
			<div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
				{peopleData.map((person) => (
					<PersonalCard key={person.name} {...person} />
				))}
			</div>
		</div>
	);
}
