import SEO from "@/components/SEO"
import Hero from "@/components/Home/Hero"
import Projects from "@/components/Home/Projects"
import Chat from "@/components/Home/Chat/Chat"

const ANSWERS = {
	intro: (
		<p>¡Hola👋! Soy Lucas Ciapparelli, (o Ciappa para amigos y enemigos). Soy Front-end Developer y disfruto trabajar con Javascript. Hace 2 años que trabajo en una Startup Española como Full Stack Developer. Tengo 25 años y vivo en Belgrano, Capital Federal, Argentina.</p>
	),
	comunidad: (
		<p>Si queres que te ayude en algo o simplemente hablar de tecnologia, podes agregarme al discord en <a className='underline' href="https://discord.com/users/Ciappa#1693" rel='noopener noreferer' target="_blank">este link</a> </p>
	),
	unknown: (
		<p>En realidad no soy Lucas, soy una AI para contestar solo algunas preguntas. Intentá reformular por favor :)</p>
	),
	contact: (
		<p>Si queres contactarme, podes hacerlo a través de mi <a className='underline' href="https://discord.com/users/Ciappa#1693" rel='noopener noreferer' target="_blank">Discord</a>, <a className='underline' href="https://twitter.com/ciappalucas" rel='noopener noreferer' target="_blank">Twitter</a>, <a className='underline' href="https://www.instagram.com/lucasciapparelli/" rel='noopener noreferer' target="_blank">Instagram</a> o <a className='underline' href="https://www.linkedin.com/in/lucasciappa/" rel='noopener noreferer' target="_blank">Linkedin</a>.</p>
	)
};

const EXAMPLES = [{ "text": "Hola", "label": "intro" }, { "text": "Como estas?", "label": "intro" }, { "text": "Quien sos?", "label": "intro" }, { "text": "Tengo una oferta para vos", "label": "contact" }, { "text": "Por donde te puedo contactar", "label": "contact" }, { "text": "Tengo una duda", "label": "comunidad" }, { "text": "Necesito solucionar algo", "label": "comunidad" }, { "text": "Estas buscando un cambio laboral?", "label": "contact" }, { "text": "Donde trabajas?", "label": "intro" }, { "text": "Con que tecnologías trabajas?", "label": "intro" }, { "text": "Con que tecnologías tenés experiencia?", "label": "intro" }, { "text": "Estas escuchando propuestas?", "label": "contact" }, { "text": "Sabes ingles?", "label": "intro" }, { "text": "Cuantos años de experiencia tenes?", "label": "intro" }, { "text": "Te interesaría cambiar de companáa?", "label": "contact" }, { "text": "Como es tu Linkedin?", "label": "contact" }, { "text": "Como es tu GitHub?", "label": "contact" }, { "text": "Como hiciste este chat?", "label": "unknown" }, { "text": "Como aprender a programar?", "label": "comunidad" }, { "text": "Te puedo hacer una consulta?", "label": "comunidad" }, { "text": "Cuales son tus horarios?", "label": "contact" }, { "text": "Con que cursos has aprendido?", "label": "unknown" }, { "text": "Cuales son tus redes?", "label": "contact" }, { "text": "Tenes curiculum?", "label": "contact" }, { "text": "Cual es tu expectativa salarial", "label": "contact" }, { "text": "Contame un chiste", "label": "unknown" }, { "text": "Crees en dios?", "label": "unknown" }, { "text": "Donde estas trabajando?", "label": "intro" }, { "text": "Trabajas como freelancer?", "label": "intro" }, { "text": "Cuales son tus hobbies?", "label": "unknown" }, { "text": "Cual es tu empleo actual?", "label": "intro" }];

const API_KEY = "fMLMyse3PWOwBTejw8uKNvRxos24VNG5GvSS5ik4";

export default function Home() {
	return (
		<>
			<SEO
				title="Hello World 👋!"
				keywords="Lucas Ciapparelli, Full Stack developer, javascript developer, home, services, skills, user experience, user interface"
				description="Lucas Ciapparelli, soy un Full Stack Developer especialista en crear aplicaciones web amigables y dinámicas. Más información sobre mis servicios y habilidades."
			/>
			<Hero />
			<Projects />
			<Chat apiKey={API_KEY} examples={EXAMPLES} answers={ANSWERS} initialMessage="Hola, haceme tu pregunta" />
		</>
	)
}
