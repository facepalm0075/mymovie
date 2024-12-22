import { useEffect, useState } from "react";
type ret = "sm" | "md" | "lg" | "lg2" | "xl" | "2xl" | "any";
export const useWinSize = (): ret => {
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (windowSize <= 640) {
		return "sm";
	} else if (windowSize <= 768) {
		return "md";
	} else if (windowSize <= 1024) {
		return "lg";
	} else if (windowSize <= 1124) {
		return "lg2";
	} else if (windowSize <= 1280) {
		return "xl";
	} else if (windowSize <= 1536) {
		return "2xl";
	}

	return "any";
};
