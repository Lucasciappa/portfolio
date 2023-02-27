import { Github, Instagram, LinkedIn, About, Home, Projects } from "@/components/Icon"

import { DropdownItemType } from "@/components/Dropdown"
import { HeroLinks } from "@/components/Home/Hero"
import { ProjectLinks } from "@/components/Home/Projects"
import { FooterLinks } from "@/components/Layout/Footer"

export const HEADER_LINKS: DropdownItemType[] = [
	{
		icon: <Home />,
		href: "/",
		text: "Inicio",
	},
	{
		icon: <Projects />,
		href: "/writing",
		text: "Blog",
	},
	{
		icon: <Projects />,
		href: "/projects",
		text: "Proyectos",
	},
	{
		icon: <About />,
		href: "/about",
		text: "Sobre mi",
	},
	{
		icon: <About />,
		href: "resume.pdf",
		text: "Descarga mi CV",
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
		name: "GransLiving",
		description: "Página web oficial de GransLiving. Buscador de residencias, optimizaciones, SEO friendly.",
		slug: "gransliving",
		githubUrl: null,
		websiteUrl: "https://gransliving.com/",
		tech: [
			"Next.JS",
			"Tailwind",
			"Node.js",
			"MongoDB",
		]
	},
	{
		id: 2,
		name: "Neucrist",
		description: "Un emprendimiento de neumáticos, creada sin tanto detalle.",
		slug: "neucrist",
		githubUrl: "https://github.com/Lucasciappa/Neucrist",
		websiteUrl: "https://www.neucrist.com.ar/",
		tech: [
			"Next.js",
			"Tailwind CSS",
			"TypeScript"
		]
	},
	{
		id: 3,
		name: "Gonzalo Giudice DJs",
		description: "Una landing page sencilla con un formulario para enviar consultas.",
		slug: "gonzalogiudicedjs",
		githubUrl: "https://github.com/Lucasciappa/gonzalogiudicedjs",
		websiteUrl: "https://www.gonzalogiudicedjs.com.ar/",
		tech: [
			"Next.js",
			"Tailwind CSS",
		]
	},
]