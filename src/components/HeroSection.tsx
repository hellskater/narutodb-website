import Image from 'next/image'

function HeroSection() {
	return (
		<div className="">
			<div className="relative h-[60vh] w-screen lg:h-[50vh]">
				<Image
					src="/banner.jpg"
					alt="naruto banner"
					fill
					priority
					className="h-full w-full object-cover opacity-40"
				/>

				<div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
					<header className="text-center font-naruto text-3xl font-semibold leading-normal tracking-wider text-gray-800 selection:bg-white selection:bg-opacity-70 selection:text-orange-600 dark:text-white dark:selection:bg-black dark:selection:bg-opacity-80 md:text-5xl lg:text-8xl ">
						Naruto Character Universe
					</header>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
