import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
type prop = {
  rate: number | string;
};
export default function Rating({ rate }: prop) {
  let rating = 0;
  if (rate !== "N/A") {
    rating = Math.floor(Number(rate));
  }
  let rows: any[] = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= 2) {
      rating -= 2;
      rows.push(<BsStarFill key={`bsf${i}`} />);
    } else if (rating === 1) {
      rating -= 1;
      rows.push(<BsStarHalf key={`bsh${i}`} />);
    } else if (rating <= 0) {
      rating -= 1;
      rows.push(<BsStar key={`bsr${i}`} />);
    }
  }
  return rows;
}
