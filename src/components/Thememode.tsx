import { FaSun } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
function Thememode() {
  const [isDarkMode, setDarkMode] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("selectedTheme") !== null) {
      const lol = localStorage.getItem("selectedTheme");
      lol === "dark" ? setMode("dark") : setMode("light");
    }
  }, []);

  const seter = (item: string) => {
    document.querySelector("body")?.setAttribute("data-theme", item);
    localStorage.setItem("selectedTheme", item);
    setDarkMode(item);
  };
  const setMode = (item: string) => seter(item);

  const themeHandler = () => {
    if (isDarkMode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <a onClick={themeHandler} className="button">
      {isDarkMode === "dark" ? <FaSun /> : <BsMoonStarsFill />}
    </a>
  );
}

export default Thememode;
