import CompanyInfo from "components/companyPage/CompanyInfo";
import { companiesData } from "data/companiesData";

export const getServerSideProps = async (context) => {
	{
		const { query } = context;
		return { props: { query } };
	}
};

export default function CompanyPage({ query }) {
	const companyData = companiesData[query.companyId];

	const perks =
		companyData.companyObjectives ||
		companyData.values ||
		companyData.services;

	return (
		<div className="container pt-8">
			<CompanyInfo companyData={companyData} perks={perks} />
		</div>
	);
}
