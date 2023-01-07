import PersonalCard from "components/PersonCard";
import Title from "components/Title";
import abdulaziz from "public/assets/abd-elaziz-mandour.png";
import ahmedNafie from "public/assets/ahmedNafie.jpg";
import ehab from "public/assets/ehab.jpg";
import eman from "public/assets/eman.png";
import farida from "public/assets/farida.jpg";
import hossam from "public/assets/hossam.jpg";
import maha from "public/assets/maha.png";
import marwa from "public/assets/marwa.png";
import omar from "public/assets/omar.png";
import omneya from "public/assets/omneya.jpg";
import reem from "public/assets/reem.jpg";
import shady from "public/assets/shady.png";
import tarek from "public/assets/tarek.png";
import walied from "public/assets/walid.png";

const BoardMembers = () => {
	const boardMembers = [
		{
			img: abdulaziz,
			name: "Eng. Abdul-aziz Mandour",
			title: "Chairman",
			company: "PTS Investments Holdings",
			linkedin: null,
		},
		{
			img: maha,
			name: "Eng. Maha Mandour",
			title: "Group Managing Director",
			company: "PTS Investments Holdings",
			linkedin: "https://www.linkedin.com/in/maha-m-61a04177/",
		},
		{
			img: tarek,
			name: "Eng. Tarek Mohamed",
			title: "Chairman",
			company: "ORO Capital Investments",
			linkedin: "https://www.linkedin.com/in/tarek-mohamed-8042695/",
		},
		{
			img: ehab,
			name: "Dr. Ehab Kamel",
			title: "Chairman",
			company: "EDAM SAE",
			linkedin: "https://www.linkedin.com/in/ehabkamel/",
		},
		{
			img: walied,
			name: "Dr. Walid Azab",
			title: "Chief Executive Officer",
			company: "Kemtix Technologies",
			linkedin: "https://www.linkedin.com/in/walidazab/",
		},
		{
			img: eman,
			name: "Dr. Eman Wadie",
			title: "Chief Executive Officer",
			company: "Kemtix Innovations",
			linkedin: "https://www.linkedin.com/in/eman-wadie-88b772a1/",
		},
		{
			img: ahmedNafie,
			name: "Eng. Ahmed Nafie",
			title: `Managing Partner`,
			company: "ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/ahmed-nafie-5873827/",
		},
		{
			img: marwa,
			name: "Marwa Gawdat",
			title: `Chief Executive Officer`,
			company: "EDAM SAE",
			linkedin: "https://www.linkedin.com/in/marwa-gawdat-570794128/",
		},
		{
			img: shady,
			name: "Shady Gabr",
			title: `Managing Director`,
			company: "Alliance Capital",
			linkedin: "https://www.linkedin.com/in/shgabr/",
		},
		{
			img: reem,
			name: "Reem Khatab",
			title: "Limited Partner",
			company: "ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/reem-khattab-090a08232/",
		},
		{
			img: hossam,
			name: "Hussam Mamdouh",
			title: `Limited Partner`,
			company: "ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/hussam-mamdouh-180034215/",
		},
		{
			img: omneya,
			name: "Omneya Al Ghuzzy",
			title: `Limited Partner`,
			company: "ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/omneya-al-ghuzzy-86497a231/",
		},
		{
			img: farida,
			name: "Farida Fahmy",
			title: `Limited Partner`,
			company: "ORO Ventures Lab",
			linkedin: "https://www.linkedin.com/in/farida-fahmy-31058a24b/",
		},
		{
			img: omar,
			name: "Omar Sakr",
			title: `Limited Partner`,
			company: "Kemtix Technologies",
			linkedin: "https://www.linkedin.com/in/omar--sakr/",
		},
	];
	return (
		<section id="board" className="container">
			<Title text="Management Team" />
			<div className="mt-12 grid grid-cols-2 justify-center gap-x-4 gap-y-10 md:grid-cols-3 md:gap-y-10  lg:grid-cols-5">
				{/* <div className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start"> */}
				{boardMembers.map((member) => (
					<PersonalCard
						key={member.name}
						img={member.img}
						name={member.name}
						title={member.title}
						company={member.company}
						linkedin={member.linkedin}
					/>
				))}
			</div>
		</section>
	);
};

export default BoardMembers;
