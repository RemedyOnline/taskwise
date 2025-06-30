import React from "react";
import { cn } from "../lib/cnUtils";
import { getDurationInMinutes } from "../lib/timeUtils";

const TaskCard = ({ task, onToggleComplete }) => {
	const {
		id,
		name,
		startTime,
		endTime,
		category,
		priority,
		remarks,
		completed,
	} = task;
	const duration = getDurationInMinutes(startTime, endTime);

	return (
		<div
			className={cn(
				"bg-blushPink-100 p-4 shadow border-1",
				{ "border-red-300 shadow-red-200": priority === "high" },
				{ "border-yellow-300 shadow-yellow-200": priority === "medium" },
				{ "border-neutral-300 shadow-neutral-200": priority === "low" },
				{ "line-through": completed === true }
			)}
		>
			<div>
				<h3
					className={cn("font-semibold text-lg", {
						underline: completed,
					})}
				>
					{name}
				</h3>
				<input
					type="checkbox"
					name="completed"
					id={`completed-${id}`}
					onChange={() => onToggleComplete(id)}
				/>
			</div>
			<p className="text-sm text-neutral-600">
				🕒 {startTime} - {endTime}
				<span className="italic text-neutral-400"> - ({duration})</span>
			</p>
			<p className="text-sm text-neutral-600">
				🏷️ {category} •{" "}
				<span
					className={cn(
						"uppercase",
						{
							"text-neutral-500": priority === "low",
						},
						{
							"text-yellow-500": priority === "medium",
						},
						{
							"text-red-500": priority === "high",
						}
					)}
				>
					⏳{priority}
				</span>
			</p>

			{remarks && <p className="mt-1 italic text-richPlum-300">{remarks}</p>}
		</div>
	);
};

export default TaskCard;
