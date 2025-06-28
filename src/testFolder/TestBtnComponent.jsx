import React from "react";
import { cn } from "../lib/utils";

const TestBtnComponent = ({ name, styling }) => {
	return (
		<div>
			<button
				className={cn(
					`bg-slate-300 px-4 py-3 border border-slate-400 rounded-full ${styling}`
				)}
			>
				{name}
			</button>
		</div>
	);
};

export default TestBtnComponent;
