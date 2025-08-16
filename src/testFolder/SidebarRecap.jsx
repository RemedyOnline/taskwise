import React, { useState } from "react";
import { cn } from "../lib/cnUtils";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiChartLineUpBold, PiClockCountdownFill } from "react-icons/pi";
import { LuListChecks, LuLogOut, LuUserRound } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";
import { TiChartPieOutline } from "react-icons/ti";
import Tooltip from "../components/Tooltip";
import { Link, NavLink } from "react-router-dom";

const SidebarRecap = () => {
	const navItems = [
		{
			name: "Dashboard",
			icon: (
				<AiOutlineDashboard className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
			),
			to: "/",
		},
		{
			name: "Tasks",
			icon: <LuListChecks className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />,
			to: "/tasks",
		},
		{
			name: "Todos",
			icon: <LuListChecks className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />,
			to: "/todos",
		},
		{
			name: "Analytics",
			icon: (
				<PiChartLineUpBold className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
			),
			to: "/:taskId",
		},
		{
			name: "Report",
			icon: (
				<TiChartPieOutline className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
			),
			to: "/reports",
		},
		{
			name: "Settings",
			icon: <RiSettings3Line className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />,
			to: "/settings",
		},
		{
			name: "Profile",
			icon: <LuUserRound className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />,
			to: "/profile",
		},
	];

	const [collapsed, setCollapsed] = useState(false);
	const toggleSidebar = () => setCollapsed((prev) => !prev);

	return (
		<aside
			className={cn(
				" bg-blushPink-300 w-44 md:w-48 lg:w-56 left-0 shadow-xl shadow-accent p-4 max-h-screen h-screen flex flex-col justify-between gap-5 transition-all duration-500 ease-in-out z-10 overflow-hidden",
				collapsed && "w-18 md:w-20 lg:w-20"
			)}
		>
			<section>
				{/* LOGO SECTION */}
				<div
					className={cn(
						"flex items-center gap-0.5 md:gap-1 lg:gap-2 border-b pb-4 mb-4 justify-between",
						collapsed && "justify-center"
					)}
				>
					<PiClockCountdownFill
						onClick={toggleSidebar}
						className={cn(
							"p-2 bg-blushPink-400/30 hover:bg-blushPink-400 hover:cursor-pointer rounded-lg size-10 md:size-12"
						)}
					/>
					{!collapsed && (
						<>
							<h2 className="text-base md:text-lg lg:text-xl origin-left font-bold flex-1">
								TaskWise
							</h2>
							<BiChevronLeft
								onClick={toggleSidebar}
								className="p-2 bg-blushPink-400/30 hover:bg-blushPink-400 hover:cursor-pointer rounded-lg size-10 md:size-12"
							/>
						</>
					)}
				</div>
				{/* NAVIGATION SECTION */}
				<ul className="flex flex-col gap-0.5">
					{navItems.map((item, index) => (
						<li key={index}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									cn(
										"flex gap-2 items-center p-2 bg-blushPink-400/30 rounded-md hover:cursor-pointer hover:bg-blushPink-400 w-full",
										collapsed
											? "justify-center p-0 md:p-1"
											: "gap-0.5 md:gap-1 lg:gap-2 p-0 md:p-1",
										isActive && "bg-accent"
									)
								}
							>
								{collapsed ? (
									<Tooltip content={item.name} position="right">
										<span className="flex items-center justify-center size-10">
											{item.icon}
										</span>
									</Tooltip>
								) : (
									<>
										<span className="flex items-center justify-center size-10">
											{item.icon}
										</span>
										<span className="text-sm md:text-base font-medium">
											{item.name}
										</span>
									</>
								)}
							</NavLink>
						</li>
					))}
				</ul>
			</section>
			{/* LOGOUT SECTION */}
			<div
				className={cn(
					"flex items-center border-t pt-4",
					collapsed && "justify-center"
				)}
			>
				{collapsed ? (
					<Tooltip content="Logout" position="right">
						<button className="flex items-center justify-center size-10 md:size-12 rounded-md bg-blushPink-400/30 hover:bg-blushPink-400 hover:cursor-pointer w-10 md:w-10 lg:w-12">
							<LuLogOut className="w-5 md:w-6 h-5 md:h-6" />
						</button>
					</Tooltip>
				) : (
					<Link
						to={"/login"}
						className="flex items-center gap-0.5 md:gap-1 lg:gap-2 p-0  w-full rounded-md bg-blushPink-400/30 hover:bg-blushPink-400 hover:cursor-pointer"
					>
						<span className="flex items-center justify-center size-10 md:size-12">
							<LuLogOut className="w-5 md:w-6 h-5 md:h-6" />
						</span>
						<span className="text-sm md:text-base font-medium">Logout</span>
					</Link>
				)}
			</div>
		</aside>
	);
};

export default SidebarRecap;
