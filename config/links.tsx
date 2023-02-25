import { Github, Instagram, LinkedIn, About, Home, Projects } from "@/components/Icon"

import { DropdownItemType } from "@/components/Dropdown"
import { HeroLinks } from "@/components/Home/Hero"
import { ProjectLinks } from "@/components/Home/Projects"
import { FooterLinks } from "@/components/Layout/Footer"

export const HEADER_LINKS: DropdownItemType[] = [
	{
		icon: <Home />,
		href: "/",
		text: "Home",
	},
	{
		icon: <Projects />,
		href: "/writing",
		text: "Writing",
	},
	{
		icon: <Projects />,
		href: "/projects",
		text: "Projects",
	},
	{
		icon: <About />,
		href: "/about",
		text: "About",
	},
]

export const FOOTER_LINKS: FooterLinks = [
	{
		links: [
			{
				href: "/about",
				title: "About",
			},
			{
				href: "/writings",
				title: "Writing",
			},
			{
				href: "/projects",
				title: "Projects",
			},
		],
	},
	{
		links: [
			{
				href: "https://github.com/Lucasciappa",
				title: "GitHub",
			},
			{
				href: "https://linkedin.com/in/lucasciappa/",
				title: "LinkedIn",
			},
			{
				href: "https://www.instagram.com/lucasciapparelli",
				title: "Instagram",
			},
		],
	},
]

export const HERO_LINKS: HeroLinks = [
	{
		icon: <Github width="30" height="30" />,
		href: "https://github.com/Lucasciappa",
	},
	{
		icon: <LinkedIn width="30" height="30" />,
		href: "https://linkedin.com/in/lucasciappa/",
	},
	{
		icon: <Instagram width="30" height="30" />,
		href: "https://www.instagram.com/lucasciapparelli",
	}
]

export const PROJECTS: ProjectLinks = [
	{
		id: 1,
		name: "Githiga Self-Help Group",
		description: "Official website for St. John Evangelist Githiga Catholic Church Self-Help Group",
		slug: "githiga-shg",
		githubUrl: "https://github.com/gitonga-deus/githiga_shg.git",
		websiteUrl: "https://githigacaritasnairobi.org/",
		tech: [
			"React JS",
			"Sanity CMS",
			"Bootstrap"
		]
	},
	{
		id: 2,
		name: "Personal Website 2.0",
		description: "A Next.js website for the purpose of showcasing skills, experience, and work.",
		slug: "portfolio",
		githubUrl: "https://github.com/gitonga-deus/portfolio.git",
		websiteUrl: "https://gitonga.me/",
		tech: [
			"Next.js",
			"Tailwind CSS",
			"TypeScript"
		]
	},
]