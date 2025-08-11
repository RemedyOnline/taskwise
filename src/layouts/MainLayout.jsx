import { React } from "react";
import SidebarRecap from "../testFolder/SidebarRecap";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<section className="flex bg-blushPink-200 text-richPlum-500 h-screen">
			<SidebarRecap />
			<main className="flex-1 overflow-auto">
				<Outlet />
			</main>
		</section>
	);
};

export default MainLayout;
