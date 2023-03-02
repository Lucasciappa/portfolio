"use client"

import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { useKBar } from "kbar"
import { usePathname } from "next/navigation"

import { HEADER_LINKS } from "@/config/links"

import Dropdown from "@/components/Dropdown"
import { Settings, Menu } from "@/components/Icon"


const Header = () => {
	const pathname = usePathname()
	const { query } = useKBar()

	return (
		<header className="fixed top-0 left-0 right-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-[#0d1117]/50 dark:saturate-100">
			<div className="mx-auto flex h-[70px] max-w-4xl px-8 items-center justify-between">
				<div className="flex items-center gap-2">
					<ul className="hidden space-x-2 md:flex">
						{HEADER_LINKS.map((link, i) => (
							<li key={i}>
								<Link
									className={clsx(
										"rounded py-2 px-3 text-sm font-[500] transition-colors duration-300",
										{
											["text-[#555] dark:text-white hover:bg-[#555] hover:text-white"]:
												link.href !== pathname,
										},
										{
											["bg-[#555] dark:bg-[#24292e] text-white"]: link.href === pathname,
										},
										{
											["bg-[#24292e] dark:bg-[#611D21] hover:dark:bg-[#24292e] text-white"]: link.href === "resume.pdf",
										}
									)}
									href={link.href}
								>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
					<Dropdown>
						<Dropdown.Trigger>
							<button
								className="flex h-9 w-9 items-center justify-center rounded-md duration-300 hover:bg-accent-2 md:hidden"
								aria-label="Toggle menu"
							>
								<Menu />
							</button>
						</Dropdown.Trigger>
						<Dropdown.Content>
							{HEADER_LINKS.map((link, i) => (
								<Dropdown.Item key={i}>
									<Link
										href={link.href}
										className="flex items-center gap-4"
									>
										{link.icon}
										<div>{link.text}</div>
									</Link>
								</Dropdown.Item>
							))}
						</Dropdown.Content>
					</Dropdown>
				</div>
				<button
					className="flex h-9 w-9 items-center justify-center rounded duration-300 hover:bg-[#555] dark:hover:bg-accent hover:text-white"
					onClick={() => query.toggle()}
					aria-label="Command Bar"
				>
					<Settings />
				</button>
			</div>
		</header>
	)
}

export default Header
