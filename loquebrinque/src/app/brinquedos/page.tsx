import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Link from "next/link";
import {Span} from "next/dist/server/lib/trace/tracer";

const brinquedos = [
    {
        nome: "Pula-pula (Cama Elástica)",
        img: "/pula-pula.jpg",
    },
    {
        nome: "Touro Mecânico",
        img: "/touro-mecanico.jpg",
    },
    {
        nome: "Tobogã Inflável",
        img: "/tobogã.jpg",
    },
    {
        nome: "Piscina de Bolinhas",
        img: "/pool-bol.jpg",
    },
    {
        nome: "Futebol de Sabão Inflável",
        img: "/futebol-de-sabao.webp",
    },
    {
        nome: "Guerra de Cotonete Inflável",
        img: "/cotonete.webp",
    },
    {
        nome: "Totó",
        img: "/pebolim.jpg",
    },
    {
        nome: "Playground Inflável",
        img: "/OIP.jpg",
    },
];

export default function BrinquedosPage() {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-100 to-blue-400">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-medium sm:text-5xl mb-12 text-gray-700 drop-shadow-lg">
                    Nossos <span className="text-3xl font-extrabold sm:text-5xl mb-12 text-gray-700 drop-shadow-lg">Brinquedos</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {brinquedos.map((b, i) => (
                        <Card
                            key={i}
                            className="flex flex-col overflow-hidden rounded-3xl bg-orange-500 shadow-xl hover:scale-105 transition-transform"
                        >
                            {/* Imagem */}
                            <CardHeader className="p-0">
                                <Image
                                    src={b.img}
                                    alt={b.nome}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-t-3xl"
                                />
                            </CardHeader>

                            {/* Conteúdo */}
                            <CardContent className="p-6 flex flex-col flex-1 items-center justify-between">
                                <CardTitle className="text-xl font-bold text-gray-700 mb-3 text-center">
                                    {b.nome}
                                </CardTitle>

                                {/* Exemplo: pode mostrar medidas/capacidade se tiver no objeto */}
                                {/*{b.medidas && (*/}
                                {/*    <p className="text-sm font-medium mb-1">*/}
                                {/*        <span className="font-bold">Medidas:</span> {b.medidas}*/}
                                {/*    </p>*/}
                                {/*)}*/}
                                {/*{b.capacidade && (*/}
                                {/*    <p className="text-sm font-medium mb-4">*/}
                                {/*        <span className="font-bold">Capacidade:</span> {b.capacidade}*/}
                                {/*    </p>*/}
                                {/*)}*/}

                                <a
                                    href={`https://wa.me/5521964485810?text=${encodeURIComponent(
                                        `Olá! Gostaria de reservar o brinquedo: ${b.nome}.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full px-6 shadow-md">
                                        Reservar
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
