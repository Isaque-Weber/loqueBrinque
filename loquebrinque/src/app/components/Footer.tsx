import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { sniglet } from "@/lib/fonts";
import WhatsAppIcon from "@/app/components/ui/WhatsappIcon";

const Footer = () => {
    return (
        <footer className="bg-orange-200 text-gray-800">
            {/* Conteúdo principal */}
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* Logo + slogan */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Image
                        src="/Logo.png"
                        alt="Loque Brinque"
                        width={180}
                        height={180}
                        className="drop-shadow-lg mb-4"
                    />
                    <p className={`font-medium text-lg text-sky-700 ${sniglet.className}`}>
                        Diversão garantida para todas as idades!!
                    </p>
                </div>

                {/* Links rápidos */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h3 className={`font-medium text-lg text-sky-700 mb-2 ${sniglet.className}`}>
                        Navegação
                    </h3>
                    <Link href="/#brinquedos" className="hover:text-sky-600">Brinquedos</Link>
                    <Link href="/#como-funciona" className="hover:text-sky-600">Como Funciona</Link>
                    {/*<Link href="/#depoimentos" className="hover:text-sky-600">Depoimentos</Link>*/}
                    <Link href="/#contato" className="hover:text-sky-600">Contato</Link>
                </div>

                {/* Contato + redes sociais */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h3 className={`font-medium text-lg text-sky-700 mb-2 ${sniglet.className}`}>
                        Fale Conosco
                    </h3>
                    <p className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-sky-600" /> (21) 96448-5810
                    </p>
                    <p className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-sky-600" /> contato@loquebrinque.com
                    </p>

                    <div className="flex gap-4 mt-4">
                        <Link href="https://www.facebook.com/cleber.weber.14" target="_blank" rel="noopener noreferrer"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 shadow hover:bg-red-100 transition-colors">
                            <Facebook className="h-5 w-5 text-sky-600" />
                        </Link>
                        <Link href="https://www.instagram.com/loquebrinque01" target="_blank" rel="noopener noreferrer"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 shadow hover:bg-red-100 transition-colors">
                            <Instagram className="h-5 w-5 text-sky-600" />
                        </Link>
                        <Link href="https://wa.me/5521964485810" target="_blank" rel="noopener noreferrer"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 shadow hover:bg-red-100 transition-colors">
                            <WhatsAppIcon className="h-5 w-5 text-sky-600" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Linha inferior DENTRO do gradiente */}
            <div className="py-4 text-center text-sm text-gray-700">
                © 2025 <span className={`font-bold ${sniglet.className} text-red-600`}>
          Loque Brinque
        </span>. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
