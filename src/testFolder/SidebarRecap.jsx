import React, { useState } from "react";
import { cn } from "../lib/cnUtils";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiChartLineUpBold, PiClockCountdownFill } from "react-icons/pi";
import { LuListChecks, LuLogOut, LuUserRound } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";
import { TiChartPieOutline } from "react-icons/ti";

const SidebarRecap = () => {
	const navItems = [
		{
			name: "Dashboard",
			icon: <AiOutlineDashboard className="w-6 h-6 flex-shrink-0" />,
		},
		{
			name: "Tasks",
			icon: <LuListChecks className="w-6 h-6 flex-shrink-0" />,
		},
		{
			name: "Analytics",
			icon: <PiChartLineUpBold className="w-6 h-6 flex-shrink-0" />,
		},
		{
			name: "Report",
			icon: <TiChartPieOutline className="w-6 h-6 flex-shrink-0" />,
		},
		{
			name: "Settings",
			icon: <RiSettings3Line className="w-6 h-6 flex-shrink-0" />,
		},
		{
			name: "Profile",
			icon: <LuUserRound className="w-6 h-6 flex-shrink-0" />,
		},
	];

	const [collapsed, setCollapsed] = useState(false);
	const toggleSidebar = () => setCollapsed((prev) => !prev);
	console.log(collapsed);

	return (
		<aside
			className={cn(
				"absolute bg-blushPink-300 w-[223px] right-0 shadow-xl shadow-accent p-4 max-h-screen min-h-screen flex flex-col justify-between gap-5 transition-all duration-500 ease-in-out z-10",
				collapsed && "w-20"
			)}
		>
			<section>
				{/* LOGO SECTION */}
				<div
					className={cn(
						"flex align-center justify-between items-center gap-2 border-b pb-4 mb-4 group",
						collapsed && "justify-center group"
					)}
				>
					<PiClockCountdownFill
						onClick={toggleSidebar}
						className={cn(
							"p-2 bg-blushPink-400 hover:bg-accent hover:cursor-pointer rounded-lg size-12",
							collapsed && "p-2 size-12"
						)}
					/>
					<span
						className={cn(
							"hidden",
							collapsed &&
								"group-hover: ml-14 px-2 py-1 bg-blushPink-400 rounded-md shadow shadow-orange-300"
						)}
					>
						Collapse Sidebar
					</span>
					<h2 className={cn("text-xl font-bold", collapsed && "hidden")}>
						LOGO
					</h2>
					<BiChevronLeft
						onClick={toggleSidebar}
						className={cn(
							"p-2 bg-blushPink-400 hover:bg-accent hover:cursor-pointer rounded-lg size-12",
							collapsed && "hidden"
						)}
					/>
				</div>
				{/* NAVIGATION SECTION */}
				<ul className="flex flex-col gap-0.5">
					{navItems.map((item, index) => (
						<li
							key={index}
							className={cn(
								"flex gap-2 items-center p-2 bg-blushPink-400 rounded-md hover:cursor-pointer hover:bg-accent w-full overflow-hidden",
								collapsed && "p-2 group"
							)}
						>
							<span className="p-1">{item.icon}</span>
							<span
								className={cn(
									"font-medium duration-500 transition-all",
									collapsed &&
										"group-hover:absolute ml-16 px-2 py-1 bg-blushPink-400 rounded-md shadow shadow-orange-300 text-sm"
								)}
							>
								{item.name}
							</span>
						</li>
					))}
				</ul>
			</section>
			{/* LOGOUT SECTION */}
			<div
				className={cn(
					"flex align-center justify-between items-center gap-2 border-t pt-4",
					collapsed && "justify-center"
				)}
			>
				<li
					className={cn(
						"flex gap-2 items-center p-2 bg-blushPink-400 rounded-md hover:cursor-pointer hover:bg-accent w-full overflow-hidden",
						collapsed && "p-2 group"
					)}
				>
					<span className="p-1">
						<LuLogOut className="w-6 h-6 flex-shrink-0" />
					</span>
					<span
						className={cn(
							"font-medium duration-500 transition-all",
							collapsed &&
								"group-hover:absolute ml-16 px-2 py-1 bg-blushPink-400 rounded-md shadow shadow-orange-300 text-sm"
						)}
					>
						Logout
					</span>
				</li>
			</div>
		</aside>
	);
};

export default SidebarRecap;
