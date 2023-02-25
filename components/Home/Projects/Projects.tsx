import React from "react"

import Link from "next/link"

import { PROJECTS } from "@/config/links"
import { ChevronRight } from "@/components/Icon"

import Card from "@/components/Card"

const Projects = () => {
	return (
		<>
			<div className="space-y-2 mt-8 mb-4 md:space-y-5 md:py-2">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Projects
				</h1>
			</div>
			<div className="flex flex-col gap-5">
				<div className="grid gap-6 sm:grid-cols-2">
					{PROJECTS.slice(0, 2).map((project) => {
						const { name, description, githubUrl, websiteUrl, tech } = project;

						return (
							<Card
								key={project.id}
								title={name}
								description={description}
								href={websiteUrl}
								github={githubUrl}
								tech={tech}
							/>
						)
					})}
				</div>
				<div className="flex">
					<Link
						href="/projects"
						className="group my-2 flex items-center gap-1 items-center text-base leading-7 text-gray-700 dark:text-gray-400 transition-all duration-300 hover:scale-105"
					>
						<span>See More</span>
						<ChevronRight />
					</Link>
				</div>
			</div>
		</>
	)
}

export default Projects;