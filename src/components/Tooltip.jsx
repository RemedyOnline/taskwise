// src/components/Tooltip.jsx
import React, { useState, useRef, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/cnUtils";

const DEFAULT_DELAY = { show: 120, hide: 100 };
const DEFAULT_OFFSET = 8;

export default function Tooltip({
	children, // trigger element
	content, // tooltip content (string or node)
	position = "right", // "right" | "left" | "top" | "bottom"
	showDelay = DEFAULT_DELAY.show,
	hideDelay = DEFAULT_DELAY.hide,
	offset = DEFAULT_OFFSET,
	className = "", // extra classes for tooltip
}) {
	const id = useId();
	const triggerRef = useRef(null);
	const tipRef = useRef(null);
	const showTimer = useRef();
	const hideTimer = useRef();

	const [visible, setVisible] = useState(false);
	const [coords, setCoords] = useState({
		top: 0,
		left: 0,
		transformOrigin: "left center",
	});

	// cleanup timers when unmounting
	useEffect(() => {
		return () => {
			clearTimeout(showTimer.current);
			clearTimeout(hideTimer.current);
		};
	}, []);

	// calculate tooltip coordinates
	const calculatePosition = () => {
		const trigger = triggerRef.current;
		const tip = tipRef.current;
		if (!trigger || !tip) return;
		const rect = trigger.getBoundingClientRect();
		const tipRect = tip.getBoundingClientRect();
		const scrollX = window.scrollX || window.pageXOffset;
		const scrollY = window.scrollY || window.pageYOffset;

		let top = 0;
		let left = 0;
		let transformOrigin = "left center";

		if (position === "right") {
			top = rect.top + rect.height / 2 - tipRect.height / 2 + scrollY;
			left = rect.right + offset + scrollX;
			transformOrigin = "left center";
		} else if (position === "left") {
			top = rect.top + rect.height / 2 - tipRect.height / 2 + scrollY;
			left = rect.left - tipRect.width - offset + scrollX;
			transformOrigin = "right center";
		} else if (position === "top") {
			top = rect.top - tipRect.height - offset + scrollY;
			left = rect.left + rect.width / 2 - tipRect.width / 2 + scrollX;
			transformOrigin = "center bottom";
		} else {
			// bottom
			top = rect.bottom + offset + scrollY;
			left = rect.left + rect.width / 2 - tipRect.width / 2 + scrollX;
			transformOrigin = "center top";
		}

		setCoords({ top, left, transformOrigin });
	};

	// Recalculate on show and on scroll/resize
	useEffect(() => {
		if (!visible) return;
		calculatePosition();
		const handle = () => calculatePosition();
		window.addEventListener("resize", handle);
		window.addEventListener("scroll", handle, true); // capture to update on parent scroll
		return () => {
			window.removeEventListener("resize", handle);
			window.removeEventListener("scroll", handle, true);
		};
	}, [visible, position, offset]);

	// show/hide with small delays
	const show = () => {
		clearTimeout(hideTimer.current);
		showTimer.current = setTimeout(() => setVisible(true), showDelay);
	};
	const hide = () => {
		clearTimeout(showTimer.current);
		hideTimer.current = setTimeout(() => setVisible(false), hideDelay);
	};

	// handle keyboard: keyboard focus shows tooltip (onFocus), Escape hides it
	const onKeyDown = (e) => {
		if (e.key === "Escape") {
			hide();
			triggerRef.current?.blur();
		}
	};

	// tooltip markup (portal)
	const tooltipNode = (
		<div
			ref={tipRef}
			id={id}
			role="tooltip"
			className={cn(
				"pointer-events-none z-50 absolute transition-opacity transition-transform duration-150 ease-out transform",
				visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
				className
			)}
			style={{
				top: coords.top,
				left: coords.left,
				transformOrigin: coords.transformOrigin,
			}}
		>
			<div className="bg-accent text-white text-xs px-2 py-1 rounded shadow-lg">
				{content}
			</div>
		</div>
	);

	return (
		<>
			<span
				ref={triggerRef}
				onMouseEnter={show}
				onMouseLeave={hide}
				onFocus={show}
				onBlur={hide}
				onKeyDown={onKeyDown}
				tabIndex={0} // make focusable
				aria-describedby={visible ? id : undefined} // accessible link
				className="inline-block"
			>
				{children}
			</span>

			{createPortal(tooltipNode, document.body)}
		</>
	);
}
