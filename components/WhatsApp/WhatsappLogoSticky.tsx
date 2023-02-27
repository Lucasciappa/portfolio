import { useRouter } from "next/router";
import { CustomImage } from "../UI/CustomImage";

const WhatsappLogoSticky = () => {
    const router = useRouter();
    return (
        <div className="fixed bottom-20 right-4 md:right-8 md:bottom-28">
            <a
                title="Mandanos un mensaje"
                href={`https://api.whatsapp.com/send/?phone=541131063791&text=Hola+Lucas%21%0D%0A%0D%0AQuiero+mas+informaci%C3%B3n+sobre+ti&app_absent=0`}
                target="_blank"
                rel="noreferrer"
                className="block w-12 h-12 md:w-14 md:h-14 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 relative"
            >
                <CustomImage
                    imgsrc={"/whatsapp-logo.webp"}
                    alt={"logo WhatsApp"}
                    layout={"fill"}
                    objectFit={"cover"}
                    quality={2}
                />
            </a>
        </div>
    );
};

export default WhatsappLogoSticky;