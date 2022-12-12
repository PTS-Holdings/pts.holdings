import BoardMembers from "components/homepage/BoardMembers";
import ChairmanWord from "components/homepage/ChairmanWord";
import Subsidiaries from "components/homepage/Subsidiaries";
import VisionSection from "components/homepage/VisionSection";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/homepage/HeroSection";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>PTS Holdings</title>
				<meta
					name="description"
					content="PTS is an entrepreneurial firm that invests smart capital and provides unique solutions"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="space-y-16 overflow-hidden">
				<HeroSection />
				<ChairmanWord />
				<VisionSection />
				<BoardMembers />
				<Subsidiaries />
			</main>
		</div>
	);
}
