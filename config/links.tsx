import { Github, Instagram, LinkedIn, About, Home, Projects, NextJS, JavaScript, TypeScript, ReactJS, Angular, NodeJS, MongoDB, Python, MySQL } from "@/components/Icon"

import { DropdownItemType } from "@/components/Dropdown"
import { FooterLinks } from "@/components/Layout/Footer"
import { HeroLinks } from "@/components/Home/Hero"
import { TechStackLinks } from "@/components/Home/TechStack/TechStack.types"
import { ProjectLinks } from "@/components/Home/Projects"
import Linux from "@/components/Icon/Linux"

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

export const TECH_STACK_LINKS: TechStackLinks = [
	{
		icon: <JavaScript width="65" height="65"/>,
		href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
	},
	{
		icon: <TypeScript width="65" height="65" />,
		href: "https://www.typescriptlang.org/",
	},
	{
		icon: <ReactJS width="65" height="65" />,
		href: "https://es.reactjs.org/",
	},
	{
		icon: <NextJS width="65" height="65" />,
		href: "https://nextjs.org/",
	},
	{
		icon: <Angular width="65" height="65" />,
		href: "https://angular.io/",
	},
	{
		icon: <NodeJS width="65" height="65" />,
		href: "https://nodejs.org/",
	},
	{
		icon: <Python width="65" height="65" />,
		href: "https://www.python.org/",
	},
	{
		icon: <MongoDB width="65" height="65" />,
		href: "https://www.mongodb.com/",
	},
	{
		icon: <MySQL width="65" height="65" />,
		href: "https://www.mysql.com/",
	}
	// {
	// 	icon: <Linux width="65" height="65" />,
	// 	href: "https://www.instagram.com/lucasciapparelli",
	// }
]

export const PROJECTS: ProjectLinks = [
	{
		id: 1,
		name: "Valorant Challenger LATAM",
		description: "Página oficial de challengers LATAM 2023 Valorant. Desarrollada junto con mi equipo y emprendimiento 'Shiva Web Builders'.",
		slug: "valorant-challenger",
		githubUrl: null,
		websiteUrl: "https://www.valorantchallengers.lat/",
		tech: [
			"Next.js",
			"Tailwind CSS",
			"Node.js",
			"TypeScript"
		]
	},
	{
		id: 2,
		name: "Overwatch World Cup",
		description: "Página oficial de las pruebas para el campeonato mundial de Overwatch 2023 en América. Desarrollada junto con mi equipo y emprendimiento 'Shiva Web Builders'.",
		slug: "overwatch-world-cup",
		githubUrl: null,
		websiteUrl: "https://overwatchwcamericasa.com/",
		tech: [
			"Next.js",
			"Tailwind CSS",
			"Node.js",
			"TypeScript"
		]
	},
	{
		id: 3,
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
		id: 4,
		name: "Gonzalo Giudice DJs",
		description: "Landing sencilla con un formulario para enviar consultas.",
		slug: "gonzalogiudicedjs",
		githubUrl: "https://github.com/Lucasciappa/gonzalogiudicedjs",
		websiteUrl: "https://www.gonzalogiudicedjs.com.ar/",
		tech: [
			"Next.js",
			"Tailwind CSS",
		]
	},
	{
		id: 4,
		name: "Portfolio web",
		description: "Éste portfolio, para que puedan ver un poco de su código fuente.",
		slug: "portfolio",
		githubUrl: "https://github.com/Lucasciappa/portfolio",
		websiteUrl: "https://lucasciappa-dev.vercel.app/",
		tech: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS"
		]
	},
]