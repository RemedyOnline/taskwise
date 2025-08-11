import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blushPink-200 to-accent text-richPlum-500 flex items-center justify-center px-4">
			<div className="max-w-md w-full text-center">
				{/* 404 Number */}
				<div className="text-9xl font-bold mb-4">404</div>

				{/* Error Message */}
				<h1 className="font-mono text-3xl font-semibold  mb-4">
					Page Not Found
				</h1>

				<p className="font-light mb-8 text-lg">
					Oops! The page you're looking for doesn't exist. It might have been
					moved, deleted, or you entered the wrong URL.
				</p>

				{/* Action Buttons */}
				<div className="space-y-4">
					<Link
						to="/"
						className="inline-block w-full bg-richPlum-500 hover:bg-accent text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
					>
						Go to Dashboard
					</Link>

					<button
						onClick={() => window.history.back()}
						className="w-full border border-richPlum-500 hover:bg-accent hover:border-accent font-medium py-3 px-6 rounded-lg transition-colors duration-200"
					>
						Go Back
					</button>
				</div>

				{/* Additional Help */}
				<div className="mt-8 pt-6 border-t ">
					<p className="text-sm ">
						Need help? Contact support or check our{" "}
						<Link to="/" className="underline">
							documentation
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
