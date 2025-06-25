import clsx from "clsx";
import React from "react";
import { cn } from "../lib/utils";

const TaskCard = ({ taskName, completed, priority }) => {
	return (
		<div
			className={cn(
				"border-3 p-2 shadow-lg text-lg font-medium w-fit",
				{ "bg-green-200 line-through": completed },
				{ "border-gray-400": priority === "low" },
				{ "border-yellow-500": priority === "medium" },
				{ "border-red-500": priority === "high" },
				["rounded-full", "italic"]
			)}
		>
			{taskName}
		</div>
	);
};

export default TaskCard;
