"use client"

import React from "react"

import { Github, Instagram, LinkedIn, Moon, Sun } from "@/components/Icon"
import { Action, KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from "kbar"

import { useTheme } from "@/lib/next-themes"

import Results from "./Results"

import { WithChildren } from "@/types"

type KBarProps = WithChildren

const KBar = (props: KBarProps) => {
	const { children } = props
	const { setTheme } = useTheme()

	const actions: Action[] = [
		{
			id: "light-mode",
			name: "Light Mode",
			keywords: "light mode",
			section: "Set Theme",
			perform: () => setTheme("light"),
			icon: <Sun />,
		},
		{
			id: "dark-mode",
			name: "Dark Mode",
			keywords: "dark mode",
			section: "Set Theme",
			perform: () => setTheme("dark"),
			icon: <Moon />,
		},
		{
			id: "github",
			name: "GitHub",
			keywords: "github",
			section: "Social",
			perform: () => window.open("https://github.com/gitonga-deus", "_blank"),
			icon: <Github width="30" height="30" />,
		},
		{
			id: "linkedin",
			name: "LinkedIn",
			keywords: "linkedin",
			section: "Social",
			perform: () =>
				window.open("https://linkedin.com/in/gitonga-deus/", "_blank"),
			icon: <LinkedIn width="30" height="30" />,
		},
		{
			id: "instagram",
			name: "Instagram",
			keywords: "ig instagram",
			section: "Social",
			perform: () =>
				window.open("https://instagram.com/_deus04", "_blank"),
			icon: <Instagram width="30" height="30" />,
		},
	]

	return (
		<>
			<KBarProvider actions={actions}>
				<KBarPortal>
					<KBarPositioner className="z-50 bg-[#0d1117]/10 backdrop-blur">
						<KBarAnimator className="w-full max-w-lg rounded border border-accent-2 bg-portfolio-bg">
							<KBarSearch className="w-full bg-transparent py-3 px-6 outline-none" />
							<Results />
							<div className="h-4"></div>
						</KBarAnimator>
					</KBarPositioner>
				</KBarPortal>
				{children}
			</KBarProvider>
		</>
	)
}

export default KBar
