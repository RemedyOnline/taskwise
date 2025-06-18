import React from "react";
import TestBtnComponent from "../components/TestBtnComponent";
import { cn } from "../lib/utils";

const TestPage = () => {
	const color = "green";
	const colors = {
		red: "text-red-500",
		blue: "text-blue-500",
		green: "text-green-500",
	};
	const border = true;

	return (
		<main>
			<div className="p-36 bg-slate-50 flex flex-col gap-12">
				<h2 className="font-black text-2xl text-center underline">
					Test Page - clsx
				</h2>
				<p
					className={cn(
						colors[color],
						border && `border rounded-2xl border-${color}-200`,
						"p-5 font-bold text-lg"
					)}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde cum sed
					voluptatem qui odit neque, numquam quaerat est in, ipsa repellat
					similique?
				</p>
				<TestBtnComponent
					name="Click Me"
					styling={"bg-red-300 border-red-400"}
				/>
			</div>
		</main>
	);
};

export default TestPage;
