import React from "react";

const AddTaskModal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<section className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="bg-blushPink-50 rounded-lg shadow-lg p-6 w-full max-w-md relative">
				<button
					aria-label="Close Task Form button..."
					onClick={onClose}
					className="absolute top-4 right-4 text-3xl font-bold text-red-500 hover:text-red-400 hover:cursor-pointer"
				>
					&times;
				</button>
				{children}
			</div>
		</section>
	);
};

export default AddTaskModal;
