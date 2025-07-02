import React from "react";
import filterIcon from "../assets/filtersIcon.svg";
import sortIcon from "../assets/sortIcon.svg";

const ListManipulation = ({ filterBy, setFilterBy, sortBy, setSortBy }) => {
	return (
		<section className="flex gap-3">
			<div className="group bg-accent pl-1.5 pr-2 py-1 rounded hover:bg-richPlum-500 text-sm md:text-base h-fit flex gap-1">
				<img src={filterIcon} alt="filterIcon" className="w-5" />
				<select
					value={filterBy}
					onChange={(e) => setFilterBy(e.target.value)}
					className="text-white bg-accent group-hover:bg-richPlum-500 outline-none hover:cursor-pointer w-32"
				>
					<option value="default">Default</option>
					<optgroup label="Filter By Status">
						<option value="completed">Completed</option>
						<option value="notCompleted">Not Completed</option>
					</optgroup>
					<optgroup label="Filter By Priority">
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</optgroup>
				</select>
			</div>
			<div className="group bg-accent pl-1.5 pr-2 py-1 rounded hover:bg-richPlum-500 text-sm md:text-base h-fit flex gap-1">
				<img src={sortIcon} alt="sortIcon" className="w-5" />
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className="text-white bg-accent group-hover:bg-richPlum-500 outline-none hover:cursor-pointer w-24"
				>
					<option value="default">Start Time</option>
					<optgroup label="Sort by Date">
						<option value="latest">Latest</option>
						<option value="oldest">Oldest</option>
					</optgroup>
					<optgroup label="Sort by Priority">
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</optgroup>
				</select>
			</div>
		</section>
	);
};

export default ListManipulation;
