import AboutUsSection from "components/aboutpage/AboutUsSection";
import MissionVisionSection from "components/aboutpage/MissionVisionSection";
import ValuesSection from "components/aboutpage/ValuesSection";

export default function About() {
	return (
		<div className="container space-y-[100px] overflow-hidden">
			<AboutUsSection />
			<ValuesSection />
			<MissionVisionSection />
		</div>
	);
}
