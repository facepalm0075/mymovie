import { useWinSize } from "./customHooks/useWinSize";
import SidebarContent from "./SidebarContent";
import SideBarMobile from "./SideBarMobile";

export default function Sidebar() {
	const size = useWinSize();
	return (
		<>
			{size !== "md" && size !== "sm" && size !== "lg" ? (
				<div className="sidebar-root">
					<SidebarContent />
				</div>
			) : (
				<SideBarMobile />
			)}
		</>
	);
}
