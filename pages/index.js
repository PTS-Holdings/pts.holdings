import CompanyCard from "components/CompanyCard";
import StrategySection from "components/homepage/StrategySection";
import SubsidiariesSection from "components/homepage/SubsidiariesSection";
import WhoWeAreSection from "components/homepage/WhoWeAreSection";
import { NextSeo } from "next-seo";
import Head from "next/head";
import HeroSection from "../components/homepage/HeroSection";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<NextSeo
				title="PTS Holdings"
				description="PTS: A leading Investment firm that offers strategic advice to clients and partners in Egypt and the MEA Region with extensive experience and network.



"
			/>

			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container space-y-[100px] overflow-hidden">
				<HeroSection />
				<StrategySection />
				<WhoWeAreSection />
				<SubsidiariesSection />
			</main>
		</div>
	);
}
