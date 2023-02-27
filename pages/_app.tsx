import "@/styles/globals.css"

import { ThemeProvider } from "@/lib/next-themes"
import { Inter } from '@next/font/google'

import KBar from "@/components/KBar"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

import type { AppProps } from "next/app"
import WhatsappLogoSticky from "@/components/WhatsApp/WhatsappLogoSticky"

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
	weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<div className={inter.className}>
				<ThemeProvider attribute="class">
					<KBar>
						<Header />
						<main className="relative mx-auto mb-16 max-w-4xl px-8 py-24">
							<Component {...pageProps} />
							<WhatsappLogoSticky />
						</main>
						<Footer />
					</KBar>
				</ThemeProvider>
			</div>
		</>
	)
}

export default App;