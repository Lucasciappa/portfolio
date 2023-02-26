import React from "react"

import { PROJECTS } from "@/config/links";

import Card from "@/components/Card";
import SEO from "@/components/SEO";

const Projects = () => {
	return (
		<>
			<SEO
				title="Proyectos - Lucas Ciapparelli"
				keywords="Lucas Ciapparelli, Front-End Developer, Full Stack Developer, JavaScript Developer, React Developer, Next.js Developer"
				description="Descubre mas sobre Lucas Ciapparelli. Full Stack developer con experiencia en la creación de aplicaciones SEO friendly y dinamicas."
			/>

			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Proyectos
				</h1>
				<p className="text-[15px] md:text-[16px] font-[500] leading-7 text-gray-500 dark:text-gray-400">
					Aquí podrán ver algunos de los proyectos donde trabajé.
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