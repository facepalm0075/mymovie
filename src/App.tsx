import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "../src/App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./pages/Details";
import { useState, useRef } from "react";
//Primary colors: Dark Red (#401D19), Bright Orange (#F9672C), Light Red-Orange (#ECCFC5)api key  b266afba

function App() {
	const [search, setSearch] = useState("");
	const pageRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const sHandler = (s: string) => {
		setSearch(s);
	};

	const scrollHandler = (height: number) => {
		pageRef.current.scrollTo({
			top: height,
			behavior: "smooth",
		});
	};

	return (
		<>
			<div className="main-root">
				<Sidebar />
				<div className="content-root">
					<Navbar searchHandler={sHandler} />
					<div className="page-root" ref={pageRef}>
						<Routes>
							<Route
								path="/"
								element={<Home shandler={sHandler} scrollHandel={scrollHandler} search={search} />}
							/>

							<Route
								path="/mymovie"
								element={<Home shandler={sHandler} scrollHandel={scrollHandler} search={search} />}
							/>

							<Route path="/Categories">
								<Route
									path=":id"
									element={
										<Home shandler={sHandler} scrollHandel={scrollHandler} search={search} />
									}
								/>
							</Route>

							<Route path="/Genres">
								<Route
									path=":id"
									element={
										<Home shandler={sHandler} scrollHandel={scrollHandler} search={search} />
									}
								/>
							</Route>

							<Route path="/Details">
								<Route path=":id" element={<Details scrolHandler={scrollHandler} />} />
							</Route>

							<Route path="*" element={<span>404 PAGE NOT FOUND!</span>} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
