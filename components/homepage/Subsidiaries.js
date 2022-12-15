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
import sharpgageLogo from "public/assets/sharpgate.png";
const Subsidiaries = () => {
	return (
		<section className="container ">
			<Title text="PTS Subsidiaries" />
			<div id="subsidiaries" className="mt-8 grid gap-9 md:grid-cols-2">
				<CompanyTransCard
					title="ORO Partners LLC"
					description={`ORO Partners (COREangels MEA) is an angel investment network connecting and supporting business angels, early stage investors, entrepreneurs and corporates seeking investing opportunities mainly in tech-disruptive innovations throughout Middle-East and Africa. The group is managed by ORO Partners, subsidiary of PTS Investments Holdings, in cooperation with COREangels.
							It’s a diverse expertise group that share global ambition to help innovative startups ideas through fast track of support whether in investment or in kind-services through its affiliate company ORO Ventures Lab
					`}
					img={oroPartnersLogo}
				/>

				<CompanyTransCard
					title="ORO Capital LLC"
					description={` ORO Capital is the designed investment guide that establishes financial prosperity, creates sustainable economic gains, provides hassle-free smart experience that allows entities and individuals to get closer to their goals.						
						ORO Capital is the solution offering businesses the most flexible portfolio management and investment solutions operating fully serviced short-term and long-term investments. 
						It is to ensures that your personalized portfolio investment is managed seamlessly, technically, and professionally
						`}
					img={oroCapitalLogo}
					href="https://oro-capital.com"
				/>

				<CompanyTransCard
					title="ORO Ventures Lab LLC"
					description={`ORO Ventures Lab is a sophisticated company-based incubator and accelerator, derived from the US-based holding company PTS Holding Investment.
					The lab enables startups to capitalize on Egyptian tech related intellectual capital, world-class facilities and research capacities. It connects innovative startups with high end investors network that includes, faculty, mentors and investors. 
					Through this, it fosters a thriving ecosystem of innovation, education and responsible business.
					`}
					img={oroVentureLogo}
				/>

				<CompanyTransCard
					title="PTS Projects"
					description={`PTS is a firm that invests smart capital and provides unique solutions for entrepreneurs seeking for valuable investment opportunities. The company provides full-fledged integrated services. Potentially, it is the operating and investment vehicle adequate for the group and the initiator of cross boarder potential business acquisitions that coordinates business and interests in technology, energy, and other potential sectors mainly for startups and SMEs`}
					img={ptsProjectsLogo}
				/>

				<CompanyTransCard
					title="EDAM Healthcare Services S.A.E"
					href={"https://edamhealth.com"}
					description={
						"EDAM has become the first choice for those wishing to obtain health care programs by cooperating with a group of leading medical service providers and improving the quality-of-care programs for our customers and subscribers in the best way.\n \n EDAM seeks to raise the quality of medical services provided to our clients by providing distinguished cadres in medical care at the best prices in order to achieve the best health and financial return for all with a  goal to become the first and best partner for medical service providers and those wishing to benefit from Edam"
					}
					img={edamLogo}
				/>

				<CompanyTransCard
					title="Kemtix Technologies LLC"
					description={`Specialized in Advanced Technological Industries to blend our senior level engineering expertise with our innovative ideas and link our expert capabilities with business objectives resulting in the delivery of next generation products, with managed and professional services delivery. We have pledged ourselves to serve our customers and win their trust through timely implementation with the advice of experienced consultants for implementing tailoring and streamlining systems to clients’ specific needs focusing mainly on disruptive technologies, providing set of tech products and platforms, adopting a one-stop shop approach enabling us to offer exceptional deliverables to our clients`}
					img={kemtixLogo}
				/>

				<CompanyTransCard
					title="Ignite (Kemtix innovation)"
					href={"https://ignite-virtual.com/"}
					description={`Ignite helps revolutionize education in schools to build a better future for education. We aspire to reshape thinking, learning, and training methods to provide better training and scientific services for children and adults through our qualified team based on the latest technologies today (Virtual/Augmented Reality).
									We contribute to the provision of distinct human cadres based on the activities and practical situations derived from their values and our Arab civilization`}
					img={igniteLogo}
				/>

				<CompanyTransCard
					title="SharpGate (Kemtix Systems)"
					description={`Sharp Gate is a software development company that offers bespoke software solutions, middleware,
					and systems integration services. Our mission is to deliver most robust and easy-to-use software
					solutions to all clients in order to help them improve IT efficiency and business profitability. We are
					passionate about creating a user-friendly, simple, and clean design for their clients. Our team of
					knowledgeable and experienced staff enables them to provide their customers with an effective and
					dynamic service. Sharp Gate has a strong reputation for exceeding client expectations with high-
					quality work and quick turnaround times`}
					href="http://sharpgate.com"
					img={sharpgageLogo}
				/>
			</div>
			<div className="mt-16">
				<Title text="Social Responsibilities" />
			</div>
			<div className="mt-8 flex flex-wrap gap-9" id="social">
				<CompanyTransCard
					title="Kemtech valley"
					description={
						"Kemtech Valley initiative is powered by PTS Projects in cooperation with NCT University and delivered by ORO Ventures Lab. The Egyptian Applied Technological Valley (Kemtech Valley) initiative aims to build highly specialized technical cadres and develop the creative capabilities of Egyptian youth, as well as support startups, small and medium-sized companies in the field of applied technology and build digital community awareness through various programs"
					}
					img={kemtechlogo}
					href="https://kemtech.org"
				/>

				<CompanyTransCard
					title="Mentors 4 Africa"
					description={
						"MENTORS’ 4 AFRICA is an initiative built by MENTORS’ HQ and MEA in cooperation with Instadeel inc. to support the ecosystem for all African startups, SMEs, and entrepreneurs to learn, develop, build, and grow locally and internationally. Our long-term vision builds to cover different dimensions: Population (Both Gender, Women in Business, Junior Talents, African immigrant and People with Special Abilities) sectors, (Education, Health care, Agriculture, Fintech, Mining,  Environmental, and Sustainability) "
					}
					img={mentors4africaLogo}
				/>
			</div>
		</section>
	);
};
export default Subsidiaries;
