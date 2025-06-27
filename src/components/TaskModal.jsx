import React from "react";

const TaskModal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<section className="bg-blushPink-300 ">
			<div>
				<button onClick={onClose}>❌</button>
				{children}
			</div>
		</section>
	);
};

export default TaskModal;
