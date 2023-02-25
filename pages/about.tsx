import React from "react";

import SEO from "@/components/SEO"

const About = () => {
	return (
		<>
			<SEO
				title="About - Deus Gitonga"
				keywords="Deus Gitonga, Front-End Developer, JavaScript Developer, React Developer, Next.js Developer"
				description="Learn more about Deus Gitonga, a Front-End and JavaScript Developer with experience in creating dynamic, user-friendly websites and applications."
			/>

			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					About Me
				</h1>
				<p className="text-[15px] leading-7 text-gray-500 dark:text-gray-400">
					Hello there{" "}
					<span role="img" aria-label="waving hand" className="wave text-2xl">
						👋
					</span>
					,
				</p>
			</div>
			<div className="mb-8 leading-7 space-y-4 ">
				{["I am a Front-End & JavaScript Developer based in Kenya with a passion for creating dynamic and user-friendly digital experiences.", "Recent projects have involved working with a variety of clients and honing my skills in front-end technologies such as React JS and Next.js. I'm always eager to learn and experiment with new tools and techniques.", "In addition to my professional experiences, I hold a Degree in Mathematics & Computer Science from Jomo Kenyatta University of Agriculture and Technology. My education has provided a foundation for my technical skills and has taught me the importance of designing user-centered experiences."].map((paragraph, i) => (
					<p className="text-[15px] leading-7 text-gray-700 dark:text-gray-400" key={i}>
						{paragraph}
					</p>
				))}
			</div>
		</>
	);
};

export default About;
