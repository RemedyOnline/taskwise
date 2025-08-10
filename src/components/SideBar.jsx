import React, { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { PiChartLineUpBold, PiClockCountdownFill } from "react-icons/pi";
import { cn } from "../lib/cnUtils";
import { LuListChecks, LuUserRound } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { TiChartPieOutline } from "react-icons/ti";

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
		name: "Reports",
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

const SideBar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleSidebar = () => {
		setCollapsed((prev) => !prev);
	};

	useEffect(() => {
		console.log("Current collapse value", collapsed);
	}, [collapsed]);

	return (
		<section>
			<aside
				className={cn(
					"h-screen bg-blushPink-300 shadow-lg shadow-accent flex flex-col flex-shrink-0 w-44 md:w-48 lg:w-56 transition-all duration-500 ease-in-out ",
					{ "w-18 md:w-18 lg:w-18": collapsed }
				)}
			>
				{/* Logo and Collapse Btn... */}
				<div
					className={cn("flex gap-2 justify-between items-center p-4", {
						"p-3.5 pb-4": collapsed,
					})}
				>
					<div
						className={cn("flex gap-1 items-center", {
							"hover:bg-blushPink-400 p-2 pr-0 rounded-md group": collapsed,
						})}
					>
						<PiClockCountdownFill
							className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 pt-0.5 lg:pt-1 flex-shrink-0 hover:cursor-pointer hover:text-blushPink-500"
							onClick={toggleSidebar}
						/>
						<span>
							{collapsed && (
								<p className="absolute whitespace-nowrap text-xs font-medium px-2 py-1 bg-accent text-white rounded-md -mt-3 ml-2 hidden group-hover:block transition z-50">
									Expand Sidebar
								</p>
							)}
						</span>
						<h2
							className={cn(
								"text-lg md:text-xl lg:text-2xl origin-left font-bold text-center opacity-100 scale-100 transition-all duration-1000",
								{
									"opacity-0 scale-0 ": collapsed,
								}
							)}
						>
							TaskWise
						</h2>
					</div>
					<div className="group flex items-start">
						<FaChevronLeft
							onClick={toggleSidebar}
							className={cn(
								"p-2 rounded-md hover:bg-blushPink-400 hover:cursor-pointer",
								{ hidden: collapsed }
							)}
							size={30}
						/>
						<span>
							{!collapsed && (
								<p className="absolute whitespace-nowrap text-xs font-medium px-2 py-1 bg-accent text-white rounded-md mt-0.5 ml-1 hidden group-hover:block transition">
									Collapse Sidebar
								</p>
							)}
						</span>
					</div>
				</div>
				{/* NavLinks... */}
				<nav className="flex flex-col flex-grow">
					<ul className="flex flex-col space-y-2 border-t-2 border-richPlum p-2">
						{navItems.map((item, index) => (
							<li
								key={index}
								className={cn(
									"flex gap-1 md:gap-2 items-center group hover:cursor-pointer p-2 rounded-md  hover:bg-blushPink-400",
									{ "flex-col gap-0 md:gap-0": collapsed }
								)}
							>
								<span className="">{item.icon}</span>
								{!collapsed && (
									<span className="font-medium text-sm md:text-base hover:text-richPlum/70 ">
										{item.name}
									</span>
								)}
								{collapsed && (
									<>
										<span className="whitespace-nowrap text-xxs font-medium rounded-md transition">
											{item.name}
										</span>
									</>
								)}
							</li>
						))}
						{/* <li className="flex gap-1 md:gap-2 items-center">
							<LuChartLine className="w-6 h-6  flex-shrink-0" />
							<a
								href="#"
								className="font-medium text-sm md:text-base hover:text-richPlum/70 hover:underline"
							>
								Dashboard
							</a>
						</li> */}
					</ul>
					<ul className="mt-auto border-t-2 p-2 border-richPlum">
						<li
							className={cn(
								"flex gap-2 items-center hover:cursor-pointer p-2 rounded-md  hover:bg-blushPink-400",
								{
									"p-2 flex-col gap-0 ": collapsed,
								}
							)}
						>
							<TbLogout2 className="w-6 h-6 flex-shrink-0" />
							{!collapsed && (
								<span className="font-medium text-sm md:text-base hover:text-richPlum/70 ">
									Logout
								</span>
							)}
							{collapsed && (
								<>
									<span className="whitespace-nowrap text-xxs font-medium rounded-md transition">
										Logout
									</span>
								</>
							)}
						</li>
					</ul>
				</nav>
			</aside>
		</section>
	);
};

export default SideBar;
