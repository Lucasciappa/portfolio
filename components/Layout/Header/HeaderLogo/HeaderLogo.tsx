import Link from "next/link"

const HeaderLogo = () => {
	return (
		<Link href="/" className="flex items-center justify-center">
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="100" height="100" xmlSpace="preserve"
			>
				<path
					fill="currentColor" d="m66.666 36.67-4.713 4.713 8.619 8.62-8.622 8.62 4.713 4.713L80 50.003zM33.333 63.336l4.714-4.713-8.62-8.62 8.623-8.62-4.714-4.713L20 50.003z"
				/>
				<path fill="#00B8D4" d="m38.973 78.275 15.612-58.27 6.44 1.725L45.412 80z" />
			</svg>
		</Link>
	)
}

export default HeaderLogo
