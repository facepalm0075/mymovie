import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { call } from "./Call";

type itemProp = {
	items: any[];
};

export default function MovieCard({ items }: itemProp) {
	const [result, setResult] = useState<any>([]);
	const getDetails = async () => {
		try {
			let results: {}[] = await Promise.all(
				items.map(async (item): Promise<number> => {
					let res = await call(item.imdbID);
					return res;
				})
			);
			setResult(results);
		} catch (ex) {}
	};
	let loading = false;
	useEffect(() => {
		if (items[0]?.imdbID !== undefined) {
			if (!loading) {
				getDetails();
			} else {
				loading = false;
			}
		} else {
			console.log("ntfnd");
			setResult([{}]);
		}
	}, [items]);

	const img =
		"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
	return (
		<>
			<div className="cards-main flex flex-wrap justify-center">
				{result?.map((item: any, index: number) => {
					return (
						<Link key={index} to={`/Details/${item.imdbID}`}>
							<div className="my-card">
								<div
									style={{
										backgroundImage: `url("${item.Poster === "N/A" ? img : item.Poster}")`,
									}}
									className="img"
								></div>
								<h3>{item.Title}</h3>
								<span>
									<Rating rate={item.imdbRating} />
								</span>
							</div>
						</Link>
					);
				})}
				<div style={{ clear: "both" }}></div>
			</div>
		</>
	);
}
