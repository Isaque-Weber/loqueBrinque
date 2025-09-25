import { sniglet } from "@/lib/fonts";
import { User } from "lucide-react";

const depoimentos = [
    {
        nome: "Maria S.",
        texto: "Foi a melhor festa de todas! As crianças amaram os brinquedos!",
        cor: "from-pink-100 to-pink-200",
    },
    {
        nome: "João P.",
        texto: "Entrega rápida, montagem prática e muita diversão garantida.",
        cor: "from-yellow-100 to-yellow-200",
    },
    {
        nome: "Ana L.",
        texto: "Super recomendo! Brinquedos de ótima qualidade.",
        cor: "from-blue-100 to-blue-200",
    },
];

const Depoimentos = () => {
    return (
        <section id="depoimentos" className="py-20 bg-gradient-to-b from-white via-pink-50 to-yellow-50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Título */}
                <h2 className={`text-4xl font-extrabold mb-12 text-pink-600 ${sniglet.className}`}>
                    💬 O que nossos clientes dizem
                </h2>

                {/* Grid de depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {depoimentos.map((d, i) => (
                        <div
                            key={i}
                            className={`relative p-6 rounded-3xl shadow-lg bg-gradient-to-b ${d.cor} hover:scale-105 transition-transform`}
                        >
                            {/* Balão de fala */}
                            <div className="absolute -top-4 left-6 bg-white rounded-full shadow-md p-2">
                                <User className="h-6 w-6 text-pink-500" />
                            </div>

                            <p className="italic text-gray-700 mb-4">“{d.texto}”</p>
                            <cite className="font-bold text-gray-900">- {d.nome}</cite>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Depoimentos;
