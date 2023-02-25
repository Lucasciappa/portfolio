import Head from "next/head";

type SEOProps = {
	title: string;
	description: string;
	keywords: string
}

const SEO = ({ title, description, keywords }: SEOProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="icon" href="favicon.ico" />
				<title>{title}</title>
			</Head>
		</>
	)
}

export default SEO;