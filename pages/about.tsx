import React from "react";

import SEO from "@/components/SEO"

const About = () => {
	return (
		<>
			<SEO
				title="Sobre mi - Lucas Ciapparelli"
				keywords="Lucas Ciapparelli, Front-End Developer, Full Stack Developer, JavaScript Developer, React Developer, Next.js Developer"
				description="Descubre mas sobre Lucas Ciapparelli. Full Stack developer con experiencia en la creación de aplicaciones SEO friendly y dinamicas"
			/>

			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Sobre mi -
				</h1>
				<p className="text-[15px] leading-7 text-gray-500 dark:text-gray-400">
					Hola a todos{" "}
					<span role="img" aria-label="waving hand" className="wave text-2xl">
						👋
					</span>
					,
				</p>
			</div>
			<div className="mb-8 leading-7 space-y-4 ">
				{["Mi nombre es Lucas, tengo 25 años y vivo en Capital Federal, Argentina. Mi pasión es la innovación y apostar sobre nuevas tecnologías, son el camino para un mundo con mas oportunidades. Promuevo habilidades blandas para el desarrollo e innovación en equipo.", "Mi pasión por el desarollo de software empezó hace 4 años cuando me inscribí al curso de Codo a Codo - Full Stack con Python. Con el paso del tiempo fuí formándome mas como persona, aprendiendo a desenvolverme en equipo y generando autonomía.", " Disfruto llevar a cabo la maquetación e interactividad de interfaces web, así como la optimización para el buen posicionamiento y el rendimiento de carga de sitios y aplicaciones web.", "Con respecto a mi experiencia laboral, cuento con 2 años trabajando en una Startup española. Utilizamos el stack MEARN. Next.js para la web y Angular para el panel de admin. Para el Backend Node.js y MongoDB."].map((paragraph, i) => (
					<p className="text-[15px] leading-7 text-gray-700 dark:text-gray-400" key={i}>
						{paragraph}
					</p>
				))}
			</div>
		</>
	);
};

export default About;
