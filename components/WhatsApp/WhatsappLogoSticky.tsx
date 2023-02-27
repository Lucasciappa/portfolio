import Image from "next/image";
import { useRouter } from "next/router";

const WhatsappLogoSticky = () => {
    const router = useRouter();
    return (
        <div className="fixed bottom-20 right-2 md:right-6 md:bottom-24">
            <a
                title="Mandanos un mensaje"
                href={`https://api.whatsapp.com/send/?phone=541131063791&text=Hola+Lucas%21%0D%0A%0D%0AQuiero+mas+informaci%C3%B3n+sobre+ti&app_absent=0`}
                target="_blank"
                rel="noreferrer"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 relative"
            >
                <Image
                    src={"/whatsapp-logo.webp"}
                    alt={"logo WhatsApp"}
                    width={500}
                    height={500}
                />
            </a>
        </div>
    );
};

export default WhatsappLogoSticky;