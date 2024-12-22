import { BsFillPersonCheckFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { HiLanguage } from "react-icons/hi2";
import { AiOutlineClockCircle, AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import { call } from "../components/Call";
import Genres from "../components/Genres";
import MovieCard from "../components/MovieCard";
import mdata from "../data.json";
import { useWinSize } from "../components/customHooks/useWinSize";

type prop = {
	scrolHandler: (height: number) => void;
};
export default function Details({ scrolHandler }: prop) {
	const size = useWinSize();
	const { id } = useParams();
	let [data, setData] = useState<any>([]);
	let load = false;
	const getDetails = async () => {
		let myData = await call(id);
		setData(myData);
	};
	useEffect(() => {
		if (!load) {
			load = true;
			getDetails();
			scrolHandler(0);
		} else {
			load = false;
		}
	}, [id]);
	let size1 = false;
	if (size === "lg2" || size === "lg" || size === "md" || size === "sm") {
		size1 = true;
	}
	let size2 = false;
	if (size === "md" || size === "sm") {
		size2 = true;
	}
	return (
		<>
			<div className="main">
				<div
					style={{
						backgroundImage: `url('${data.Poster}')`,
					}}
					className="main-pic border-pic"
				>
					<div className="main-d-b-b border-pic"></div>
				</div>
				<div className={`main-detail mt-5 py-4 ${size2 ? "px-2" : "px-10"}`}>
					<h1>{`${data.Title} (${data.Year})`}</h1>
					<div style={{ textAlign: "center", padding: "22px 0px" }}>
						<span className={`${size1 && "block"}`}>
							<Rating rate={data.imdbRating} />
							{data.imdbRating} / 10
						</span>
						<span>
							{data.Runtime} / {data.DVD} / {data.Language}
						</span>
					</div>
					<div className="detail-genre">
						<Genres items={data.Genre} />
					</div>
					<h3>Overview</h3>
					<p>{data.Plot}</p>
					<div className="detail-item-main">
						<div className="detail-item">
							<AiOutlineCalendar />
							<div className="line"></div>
							<div className="detail-item-text">
								<h6>Year</h6>
								<span>{data.Year}</span>
							</div>
						</div>
						<div className="detail-item">
							<AiOutlineClockCircle />
							<div className="line"></div>
							<div className="detail-item-text">
								<h6>Runtime</h6>
								<span>{data.Runtime}</span>
							</div>
						</div>
						<div className="detail-item">
							<BsFillPersonCheckFill />
							<div className="line"></div>
							<div className="detail-item-text">
								<h6>Rated</h6>
								<span>{data.Rated}</span>
							</div>
						</div>
						<div className="detail-item">
							<AiOutlineVideoCamera />
							<div className="line"></div>
							<div className="detail-item-text">
								<h6>Director</h6>
								<span>{data.Director}</span>
							</div>
						</div>
						<div className="detail-item">
							<TfiWorld />
							<div className="line"></div>
							<div className="detail-item-text">
								<h6>Country</h6>
								<span>{data.Country}</span>
							</div>
						</div>
						<div className="detail-item">
							<HiLanguage />
							<div className="line"></div>
							<div className="detail-item-text">
								<h6>Language</h6>
								<span>{data.Language}</span>
							</div>
						</div>
						<div style={{ clear: "both" }}></div>
					</div>
				</div>
			</div>
			<div className="also-line"></div>
			<h2 className="also-h2">You might also like</h2>
			<MovieCard items={mdata.popular} />
		</>
	);
}
