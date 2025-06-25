import React from "react";
import TestBtnComponent from "../components/TestBtnComponent";
import { cn } from "../lib/utils";
import ChangeColorBtn from "../components/ChangeColorBtn";

const TestPage = () => {
	const color = "green";
	const colors = {
		red: "text-red-500",
		blue: "text-blue-500",
		green: "text-green-500",
	};
	const border = true;

	const bgColor = "blue";
	const bgColorCollection = {
		blue: "bg-blue-200",
		red: "bg-red-200",
		amber: "bg-amber-200",
	};

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
			<section className="bg-cyan-100 w-full h-fit p-24 text-center flex flex-col gap-6 items-center">
				<h2 className="text-2xl font-black">
					DAY 2 - learning how to use "clsx", "twMerge" and "cn"
				</h2>
				<p className={cn(bgColorCollection[bgColor], "w-96 text-center p-4")}>
					So basically, to use <strong>clsx</strong> & <strong>twMerge</strong>{" "}
					more efficiently, you install both packages, references them in a
					utility file, and the us <strong>cn</strong> to call and use them at
					once everytime...
				</p>
				<ChangeColorBtn
					className="border-red-500 bg-red-100 text-red-500 font-black font-serif rounded-lg px-5"
					btnName="Hello"
					isPrimary={true}
					variant={"primary"}
					classNamee={"bg-pink-200 p-3 rounded-xl border-4 border-pink-500 bor"}
				/>
			</section>
		</main>
	);
};

export default TestPage;
