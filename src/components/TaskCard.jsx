import React, { useMemo } from "react";
import { cn } from "../lib/utils";

const TaskCard = ({ task }) => {
	let {
		name,
		startTime,
		endTime,
		durationInMinutes,
		category,
		priority,
		remarks,
	} = task;

	durationInMinutes = useMemo(() => {
		if (!startTime || !endTime) return "--";

		const [startH, startM] = startTime.split(":").map(Number);
		const [endH, endM] = endTime.split(":").map(Number);

		let startTotal = startH * 60 + startM;
		let endTotal = endH * 60 + endM;

		let diff = endTotal - startTotal;
		if (diff < 0) diff += 1440;

		return `${diff} mins`;
	}, [startTime, endTime]);

	return (
		<div
			className={cn(
				"bg-blushPink-50 p-4 shadow border-1",
				{ "border-red-300 shadow-red-200": priority === "high" },
				{ "border-yellow-300 shadow-yellow-200": priority === "medium" },
				{ "border-neutral-300 shadow-neutral-200": priority === "low" }
			)}
		>
			<h3 className="font-semibold text-lg">{name}</h3>
			<p className="text-sm text-neutral-600">
				🕒 {startTime} - {endTime}
				<span className="italic text-neutral-400">
					{" "}
					- ({durationInMinutes})
				</span>
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
