import CompanyInfo from "components/companyPage/CompanyInfo";

export default function SocialResponsibilityPage() {
	const companyData = {
		name: "Corporate Social Responsibility",
		logo: "/assets/logos/kemtech.svg",
		description:
			"The “Egyptian Applied Technological Valley- Kemtech Valley” initiative aims to build highly specialized technical cadres and develop the creative capabilities of Egyptian youth, as well as support start- ups, small and medium-sized companies in the field of applied technology and build digital community awareness ",
		socialResponsibility: [
			"Enriching the culture of entrepreneurship, innovation and investment in the promising Egyptian ",
			"Contribute in building societal awareness based on digital and information technology",
			"Maximizing the utilization of scientific cadres and specialized experts",
			"Upgrading the Egyptian technological industries by qualifying them to compete in global markets and developing innovative thought",
			"Creating a forum to communicate with local and international investment channels, Global marketing of Egyptian products and applications under the slogan 'Technovate in Egypt'",
		],
		img: "/assets/pics/students.jpg",
	};

	const perks = companyData.socialResponsibility;
	return (
		<div className="container py-8">
			<CompanyInfo companyData={companyData} perks={perks} />
		</div>
	);
}
