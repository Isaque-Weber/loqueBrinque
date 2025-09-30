import {Card, CardDescription, CardTitle} from "@/app/components/ui/card";
import {Calendar, Puzzle, Smile, Truck} from "lucide-react";
import WhatsAppIcon from "@/app/components/ui/WhatsappIcon";

const steps = [
    {
        step: "1",
        text: "Escolha os brinquedos",
        color: "bg-blue-500",
        icon: <Puzzle size={40} />,
        description: "Selecione os brinquedos que mais combinam com a sua festa entre diversas opções divertidas."
    },
    {
        step: "2",
        text: "Agende a data",
        color: "bg-green-500",
        icon: <Calendar size={40} />,
        description: "Informe o dia do seu evento para garantirmos disponibilidade e organização antecipada."
    },
    {
        step: "3",
        text: "Entrega e montagem",
        color: "bg-yellow-400",
        icon: <Truck size={40} />,
        description: "Nossa equipe leva os brinquedos até você e cuida da montagem com toda segurança."
    },
    {
        step: "4",
        text: "Diversão garantida!",
        color: "bg-pink-500",
        icon: <Smile size={40} />,
        description: "Pronto! É só aproveitar a festa com muita alegria e tranquilidade para todos."
    },
];

const ComoFunciona = () => {
    return (
        <section id={"como-funciona"} className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-400 to-white relative overflow-hidden">
            <div className="container px-4 md:px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-sky-900 drop-shadow-lg">
                    ✨ Como Funciona? ✨
                </h2>
                {/* Agora sempre 2 cards por linha em telas médias e grandes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {steps.map((s, i) => (
                        <Card
                            key={i}
                            className="flex flex-col items-center justify-center p-10 text-center shadow-xl rounded-3xl hover:scale-105 transition-transform bg-white"
                        >
                            <span className="text-sky-700 font-bold text-xl mb-2">Passo {s.step}</span>
                            <div
                                className={`${s.color} text-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-md`}
                            >
                                {s.icon}
                            </div>


                            <CardTitle className="text-2xl font-bold mb-3 text-sky-800">{s.text}</CardTitle>
                            <CardDescription className="text-gray-600 text-lg">
                                {s.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>

                {/* Botão de CTA para WhatsApp */}
                <div className="mt-16">
                    <a
                        href={`https://wa.me/5521964485810?text=${encodeURIComponent(
                            "Olá! Vi como funciona no site e gostaria de montar minha festa! 🎪🎉"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-105"
                    >
                        <WhatsAppIcon className="h-7 w-7" />
                        Fale com um especialista e monte sua festa!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
