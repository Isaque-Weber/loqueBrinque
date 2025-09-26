import { sniglet } from "@/lib/fonts";
import { User } from "lucide-react";

const depoimentos = [
    { nome: "Maria S.", texto: "Foi a melhor festa de todas! As crianças amaram os brinquedos!", cor: "text-pink-500" },
    { nome: "João P.", texto: "Entrega rápida, montagem prática e muita diversão garantida.", cor: "text-yellow-600" },
    { nome: "Ana L.", texto: "Super recomendo! Brinquedos de ótima qualidade.", cor: "text-blue-500" },
];

const Depoimentos = () => {
    return (
        <section id="depoimentos" className="relative bg-blue-400">
            <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10 text-white">
                <h2 className={`text-4xl text-red-900 font-medium mb-12 ${sniglet.className}`}>
                    O que nossos clientes dizem
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {depoimentos.map((d, i) => (
                        <div key={i} className="relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                                <User className="h-6 w-6 text-blue-400" />
                            </div>
                            <p className="italic text-gray-700 mb-4 mt-4">“{d.texto}”</p>
                            <cite className="font-bold text-gray-900">- {d.nome}</cite>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Depoimentos;
