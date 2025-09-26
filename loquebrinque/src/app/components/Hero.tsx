import Link from "next/link";
import {Button} from "@/app/components/ui/button";
import {sniglet} from "@/lib/fonts";

const Hero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-blue-400 overflow-hidden">
            <div className="container px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-10">

                {/* Textos */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className={`text-4xl md:text-6xl font-medium text-red-900 drop-shadow-lg leading-tight ${sniglet.className}`}>
                        🎉 Prepare-se para inflar a diversão!
                    </h1>
                    <p className="mx-auto md:mx-0 max-w-xl text-2xl text-black font-medium">
                        Alugamos brinquedos infláveis que transformam qualquer festa em um parque de alegria, gargalhadas que ecoam até depois do parabéns!
                        Prepare-se para fotos incríveis e lembranças que vão saltar direto pro coração 💖📸
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/contato">
                            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg">
                                Quero Alugar Agora 🚀
                            </Button>
                        </Link>
                        <Link href="/brinquedos">
                            <Button size="lg" variant="secondary" className="bg-white text-red-500 rounded-full px-8 py-6 text-lg shadow-md hover:bg-gray-100">
                                Ver Brinquedos
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Imagem */}
                <div className="flex-1">
                    <img
                        src="/kid-pool-bol.jpg"
                        alt="Criança brincando"
                        className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
