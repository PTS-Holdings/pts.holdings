import PersonalCard from "components/PersonCard";
import Title from "components/Title";
import abdulaziz from "public/assets/abd-elaziz-mandour.png";
import eman from "public/assets/eman.png";
import maha from "public/assets/maha.png";
import tarek from "public/assets/tarek.png";
import walied from "public/assets/waled.jpeg";

const BoardMembers = () => {
	const boardMembers = [
		{
			img: abdulaziz,
			name: "Eng. Abdul-aziz Mandour",
			title: "Chairman of PTS Holdings",
			linkedin: null,
		},
		{
			img: maha,
			name: "Eng. Maha Mandourr",
			title: "Group Managing Director",
			linkedin: "https://www.linkedin.com/in/maha-m-61a04177/",
		},
		{
			img: tarek,
			name: "Eng. Tarek Mohamed",
			title: "Chairman of ORO Capital",
			linkedin: "https://www.linkedin.com/in/tarek-mohamed-8042695/",
		},
		{
			img: eman,
			name: "Dr. Eman Wadie",
			title: "Chairman of ORO Ventures Lap",
			linkedin: "https://www.linkedin.com/in/eman-wadie-88b772a1/",
		},
		{
			img: walied,
			name: "Dr. Walid Azab",
			title: "Chairman of Kemtix Technologies",
			linkedin: "https://www.linkedin.com/in/walidazab/",
		},
	];
	return (
		<section id="board" className="container">
			<Title text="Board Members" />
			<div className="mt-12 flex flex-wrap justify-center gap-10 md:justify-start">
				{boardMembers.map((member) => (
					<PersonalCard
						key={member.name}
						img={member.img}
						name={member.name}
						title={member.title}
						linkedin={member.linkedin}
					/>
				))}
			</div>
		</section>
	);
};

export default BoardMembers;
