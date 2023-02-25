import React from "react"

import { PROJECTS } from "@/config/links";

import Card from "@/components/Card";
import SEO from "@/components/SEO";

const Projects = () => {
	return (
		<>
			<SEO
				title="Projects - Deus Gitonga"
				keywords="Deus Gitonga, front-end developer, portfolio, projects, user experience, user interface"
				description="Check out Deus Gitonga's Portfolio of Front-End Development Projects, featuring dynamic, user-friendly websites and applications."
			/>

			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Projects
				</h1>
				<p className="text-[15px] sm:text-[14px] md:text-[15px] font-[500] leading-7 text-gray-500 dark:text-gray-400">
					A selection of projects I worked on in the past few years. Make sure to give them a star  ⭐ on GitHub!
				</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2">
				{PROJECTS.map((project) => {
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
		</>
	)
}

export default Projects;