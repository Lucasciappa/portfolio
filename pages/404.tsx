import Link from "next/link"
import SEO from "@/components/SEO"

const NotFound = () => {
	return (
		<>
			<SEO
				title="404 - Página no encontrada"
				keywords="404, pagina no encontrada, error, Lucas Ciapparelli"
				description="Lo sentimos, no se puede encontrar la página que está buscando. Utilice la navegación para encontrar lo que está buscando."
			/>

			<div className="space-y-2 py-6 md:space-y-5">
				<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
					Upsss! Página no encontrada.
				</h1>
			</div>
			<div className="mb-8 leading-7 space-y-4">
				{["Parece que la página que está buscando se ha perdido o no existe.", "No se preocupe, lo ayudaremos a encontrar el camino de regreso al contenido que está buscando.", "Mientras tanto, ¿por qué no se toma un momento para apreciar este hermoso sitio web?"].map((paragraph, i) => (
					<p className="text-[15px] leading-7 text-gray-700 dark:text-gray-400" key={i}>
						{paragraph}
					</p>
				))}
			</div>

			<Link
				href="/"
				className="py-2 px-3 items-center text-[15px] justify-center gap-2 rounded transition-colors duration-300 bg-[#24292e] hover:bg-[#555] text-white"
			>
				Volver al inicio
			</Link>
		</>
	)
}

export default NotFound;