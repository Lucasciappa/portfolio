import React from "react"

import { ExternalLink, Github } from "@/components/Icon";
import Link from "next/link"

type CardProps = {
	title: String;
	description: String;
	href: string;
	github: string;
	tech: String[];
}

const Card = ({ title, description, href, github, tech }: CardProps) => {
	return (
		<div className="flex flex-col space-y-3 rounded border border-accent-2 py-3 px-2 ">
			<div className="flex flex-row justify-between px-3">
				<Link
					href={github}
					target="_blank"
					className="mx-1 transition-all duration-300 hover:scale-110"
				>
					<Github width="25" height="25" />
				</Link>

				<Link
					href={href}
					target="_blank"
					className="mx-1 transition-all duration-300 hover:scale-110"
				>
					<ExternalLink />
				</Link>
			</div>
			<div className="p-4">
				<h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
					{title}
				</h2>
				<p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
				<div className="flex flex-row justify-between">
					<div className="text-portfolio-fg md:text-[14px] text-[13px]">
						{tech.map((item, i) => (
							<span key={i} className="mr-2">&#8226; {item}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card;