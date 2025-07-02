import React from "react";
import TaskListMutation from "./TaskListMutation";

const Header = ({
	filterStatus,
	setFilterStatus,
	filterPriority,
	setFilterPriority,
	sortBy,
	setSortBy,
}) => {
	return (
		<header className="mb-3 flex flex-col md:flex-row justify-between gap-3">
			<div className="w-full ">
				<h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
					Today's Tasks
				</h1>
				<p className="text-sm text-richPlum-300 animate-pulse">
					Manage your productivity like a Kvng👑
				</p>
			</div>
			<div className="">
				<TaskListMutation
					filterStatus={filterStatus}
					setFilterStatus={setFilterStatus}
					filterPriority={filterPriority}
					setFilterPriority={setFilterPriority}
					sortBy={sortBy}
					setSortBy={setSortBy}
				/>
			</div>
		</header>
	);
};

export default Header;
