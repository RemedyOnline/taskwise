import React, { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaChevronLeft, FaTasks } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
import { cn } from "../lib/cnUtils";
import { LuListChecks, LuSettings } from "react-icons/lu";
import { IoIosStats } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { MdBarChart, MdOutlineSettings } from "react-icons/md";
import { GrPieChart } from "react-icons/gr";
import { HiOutlineChartPie } from "react-icons/hi";
import { BiBarChart } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { RiSettings3Line, RiSettings4Line } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { TbLogout, TbLogout2 } from "react-icons/tb";

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
		icon: <BiBarChart className="w-6 h-6 flex-shrink-0" />,
	},
	{
		name: "Settings",
		icon: <RiSettings3Line className="w-6 h-6 flex-shrink-0" />,
	},
	{
		name: "Dashboard",
		icon: <AiOutlineDashboard className="w-6 h-6 flex-shrink-0" />,
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
					"h-screen bg-blushPink-300 shadow-lg shadow-accent p-4 flex flex-col flex-shrink-0 w-full ",
					{ "w-14": collapsed }
				)}
			>
				<div className="flex gap-2 justify-between items-center mb-2">
					<div className="flex gap-1 items-center hover:cursor-pointer">
						<PiClockCountdownFill
							className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 pt-0.5 lg:pt-1 flex-shrink-0"
							onClick={toggleSidebar}
						/>
						<h2
							className={cn(
								"textbase md:text-xl lg:text-2xl font-bold text-center ",
								{ hidden: collapsed }
							)}
						>
							TaskWise
						</h2>
					</div>
					<div className="group flex items-start">
						<FaChevronLeft
							onClick={toggleSidebar}
							className={cn(
								"p-2 rounded-md hover:bg-accent hover:cursor-pointer",
								{ hidden: collapsed }
							)}
							size={30}
						/>
						<span>
							{!collapsed && (
								<p className="absolute whitespace-nowrap text-xs font-medium px-2 py-1 bg-accent text-white rounded-md mt-1 ml-1 hidden group-hover:block transition opacity-90">
									Collapse Sidebar
								</p>
							)}
						</span>
					</div>
				</div>
				<nav className="flex flex-col flex-grow">
					<ul className="flex flex-col space-y-2 border-t-2 border-richPlum pt-4">
						{navItems.map((item, index) => (
							<li
								key={index}
								className="flex gap-1 md:gap-2 items-center group hover:cursor-pointer p-2 rounded-md  hover:bg-blue-300"
							>
								<span>{item.icon}</span>
								{!collapsed && (
									<span className="font-medium text-sm md:text-base hover:text-richPlum/70 ">
										{item.name}
									</span>
								)}
								{collapsed && (
									<span className="group-hover:block absolute whitespace-nowrap text-xs font-medium px-2 py-1 bg-accent text-white rounded-md ml-10 hidden opacity-80 transition">
										{item.name}
									</span>
								)}
							</li>
						))}
						<li className="flex gap-1 md:gap-2 items-center">
							<AiOutlineDashboard className="w-6 h-6  flex-shrink-0" />
							<TbLogout className="w-6 h-6  flex-shrink-0" />
							<TbLogout2 className="w-6 h-6  flex-shrink-0" />
							<RiSettings3Line className="w-6 h-6  flex-shrink-0" />
							<a
								href="#"
								className="font-medium text-sm md:text-base hover:text-richPlum/70 hover:underline"
							>
								Dashboard
							</a>
						</li>
					</ul>
					<ul className="mt-auto border-t-2 border-richPlum pt-2">
						<li className="flex gap-1 md:gap-2 items-center group hover:cursor-pointer p-2 rounded-md  hover:bg-blue-300">
							<TbLogout2 className="w-6 h-6 flex-shrink-0" />
							{!collapsed && (
								<span className="font-medium text-sm md:text-base hover:text-richPlum/70 ">
									Logout
								</span>
							)}
							{collapsed && (
								<span className="group-hover:block absolute whitespace-nowrap text-xs font-medium px-2 py-1 bg-accent text-white rounded-md ml-10 hidden opacity-80 transition">
									Logout
								</span>
							)}
						</li>
					</ul>
				</nav>
			</aside>
		</section>
	);
};

export default SideBar;
