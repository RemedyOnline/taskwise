import clsx from "clsx";
import React from "react";

const GPTbutton = ({ btnName, firstBtn }) => {
	return (
		<div>
			<button
				className={clsx(
					"px-4 py-2 rounded-full border-4",
					{ "bg-blue-300 border-blue-800": firstBtn },
					{ "bg-green-300 border-green-800": !firstBtn }
				)}
			>
				{btnName}
			</button>
		</div>
	);
};

export default GPTbutton;
