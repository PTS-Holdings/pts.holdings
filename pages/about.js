import AboutUsSection from "components/aboutpage/AboutUsSection";
import ValuesSection from "components/aboutpage/ValuesSection";

export default function About() {
	return (
		<div className="container space-y-[100px] overflow-hidden">
			<AboutUsSection />
			<ValuesSection />
		</div>
	);
}
