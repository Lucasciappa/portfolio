import { FOOTER_LINKS } from "@/config/links"

import Link from "@/components/Link"
import NowPlaying from "@/components/NowPlaying"
import { ReactNode } from "react"
import { SocialLink } from "./SocialLink"
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/Icon/SocialIcons'

function NavLink({ href, children }: { href: string, children: ReactNode }) {
	return (
		<Link
			href={href}
			className="transition hover:text-primary-coral dark:hover:text-primary-coral"
		>
			{children}
		</Link>
	)
}

const Footer = () => {
	return (
		<footer className="mx-auto flex max-w-4xl flex-col px-8 pb-8 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">


			{/* <NowPlaying /> */}
			{/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
				{FOOTER_LINKS.map((list, i) => (
					<div key={i} className="mb-10 flex flex-col items-start gap-4 pr-4">
						{list.links.map((link, j) => (
							<Link
								key={j}
								href={link.href}
								className="text-gray-500 text-[15px] transition-colors duration-300 hover:text-portfolio-fg"
							>
								{link.title}
							</Link>
						))}
					</div>
				))}
			</div> */}
			<div className="flex flex-col items-center justify-between gap-6 mt-12">
				<div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
					<NavLink href="/about">About</NavLink>
					<NavLink href="/dashboard">Dashboard</NavLink>
					<NavLink href="/writing">Writing</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/uses">Uses</NavLink>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-zinc-600 dark:text-zinc-400">
						&copy; {(new Date).getFullYear()} Lucas Ciapparelli. All rights reserved.
					</p>
					<div className="mx-auto mt-6 flex gap-6">
						<SocialLink
							href="https://github.com/Lucasciappa"
							ariaLabel="Follow on GitHub"
							icon={GitHubIcon}
						/>
						<SocialLink
							href="https://linkedin.com/in/lucasciappa/"
							ariaLabel="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
						<SocialLink
							href="https://www.instagram.com/lucasciapparelli"
							ariaLabel="Follow on Instagram"
							icon={InstagramIcon}
						/>
						<SocialLink
							href="https://twitter.com/ciappalucas"
							ariaLabel="Follow on Twitter"
							icon={TwitterIcon}
						/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
