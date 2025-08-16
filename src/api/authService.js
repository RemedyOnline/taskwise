import apiClientMain from "./apiClientMain";

// SIGN UP...
export async function registerUser(payload) {
	// payload = {firstName, lastName, email, password, confirmPassword}
	const res = await apiClientMain.post("/users/register", payload);
	return res.status === 200; // per documentation...
}

// LOG IN...
export async function loginUser(credentials) {
	// credentials = { email, password }
	const { data, status } = await apiClientMain.post(
		"/users/login",
		credentials
	);
	if (status === 200 && data?.accessToken) {
		localStorage.setItem("accessToken", data.accessToken);
		return { accessToken: data.accessToken, message: data.message ?? "" };
	}

	// if no token is returned for some reason.. treat as error...
	throw new Error("Login succeeded but no accessToken was return bro!");
}

// LOG OUT...
export function logoutUser() {
	localStorage.removeItem("accessToken");
}
