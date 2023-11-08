import { BiMoviePlay, BiCameraMovie } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { LiaTvSolid } from "react-icons/lia";
import { MdOutlineTheaterComedy } from "react-icons/md";
import {
  GiDramaMasks,
  GiWesternHat,
  GiPoliceCar,
  GiPistolGun,
} from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa";
import { RiGhostLine, RiAliensLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="h1-div">
        <section className="wrapper">
          <div className="top">MYmoViE</div>
          <div className="bottom" aria-hidden="true">
            MYmoViE
          </div>
        </section>
      </div>
      <div className="cat-div">
        <p>Categories</p>
        <Link to="/Categories/Popular">
          <span>
            <BiMoviePlay />
            Popular
          </span>
        </Link>
        <Link to="/Categories/Top-Rated">
          <span>
            <AiOutlineStar />
            Top Rated
          </span>
        </Link>
        <Link to="/Categories/Upcoming">
          <span>
            <LiaTvSolid />
            Upcoming
          </span>
        </Link>
      </div>

      <div style={{ borderBottom: "none" }} className="cat-div">
        <p>Genres</p>
        <Link to="/Genres/Action">
          <span>
            <GiPistolGun />
            Action
          </span>
        </Link>
        <Link to="/Genres/Comedy">
          <span>
            <MdOutlineTheaterComedy />
            Comedy
          </span>
        </Link>
        <Link to="/Genres/Crime">
          <span>
            <GiPoliceCar />
            Crime
          </span>
        </Link>
        <Link to="/Genres/Drama">
          <span>
            <GiDramaMasks />
            Drama
          </span>
        </Link>
        <Link to="/Genres/Fantasy">
          <span>
            <FaFantasyFlightGames />
            Fantasy
          </span>
        </Link>
        <Link to="/Genres/Historical">
          <span>
            <BiCameraMovie />
            Historical
          </span>
        </Link>
        <Link to="/Genres/Horror">
          <span>
            <RiGhostLine />
            Horror
          </span>
        </Link>
        <Link to="/Genres/Science-fiction">
          <span>
            <RiAliensLine />
            Science fiction
          </span>
        </Link>
        <Link to="/Genres/Western">
          <span>
            <GiWesternHat />
            Western
          </span>
        </Link>
      </div>
    </>
  );
}
