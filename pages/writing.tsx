import React from "react"

import SEO from "@/components/SEO"
import { SearchIcon } from "@/components/Icon"

const BlogPage = () => {
	return (
		<>
			<SEO
				title="Blog - Lucas Ciapparelli"
				keywords="Lucas Ciapparelli, Front-End Developer, Full Stack Developer, JavaScript Developer, React Developer, Next.js Developer"
				description="Descubre mas sobre Lucas Ciapparelli. Full Stack developer con experiencia en la creación de aplicaciones SEO friendly y dinamicas"
			/>

			<div className="space-y-6 py-6">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Mi Blog <span className="text-2xl text-zinc-600 dark:text-gray-400">(Sección en mantenimiento)</span>
				</h1>
				<p className="text-[15px] sm:text-[14px] md:text-[15px] leading-7 text-gray-500 dark:text-gray-400">
					Aquí compartiré mis experiencias y conocimientos sobre las últimas novedades de tecnología, las mejores prácticas y tendencias. Mi idea es poder ayudar e inspirar a quien lo necesite. Espero que pronto esté disponible
				</p>
				<div className="relative">
					<input
						type="text"
						placeholder="Buscar artículos"
						aria-label="Buscar artículos"
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