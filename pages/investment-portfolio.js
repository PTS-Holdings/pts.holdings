import Image from "next/image";

export default function InvestmentPortfolio() {
	return (
		<section className="container flex flex-col-reverse items-center gap-5 py-8 lg:flex-row lg:items-start lg:justify-between">
			<div className="space-y-4 text-center lg:w-1/2 lg:text-left">
				<h2 className="body-medium-bold md:header3 text-navy-basic">
					Investment Portfolio{" "}
				</h2>
				<p className="body-small-regular md:body-medium-regular">
					We monitor the performance of the portfolio on a regular
					basis and adjust investments as needed in order to maintain
					desired risk/return profile and regularly review portfolio
					performance against predetermined benchmarks in order to
					measure success and make adjustments as needed and utilize
					financial planning tools to help manage cash flow needs and
					ensure that all financial goals are met in a timely manner.
				</p>
			</div>
			<div className="relative h-[180px] w-[246px] md:h-[400px] md:w-[408px]">
				<Image
					src="/assets/pics/portfolio.svg"
					layout="fill"
					alt="PTS Portfolio"
					fill
				/>
			</div>
		</section>
	);
}
