import React, { useState } from "react";
import { cn } from "../lib/cnUtils";
import clockSVG from "../assets/clockLineIcon.svg";
import { getDurationInMinutes } from "../lib/timeUtils";
import { v4 as uuid } from "uuid";

const AddTaskForm = ({ onClose, onAddTask }) => {
	const [taskData, setTaskData] = useState({
		name: "",
		category: "",
		startTime: "",
		endTime: "",
		priority: "",
		remarks: "",
	});

	const resetForm = () => {
		setTaskData({
			name: "",
			category: "",
			startTime: "",
			endTime: "",
			priority: "",
			remarks: "",
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setTaskData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTask = {
			...taskData,
			id: uuid(),
			completed: false,
		};

		console.log("New Task Data..:", newTask);
		onAddTask?.(newTask);
		resetForm();
		onClose?.();
	};

	const duration = getDurationInMinutes(taskData.startTime, taskData.endTime);

	const inputBoxStyling =
		"border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600";

	return (
		<form className="space-y-4" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-1">
					Task Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					required
					value={taskData.name}
					onChange={handleChange}
					className={inputBoxStyling}
					placeholder="e.g Learn about Variable Scope in JS..."
				/>
			</div>
			<div>
				<label htmlFor="category" className="block text-sm font-medium mb-1">
					Category
				</label>
				<select
					name="category"
					id="category"
					required
					value={taskData.category}
					onChange={handleChange}
					className={cn(inputBoxStyling, "py-[7px]")}
				>
					<option value="">Select a category...</option>
					<option value="Frontend Development">Frontend Development</option>
					<option value="No-Code Solutions">No-Code Solutions</option>
					<option value="Cloud & DevOps">Cloud & DevOps</option>
					<option value="Grad. Application">Grad. Application</option>
					<option value="Gaming & Leisure">Gaming & Leisure</option>
					<option value="Relaxation">Relaxation</option>
					<option value="Health & Wellbeing">Health & Wellbeing</option>
				</select>
			</div>
			<div className="flex gap-4">
				<div>
					<label htmlFor="startTime" className="block text-sm font-medium mb-1">
						Start Time
					</label>
					<input
						type="time"
						name="startTime"
						id="startTime"
						required
						value={taskData.startTime}
						onChange={handleChange}
						className={inputBoxStyling}
					/>
				</div>
				<div>
					<label htmlFor="endTime" className="block text-sm font-medium mb-1">
						End Time
					</label>
					<input
						type="time"
						name="endTime"
						id="endTime"
						required
						value={taskData.endTime}
						onChange={handleChange}
						className={inputBoxStyling}
					/>
				</div>
				<div className="flex justify-left items-center pt-6 animate-pulse gap-2">
					<img src={clockSVG} alt="clockSVGIcon" className="w-5 opacity-100" />
					<span className="text-xs md:text-sm text-neutral-500 italic font-medium">
						{duration}
					</span>
				</div>
			</div>
			<div>
				<label htmlFor="priority" className="block text-sm font-medium mb-1">
					Priority
				</label>
				<select
					id="priority"
					name="priority"
					required
					value={taskData.priority}
					onChange={handleChange}
					className={cn(inputBoxStyling, "py-[7px]")}
				>
					<option value="">Select priority...</option>
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
			</div>
			<div>
				<label htmlFor="remarks" className="block text-sm font-medium mb-1">
					Remarks
				</label>
				<textarea
					name="remarks"
					id="remarks"
					value={taskData.remarks}
					onChange={handleChange}
					rows="3"
					placeholder="Any important worth noting about this task??"
					className={inputBoxStyling}
				/>
			</div>
			<div className="flex justify-end">
				<button
					type="submit"
					className="bg-accent px-2 py-1 rounded font-medium hover:bg-richPlum-500 text-white hover:cursor-pointer"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default AddTaskForm;
