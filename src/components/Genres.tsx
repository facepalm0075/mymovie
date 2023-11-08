import { useEffect, useState } from "react";
type prop = {
  items: string;
};
export default function Genres({ items = "Crime, Drama, History" }: prop) {
  let [data, setData] = useState<any[]>([]);
  useEffect(() => {
    let str = "";
    let arr: string[] = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] === ",") {
        arr = [...arr, str];
        str = "";
      } else {
        str += items[i];
      }
    }
    arr = [...arr, str];
    setData(arr);
  }, [items]);
  return (
    <>
      {data.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </>
  );
}
