import React from "react";
import { cn } from "../lib/cnUtils";
import { getDurationInMinutes } from "../lib/timeUtils";

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }) => {
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
				{ "border-neutral-300 shadow-neutral-200": priority === "low" }
			)}
		>
			<div className="flex justify-between">
				<h3
					className={cn("font-semibold text-lg", {
						"line-through": completed,
					})}
				>
					{name}
				</h3>
				<input
					aria-label="Complete task checkbox..."
					type="checkbox"
					name="completed"
					checked={completed}
					id={`completed-${id}`}
					onChange={() => onToggleComplete(id)}
				/>
			</div>
			<p
				className={cn("text-sm text-neutral-600", { "opacity-25": completed })}
			>
				🕒 {startTime} - {endTime}
				<span className={cn("italic text-neutral-400")}> - ({duration})</span>
			</p>
			<p
				className={cn("text-sm text-neutral-600", { "opacity-25": completed })}
			>
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
			{remarks && (
				<p
					className={cn("mt-1 italic text-richPlum-300", {
						"opacity-25": completed,
					})}
				>
					{remarks}
				</p>
			)}
			<div className="flex justify-end gap-2 mt-2">
				<button
					onClick={() => onEdit(task)}
					aria-label="Edit task button..."
					className="border border-accent text-accent pl-1 pr-2 py-1 rounded hover:border-richPlum-500 hover:text-richPlum-500  hover:cursor-pointer text-xs md:text-sm"
				>
					✏️ Edit
				</button>
				<button
					onClick={() => onDelete(id)}
					aria-label="Delete task button..."
					className="bg-accent pl-1 pr-2 py-1 rounded hover:bg-richPlum-500 text-white hover:cursor-pointer text-xs md:text-sm"
				>
					🗑️ Delete
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
