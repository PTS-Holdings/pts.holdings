export default function Contact() {
	return (
		<section className="container py-7">
			<div className="text-center">
				<h1 className="md:header3 body-medium-bold  text-center text-navy-basic">
					Get In Touch With Us
				</h1>
				<p className="body-small-regular md:body-medium-regular">
					For inquiries or follow-ups don’t hesitate to approach us{" "}
				</p>
			</div>
			<div className=" mt-5 w-full  rounded-2xl bg-navy-basic px-6 py-16 text-white">
				<div className="mb-10">
					<h2 className="body-medium-bold md:body-large-bold mb-1">
						Email Address
					</h2>
					<p className="body-small-regular md:body-medium-regular">
						Info@ptscorp-eg.com
					</p>
				</div>

				<div>
					<h2 className="body-medium-bold md:body-large-bold mb-2">
						Location
					</h2>
					<div className="body-small-regular md:body-medium-regular space-y-3">
						<p>US: 16192 Coastal Highway Lew as Delaware, USA</p>
						<p>
							UK: 71-75 Shelton St, Covent Garden, WC2H 9JQ,
							Greater London, UK
						</p>
						<p>EG: Agora Mall, El Nasr, New Cairo, EGY</p>
						<p>
							EG: 7 st.Port Said Engineering Works Co, El.nozha,
							Cairo , EGY
						</p>
						<p>
							EG: New Cairo Technological University, Main
							Building, Lotus, New Cairo, EGY
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
