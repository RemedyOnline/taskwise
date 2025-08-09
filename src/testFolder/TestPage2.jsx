import React, { useState } from "react";
import { cn } from "../lib/cnUtils";

const TestPage2 = () => {
	const isActive = true;
	const [flex, setFlex] = useState(false);

	function handleDirectionToggle() {
		setFlex((prev) => !prev);
		console.log("direction changed to", flex ? "Row" : "Column");
		console.log(flex);
		return flex;
	}

	return (
		<section className="bg-amber-200 p-20 gap-5 flex flex-col">
			<h2
				className={cn(
					"text-xl font-bold p-2 text-center bg-red-300",
					isActive ? "bg-red-500, bg-green-300" : "bg-blue-300"
				)}
			>
				TEST PAGE 2
			</h2>
			<p
				className={cn(
					isActive ? "bg-red-400" : "bg-gray-300",
					"p-5 rounded-xl"
				)}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis
				maxime at expedita sed qui voluptate molestiae maiores excepturi aliquid
				aspernatur commodi, quaerat asperiores ipsam obcaecati repudiandae
				voluptas, ut delectus?
			</p>
			<div
				className={cn(
					"p-4 rounded-xl flex gap-4 items-center transition-all duration-1000",
					isActive && "bg-red-300",
					flex ? "flex-col" : "justify-center"
				)}
			>
				<button className="w-fit px-4 py-2 rounded-xl bg-amber-300 shadow-amber-500">
					Hello
				</button>
				<button className="w-fit px-4 py-2 rounded-xl bg-gray-300 shadow-gray-500">
					Holla
				</button>
				<button className="w-fit px-4 py-2 rounded-xl bg-cyan-300 shadow-amber-500">
					Salut
				</button>
			</div>
			<button
				className="border-2 border-gray-700 w-fit self-center p-3 hover:bg-gray-700 hover:text-white hover:cursor-pointer"
				onClick={handleDirectionToggle}
			>
				Change Button Direction
			</button>
		</section>
	);
};

export default TestPage2;
