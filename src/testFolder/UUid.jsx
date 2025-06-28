import React from "react";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const newTask = {
	id: uuidv4(),
	title: "Build taskWise Project",
	category: "development",
	duration: "45",
	isCompleted: false,
};

const UUid = () => {
	return (
		<div>
			<p>newTask.id</p>
		</div>
	);
};

export default UUid;
