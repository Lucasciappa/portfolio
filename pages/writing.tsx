import React from "react"

import SEO from "@/components/SEO"
import { SearchIcon } from "@/components/Icon"

const BlogPage = () => {
	return (
		<>
			<SEO
				title="Blog - Deus Gitonga"
				keywords="front-end development, JavaScript, web development, design, best practices, industry trends"
				description="Read about the latest technologies, best practices, and trends in the industry, and learn how to improve your skills as a Front-End and JavaScript Developer."
			/>

			<div className="space-y-6 py-6">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Lorem ipsum...
				</h1>
				<p className="text-[15px] sm:text-[14px] md:text-[15px] leading-7 text-gray-500 dark:text-gray-400">
					I share my experiences and insights on the latest technologies, best practices, and trends in the industry. Whether you're just starting out or are a seasoned developer, I hope you'll find something here that inspires you and helps you grow in your craft.
				</p>
				<div className="relative">
					<input
						type="text"
						placeholder="Search articles"
						aria-label="Search articles"
						className="w-full text-[15px] rounded border border-gray-500 bg-portfolio-bg py-2 px-3 pl-12 transition-colors duration-200 ease-linear focus:border-accent-5 focus:outline-none"
						id="search"
					/>
					<label htmlFor="search">
						<SearchIcon
							width="20"
							height="20"
							className="absolute top-1/2 left-4 -translate-y-1/2"
						/>
					</label>
				</div>
			</div>
		</>
	)
}

export default BlogPage