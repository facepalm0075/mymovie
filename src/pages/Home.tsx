import { useEffect, useState } from "react";
import axios from "axios";
import Pagepic from "../components/Pagepic";
import MovieCard from "../components/MovieCard";
import { fixPag } from "../components/fixpag";
import { getStaticData } from "../components/StaticData";
import { useParams } from "react-router-dom";

type searchprop = {
  search: string;
  scrollHandel: (height: number) => void;
  shandler: (s: string) => void;
};

function Home({ search, scrollHandel, shandler }: searchprop) {
  const { id } = useParams();
  let loading = false;
  let load = false;
  const [myData, setMyData] = useState([{}]);
  const [cpage, setCpage] = useState(1);
  const [mpage, setMpage] = useState([1]);
  const [spage, setSpage] = useState([1]);
  const nodata = () => {
    setCpage(1);
    setMpage([1]);
    setMyData([{}]);
  };
  const call = async (title: string) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${title}&page=${cpage}&apikey=b266afba`
    );
    let rows2: number[] = [];
    const pageNum = Math.floor(data.totalResults / 10) + 1;
    for (let i = 1; i <= pageNum; i++) {
      rows2 = [...rows2, i];
    }
    setMpage(rows2);
    setSpage(fixPag(mpage, cpage));
    if (data.Response === "False") {
      nodata();
    } else {
      setMyData(data.Search);
    }
  };
  const mCall = () => {
    setMyData(getStaticData(id));
    setCpage(1);
    setMpage([1]);
    scrollHandel(0);
  };
  useEffect(() => {
    setCpage(1);
    const len: number = search.length;
    if (len < 3) {
      mCall();
      axios.Cancel;
    } else {
      if (!loading) {
        loading = true;
        call(search);
        scrollHandel(500);
      } else {
        loading = false;
      }
    }
  }, [search]);
  useEffect(() => {
    if (!load) {
      load = true;
      call(search);
    } else {
      load = false;
    }
  }, [cpage]);

  useEffect(() => {
    setSpage(fixPag(mpage, cpage));
  }, [mpage]);

  useEffect(() => {
    mCall();
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      shandler("");
    }, 1000);
  }, []);

  return (
    <>
      <Pagepic id={id} />
      <MovieCard items={myData} />
      {spage.length > 1 ? (
        <nav
          style={{ backgroundColor: "unset", marginTop: "90px" }}
          aria-label="..."
        >
          <ul
            style={{ boxShadow: "0 0 20px -10px black" }}
            className="pagination"
          >
            <li
              onClick={() => {
                if (cpage > 1) {
                  setCpage((prev) => prev - 1);
                  scrollHandel(500);
                }
              }}
              className={`page-item ${cpage === 1 ? "disabled" : null}`}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            {spage.map((item) => {
              let data: any = "";
              if (item == cpage) {
                data = (
                  <li key={item} className="page-item active">
                    <span className="page-link">{item}</span>
                  </li>
                );
              } else {
                data = (
                  <li
                    onClick={() => {
                      scrollHandel(500);
                      setCpage(item);
                    }}
                    key={item}
                    className="page-item"
                  >
                    <a className="page-link" href="#">
                      {item}
                    </a>
                  </li>
                );
              }
              return data;
            })}
            <li
              onClick={() => {
                if (cpage < mpage.length) {
                  setCpage(cpage + 1);
                  scrollHandel(500);
                }
              }}
              className={`page-item ${
                cpage === mpage.length ? "disabled" : null
              }`}
            >
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
