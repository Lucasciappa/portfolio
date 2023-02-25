import Link from "next/link"
import SEO from "@/components/SEO"

const NotFound = () => {
	return (
		<>
			<SEO
				title="404 - Page Not Found"
				keywords="404, page not found, error, Deus Gitonga"
				description="Sorry, the page you're looking for can't be found. Use the navigation to find what you're looking for."
			/>

			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Whoops! Page Not Found
				</h1>
			</div>
			<div className="mb-8 leading-7 space-y-4 ">
				{["Well, this isn't what you were looking for. It seems like the page you're looking for has gone missing.", "Don't worry, we'll help you find your way back to the content you're looking for. In the meantime, why not take a moment to appreciate this beautiful website?"].map((paragraph, i) => (
					<p className="text-[15px] leading-7 text-gray-700 dark:text-gray-400" key={i}>
						{paragraph}
					</p>
				))}
			</div>

			<Link
				href="/"
				className="py-2 px-3 items-center text-[15px] justify-center gap-2 rounded transition-colors duration-300 bg-[#24292e] hover:bg-[#555] text-white"
			>
				Back to Home
			</Link>
		</>
	)
}

export default NotFound;