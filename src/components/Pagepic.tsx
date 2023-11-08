import data from "../data.json";
import { useEffect, useState } from "react";
type picprop = {
  id: string | undefined;
};

export default function Pagepic({ id }: picprop) {
  const [myData, setData] = useState<any>({});
  const getDetails = () => {
    let result: any = {};
    switch (id) {
      case "Popular":
        result = data.pagepic.Popular;
        break;
      case "Top-Rated":
        result = data.pagepic.topRated;
        break;
      case "Upcoming":
        result = data.pagepic.upcoming;
        break;
      case "Action":
        result = data.pagepic.action;
        break;
      case "Comedy":
        result = data.pagepic.comedy;
        break;
      case "Crime":
        result = data.pagepic.crime;
        break;
      case "Drama":
        result = data.pagepic.drama;
        break;
      case "Fantasy":
        result = data.pagepic.fantasy;
        break;
      case "Historical":
        result = data.pagepic.historical;
        break;
      case "Horror":
        result = data.pagepic.horror;
        break;
      case "Science-fiction":
        result = data.pagepic.scienceFiction;
        break;
      case "Western":
        result = data.pagepic.western;
        break;
      default:
        result = data.pagepic.Popular;
    }
    return result;
  };
  useEffect(() => {
    setData(getDetails());
  }, [id]);
  return (
    <div
      style={{ backgroundImage: `url("${myData.img}")` }}
      className="page-slide"
    >
      <div className="p-i-b">
        <div className="p-i-f">
          <h2>{myData.title}</h2>
          <p>{myData.text}</p>
        </div>
      </div>
    </div>
  );
}
