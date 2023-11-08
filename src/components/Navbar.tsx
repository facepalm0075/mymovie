//import avatar from "../assets/avatar.jpg";
import { Link, Route, Routes } from "react-router-dom";
import Thememode from "./Thememode";
import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";

type searchprop = {
  searchHandler: (s: string) => void;
};

export default function Navbar({ searchHandler }: searchprop) {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 800);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    searchHandler(debouncedValue);
  }, [debouncedValue]);
  return (
    <nav>
      <Thememode />
      <div className="nav-main-div">
        <div className="sec-div" style={{ margin: "0px 40px" }}>
          <span>
            <Link to={"/mymovie"}>Home</Link>
          </span>
        </div>
        <div>
          <div className="input-group rounded">
            <Routes>
              <Route
                path="/mymovie"
                element={
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                }
              />

              <Route path="/Categories">
                <Route
                  path=":id"
                  element={
                    <input
                      type="search"
                      className="search-input"
                      placeholder="Search..."
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  }
                />
              </Route>

              <Route path="/Genres">
                <Route
                  path=":id"
                  element={
                    <input
                      type="search"
                      className="search-input"
                      placeholder="Search..."
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  }
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      <div className="nav-div-fixer"></div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "white",
        }}
      >
        <img
          style={{
            boxShadow: "black 0px 0px 9px 2px",
            margin: "0px 10px",
          }}
          className="rounded-circle"
          src={avatar}
          alt="avatar"
          width="37px"
          height="37px"
        />
        <span>Login/Sign</span>
      </div> */}
    </nav>
  );
}
