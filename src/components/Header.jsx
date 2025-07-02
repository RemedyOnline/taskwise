import React from "react";
import ListManipulation from "./ListManipulation";

const Header = ({ filterBy, setFilterBy, sortBy, setSortBy }) => {
	return (
		<header className="mb-3 flex justify-between">
			<div>
				<h1 className="text-3xl font-bold">Today's Tasks</h1>
				<p className="text-sm text-richPlum-300 animate-pulse">
					Manage your productivity like a Kvng👑
				</p>
			</div>
			<div className="flex gap-3 align-bottom items-center pb-3">
				<ListManipulation
					filterBy={filterBy}
					setFilterBy={setFilterBy}
					sortBy={sortBy}
					setSortBy={setSortBy}
				/>
			</div>
		</header>
	);
};

export default Header;
