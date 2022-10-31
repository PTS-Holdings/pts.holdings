const Title = ({ text }) => {
	return (
		<div className="bg-gradient-to-b from-pts-red to-pts-blue-base pl-2 ">
			<h2 className="bg-white pl-4 pt-4 text-3xl font-bold leading-none">
				{text}
			</h2>
		</div>
	);
};
export default Title;
