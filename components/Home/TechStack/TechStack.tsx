import React from "react"
import Link from "next/link"
import { TECH_STACK_LINKS } from "@/config/links"

const TechStack = () => {
    return (
        <>
            <div className="space-y-2 mt-8 mb-4 md:space-y-5 md:py-2">
                <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
                    My Tech-Stack
                </h1>
            </div>
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-9">
                {TECH_STACK_LINKS.map((list, i) => (
                    <div className="mb-10 flex flex-col items-start gap-4 pr-4">
                        <Link
                            key={i}
                            href={list.href}
                            className="text-gray-500 text-[15px] transition-colors duration-300 hover:text-portfolio-fg"
                            target="_blank"
                        >
                                {list.icon}

                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TechStack;