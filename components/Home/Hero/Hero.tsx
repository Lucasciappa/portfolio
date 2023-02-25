import Image from "next/image";

const Hero = () => {
	return (
		<div className="space-y-6 py-6">
			<div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
				<div className="space-y-4 max-w-full">
					<div className=" ring-[5px] ring-purple-500/10 border border-gray-800 rounded-full h-20 md:h-32 w-20 md:w-32 bg-gradient-to-r from-[#071127] to-[#1c0942] relative mx-auto md:mx-0 ">
						<Image
							src="/me.jpg"
							fill
							alt="profile-picture"
							className="rounded-full select-none"
							draggable="false"
						/>
					</div>
					<h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 md:text-4xl bg-clip-text dark:text-transparent bg-gradient-to-r from-pink-500 via-primary-coral to-yellow-500">
						Hey, I&#39;m Lucas {" "} <span className="text-[18px] font-light text-primary-black dark:text-gray-300 dark:text-opacity-20">Full-stack software engineer
						</span>
					</h1>
					<p className="text-[15px] leading-7 text-gray-700 dark:text-gray-400">
						Bienvenidos a mi portfolio, aquí podrán conocerme mejor. También podran ver los proyectos donde trabajé y las tecnologías que mas me gustan, entre muchas cosas mas!
					</p>
				</div>
			</div>
		</div >
	)
}

export default Hero