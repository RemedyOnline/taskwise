export function getDurationInMinutes(startTime, endTime) {
	if (!startTime || !endTime) return "--";

	const [startH, startM] = startTime.split(":").map(Number);
	const [endH, endM] = endTime.split(":").map(Number);

	let startTotal = startH * 60 + startM;
	let endTotal = endH * 60 + endM;

	let diff = endTotal - startTotal;
	if (diff < 0) diff += 1440;
	return `${diff} mins`;
}
