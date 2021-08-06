import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/img/404.jpeg";

const MovieDetail = ({ index, title, poster, id, year }) => {
	return (
		<Link to={"/movie/" + id}>
			<div key={index} className="movie-detail">
				<div className="movie-detail-img">
					<img src={poster === "N/A" ? notFound : poster} alt={id} />
				</div>
				<div className="info-movie">
					<p className="title">{title}</p>
					<p>{year}</p>
				</div>
			</div>
		</Link>
	);
};

export default MovieDetail;
