import React from "react";
import { cn } from "../lib/cnUtils";

const ChangeColorBtn = ({
	className,
	classNamee,
	btnName,
	isPrimary,
	variant,
}) => {
	function getVariantStyle(variant) {
		switch (variant) {
			case "primary":
				return "text-lg text-blue-500 hover:underline";
			case "secondary":
				return "text-lg text-red-400 font-median hover:italic";
			case "tertiary":
				return "text-lg text-green-600 font-mono font-black hover:uppercase";
			default:
				return "text-base uppercase";
		}
	}
	return (
		<div className="flex gap-12 justify-center">
			<button
				className={cn(
					"bg-amber-200 border-4 text-amber-500 border-amber-500 font-medium font-mono p-2 rounded-2xl",
					className
				)}
			>
				{btnName}
			</button>
			<button
				className={cn("font-light underline italic text-gray-800", {
					"not-italic font-bold text-red-600": isPrimary,
				})}
			>
				Primary Button
			</button>
			<button className={cn(getVariantStyle(variant), classNamee)}>
				Variant Button
			</button>
		</div>
	);
};

export default ChangeColorBtn;
