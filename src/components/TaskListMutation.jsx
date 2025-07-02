import React from "react";
import filterIcon from "../assets/filtersIcon.svg";
import sortIcon from "../assets/sortIcon.svg";

const TaskListMutation = ({
	filterStatus,
	setFilterStatus,
	filterPriority,
	setFilterPriority,
	sortBy,
	setSortBy,
}) => {
	return (
		<section className="flex gap-3 bg-blushPink-100 p-3 rounded text-xs md:text-sm lg:text-base">
			{/* filter by status */}
			<div className="group bg-accent pl-1.5 pr-2 py-1 rounded hover:bg-richPlum-500  w-full flex gap-1 items-center">
				<img src={filterIcon} alt="filterIcon" className="w-4 md:w-5" />
				<select
					aria-label="Filter tasks by completion status..."
					value={filterStatus}
					onChange={(e) => setFilterStatus(e.target.value)}
					className="text-white bg-accent group-hover:bg-richPlum-500 outline-none hover:cursor-pointer w-full"
				>
					<option value="all">All Tasks</option>
					<option value="completed">Completed</option>
					<option value="notCompleted">Not Completed</option>
				</select>
			</div>

			{/* filter by priority */}
			<div className="group bg-accent pl-1.5 pr-2 py-1 rounded hover:bg-richPlum-500  w-full flex gap-1 items-center">
				<img src={filterIcon} alt="filterIcon" className="w-4 md:w-5" />
				<select
					aria-label="Filter tasks by priority..."
					value={filterPriority}
					onChange={(e) => setFilterPriority(e.target.value)}
					className="text-white bg-accent group-hover:bg-richPlum-500 outline-none hover:cursor-pointer w-full"
				>
					<option value="all">All Priorities</option>
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
			</div>

			{/* sort by options */}
			<div className="group bg-accent pl-1.5 pr-2 py-1 rounded hover:bg-richPlum-500   w-full flex gap-1">
				<img src={sortIcon} alt="sortIcon" className="w-5" />
				<select
					aria-label="Sort tasks..."
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className="text-white bg-accent group-hover:bg-richPlum-500 outline-none hover:cursor-pointer w-full"
				>
					<option value="entryOrder">Entry Order</option>
					<option value="startTime">Start Time</option>
					<option value="latest">Latest First</option>
					<option value="oldest">Oldest First</option>
					<option value="priorityHighFirst">Priority (High → Low)</option>
					<option value="priorityLowFirst">Priority (High → Low)</option>
				</select>
			</div>
		</section>
	);
};

export default TaskListMutation;
