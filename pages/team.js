import PersonalCard from "components/PersonCard";
import { peopleData } from "data/peopleData";

export default function Team() {
	return (
		<div className="container pt-10 ">
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
