import { useState } from "react";
import SidebarContent from "./SidebarContent";

function SideBarMobile() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOprating, setIsOprating] = useState(false);

	const open = () => {
		setIsOpen(true);
	};

	const close = () => {
		setIsOprating(true);
		setTimeout(() => {
			setIsOpen(false);
			setIsOprating(false);
		}, 200);
	};

	const toggle = () => {
		if (!isOprating) {
			if (isOpen) {
				close();
				return;
			}
			open();
		}
	};
	return (
		<>
			<div className="sidebar-root-mobile-btn fixed z-40 faderIn" onClick={toggle}>
				Menu
			</div>
			{isOpen && (
				<div
					onClick={toggle}
					className={`"sidebar-root-mobile fixed h-full w-full bg-neutral-900 bg-opacity-80 z-50 flex ${
						isOprating && "faderOut"
					}`}
				>
					<div
						className={`sidebar-root faderInFLeft ${isOprating && "faderInTLeft"}`}
						style={{ backgroundColor: "var(--main-bg-color)" }}
					>
						<SidebarContent />
					</div>
					<div className="w-full"></div>
				</div>
			)}
		</>
	);
}

export default SideBarMobile;
