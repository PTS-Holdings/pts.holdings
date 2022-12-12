import PersonalCard from "components/PersonCard";
import Title from "components/Title";
import abdulaziz from "public/assets/abd-elaziz-mandour.png";
import ahmedNafie from "public/assets/ahmedNafie.jpg";
import ehab from "public/assets/ehab.jpg";
import eman from "public/assets/eman.png";
import farida from "public/assets/farida.jpg";
import hossam from "public/assets/hossam.jpg";
import maha from "public/assets/maha.png";
import omneya from "public/assets/omneya.jpg";
import reem from "public/assets/reem.jpg";
import tarek from "public/assets/tarek.png";
import walied from "public/assets/walid.png";

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
			title: "Chairman of ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/eman-wadie-88b772a1/",
		},
		{
			img: walied,
			name: "Dr. Walid Azab",
			title: "Chairman of Kemtix Technologies",
			linkedin: "https://www.linkedin.com/in/walidazab/",
		},
		{
			img: ehab,
			name: "Dr. Ehab Kamel",
			title: "Chairman of Edam Healthcare",
			linkedin: "https://www.linkedin.com/in/ehabkamel/",
		},
		{
			img: ahmedNafie,
			name: "Eng. Ahmed Nafie",
			title: `Managing Partner ORO Ventures Lab`,
			linkedin: "https://www.linkedin.com/in/ahmed-nafie-5873827/",
		},
		{
			img: reem,
			name: "Reem Khatab",
			title: "Limited Partner in ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/reem-khattab-090a08232/",
		},
		{
			img: hossam,
			name: "Hussam Mamdouh",
			title: `Limited Partner ORO Ventures Lab`,
			linkedin: "https://www.linkedin.com/in/hussam-mamdouh-180034215/",
		},
		{
			img: omneya,
			name: "Omnia AL Ghuzzay",
			title: `Limited Partner ORO Ventures Lab`,
			linkedin: "https://www.linkedin.com/in/omneya-al-ghuzzy-86497a231/",
		},
		{
			img: farida,
			name: "Farida Fahmy",
			title: `Limited Partner ORO Ventures Lab`,
			linkedin: "https://www.linkedin.com/in/farida-fahmy-31058a24b/",
		},
	];
	return (
		<section id="board" className="container">
			<Title text="Management Team" />
			{/* <div className="mt-12 grid grid-cols-1 justify-center gap-10 md:grid-cols-3 md:justify-start lg:grid-cols-5"> */}
			<div className="mt-12 flex flex-wrap  justify-center gap-10 lg:justify-start">
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
