import PersonalCard from "components/PersonCard";
import Title from "components/Title";
import abdulaziz from "public/assets/abd-elaziz-mandour.png";

const BoardMembers = () => {
	return (
		<section className="container">
			<Title text="Board Members" />
			<div className="mt-12 flex flex-wrap justify-center gap-10 md:justify-start">
				<PersonalCard
					img={abdulaziz}
					name={"Eng. Abdul-aziz Mandour"}
					title={"Chairman of PTS Holdings"}
				/>
				<PersonalCard
					img={abdulaziz}
					name={"Eng. Maha Mandour"}
					title={"Group Managing Director"}
					linkedin="https://www.linkedin.com/in/maha-m-61a04177/"
				/>
			</div>
		</section>
	);
};

export default BoardMembers;
