import React from "react";
import { Link } from "react-router-dom";

// logo free
import Free from "../assets/img/logo-free.png";

const Navigation = () => {
	return (
		<div className="navbar">
			<div>
				<img src={Free} alt="Free logo" />
			</div>
			<div>
				<Link to="/">Liste de films</Link>
				{/* <Link to="/movie">movie</Link> */}
			</div>
		</div>
	);
};

export default Navigation;
