import React from "react";

const AddTaskForm = () => {
	return (
		<form className="space-y-4">
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-1">
					Task Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="e.g Learn about Variable Scope in JS..."
					className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
				/>
			</div>
			<div>
				<label htmlFor="category" className="block text-sm font-medium mb-1">
					Category
				</label>
				<select
					type="text"
					name="category"
					id="category"
					className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
				>
					<option value="">Select a category...</option>
					<option value="frontend">Frontend Development</option>
					<option value="nocode">No-Code Solutions</option>
					<option value="devops">Cloud & DevOps</option>
					<option value="gradApp">Grad. Application</option>
					<option value="gaming">Gaming & Leisure</option>
					<option value="relaxation">Relaxation</option>
					<option value="wellbeing">Health & Wellbeing</option>
				</select>
			</div>
			<div className="flex gap-2">
				<div>
					<label htmlFor="startTime" className="block text-sm font-medium mb-1">
						Start Time
					</label>
					<input
						type="time"
						name="startTime"
						id="startTime"
						placeholder="e.g Learn about Variable Scope in JS..."
						className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
					/>
				</div>
				<div>
					<label
						htmlFor="
               endTime"
						className="block text-sm font-medium mb-1"
					>
						End Time
					</label>
					<input
						type="time"
						name="
                  endTime"
						id="
                  endTime"
						placeholder="e.g Learn about Variable Scope in JS..."
						className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
					/>
				</div>
				<div>
					{/* I want to automatically display the duration in minutes right after the user selects a starting and ending time... when not set.. something else should be displayed here like dashes or something.. anything creative you can think of biaaaa... */}
				</div>
			</div>
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-1">
					Task Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="e.g Learn about Variable Scope in JS..."
					className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
				/>
			</div>
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-1">
					Task Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="e.g Learn about Variable Scope in JS..."
					className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
				/>
			</div>
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-1">
					Task Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="e.g Learn about Variable Scope in JS..."
					className="border-3 rounded-md px-3 py-1.5 w-full border-richPlum-300 focus:outline-richPlum-600"
				/>
			</div>
		</form>
	);
};

export default AddTaskForm;
