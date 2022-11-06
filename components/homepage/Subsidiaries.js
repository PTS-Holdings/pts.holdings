import CompanyTransCard from "components/CompanyTransCard";
import Title from "components/Title";
import edamLogo from "public/assets/edam-logo.svg";
import igniteLogo from "public/assets/ignite.svg";
import kemtechlogo from "public/assets/kemtech-logo.svg";
import kemtixLogo from "public/assets/kemtix.svg";
import mentorsLogo from "public/assets/mentors.svg";
import mentors4africaLogo from "public/assets/mentors4africa.svg";
import oroPartnersLogo from "public/assets/oro-partners.svg";
import oroVentureLogo from "public/assets/oro-vl.svg";
import oroCapitalLogo from "public/assets/oroCapitalLogo.svg";
import ptsProjectsLogo from "public/assets/pts-projects.svg";
const Subsidiaries = () => {
	return (
		<section className="container">
			<Title text="PTS Subsidiaries" />
			<CompanyTransCard
				title="ORO Capital Investment"
				description={
					"The company provides a full-fledged investment services serving diverse customers from startups to enterprises seeking for valuable investment opportunities, our services include MicroFinancing, Fund raising and M&A advisory"
				}
				img={oroCapitalLogo}
				href="https://oro-capital.com"
			/>

			<CompanyTransCard
				title="ORO Partners"
				description={
					"ORO Partners (CoreAngels MEA) is an angel investment network connect and support business angels, early stage investors, entrepreneurs and corporates seeking investing opportunities mainly in tech-disruptive innovations throughout Middle-East and Africa."
				}
				img={oroPartnersLogo}
			/>

			<CompanyTransCard
				title="ORO Ventures Lap"
				description={
					"ORO Ventures Lap offers managed services related to OroCapital global funds and wealth management portfolio, talent acquisitions, venture studio support functions, training, and human resources development, ORO Ventures Lap deliverers the required human resources to support activities related to capital markets, we have distinct teams with diversified expertise that participated in mega projects in 20 countries."
				}
				img={oroVentureLogo}
			/>

			<CompanyTransCard
				title="PTS Projects"
				description={
					"PTS Projects, a subsidiary of PTS Holdings Inc., a leading Tech-investments group of companies that aims to add direct value in the investment value chain through its expertise along with global partners building robust ecosystem to help businesses mainly entrepreneurs, startups and SMES, "
				}
				img={ptsProjectsLogo}
			/>

			<CompanyTransCard
				title="Kemtix Technologies"
				description={
					"Specialized in Advanced Technological Industries to blend our senior level engineering expertise with our innovative ideas and link our expert capabilities with business objectives resulting in the delivery of next generation products, with managed and professional services delivery."
				}
				img={kemtixLogo}
			/>

			<CompanyTransCard
				title="Ignite"
				description={
					"Ignite helps revolutionize education in Schools to build a better future for education and for the learner. They aspire to reshape the methods of thinking, learning and training and to provide a training and scientific service for children and adults through a trained and qualified team based on the methods of management theory using the latest technology today (Virtual / Augmented Reality) and based on the activities and practical situations derived from their values and our Arab civilization to contribute to the provision of distinct human cadres"
				}
				img={igniteLogo}
			/>

			<CompanyTransCard
				title="Edam"
				description={
					"Edam is the largest health care network in Egypt that provides you with medical examinations in various medical specialties with the best doctors and at the prices of the Engineers and Doctors Syndicate"
				}
				img={edamLogo}
			/>

			<CompanyTransCard
				title="Mentors"
				description={
					"Our Mentors are world-class CEOs, business leaders, investors, academics and entrepreneurs that support Endeavor Entrepreneurs and Endeavor candidates by sharing their experience and knowledge, driven by a desire to give-back to the entrepreneurial ecosystem owing to the role Entrepreneurs play in catalyzing economic growth in Egypt. Mentors encourage entrepreneurs to not only grow, but also multiply their influence by giving back to the next generation of business leaders."
				}
				img={mentorsLogo}
			/>

			<div className="mt-16">
				<Title text="Social Responsibilities" />
			</div>

			<CompanyTransCard
				title="Kemtech valley"
				description={
					"Kemtech Valley initiative is powered by PTS Projects in cooperation with NCT University and managed by ORO Ventures Lab. The Egyptian Applied Technological Valley Kemtech Valley initiative aims to build highly specialized technical cadres and develop the creative capabilities of Egyptian youth, as well as Support startups, small and medium-sized companies in the field of applied technology and build digital community awareness through various programs "
				}
				img={kemtechlogo}
				href="https://kemtech.org"
			/>

			<CompanyTransCard
				title="Mentors 4 Africa"
				description={
					"MENTORS’ is group of companies established with one Mission, “Supporting economies through supporting 360 degrees the SMEs to be Educated, build and grow”.  MENTORS’ 4 AFRICA is an initiative built by MENTORS’ HQ and MEA in cooperation with Instadeel inc. to support the ecosystem for all African startups, SMEs, and entrepreneurs to learn, develop, build, and grow locally and internationally,  Our long-term Vision builds to cover different dimensions: Population (Both Gender, Women in Business, Junior Talents, African immigrant and People with Special Abilities) Sectors, (Education, Health care, Agriculture, Fintech ,Mining,  Environmental, and Sustainability) "
				}
				img={mentors4africaLogo}
			/>
		</section>
	);
};
export default Subsidiaries;
