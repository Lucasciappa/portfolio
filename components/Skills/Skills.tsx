/* eslint-disable prettier/prettier */
import {
	SiReact,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiNodedotjs,
	SiTailwindcss,
	SiGit,
} from "react-icons/si"

import { motion } from "framer-motion"
import { FadeContainer, popUp } from "@/lib/FramerMotionVariants"

const skills = [
	{
		name: "HTML",
		logo: SiHtml5,
	},
	{
		name: "CSS",
		logo: SiCss3,
	},
	{
		name: "JavaScript",
		logo: SiJavascript,
	},
	{
		name: "TypeScript",
		logo: SiTypescript,
	},
	{
		name: "React",
		logo: SiReact,
	},
	{
		name: "Next.js",
		logo: SiNextdotjs,
	},
	{
		name: "Node.js",
		logo: SiNodedotjs,
	},
	{
		name: "Tailwind CSS",
		logo: SiTailwindcss,
	},
	{
		name: "Git",
		logo: SiGit,
	}
]

const Skills = () => {
	return (
		<>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={FadeContainer}
				viewport={{ once: true }}
				className="my-10 grid grid-cols-3 gap-4"
			>
				{skills.map((skill) => (
					<motion.div
						title={skill.name}
						variants={popUp}
						key={skill.name}
						className="group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 sm:justify-start md:origin-top"
					>
						<div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
							<skill.logo className="h-8 w-8" />
						</div>
						<p className="pointer-events-none hidden select-none sm:inline-flex text-[15px] leading-7 text-gray-700 dark:text-gray-400">
							{skill.name}
						</p>
					</motion.div>
				))}
			</motion.div>
		</>
	)
}

export default Skills