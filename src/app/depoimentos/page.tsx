import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";

const depoimentos = [
    {
        nome: "Maria S.",
        texto: "Foi a melhor festa de todas! As crianças amaram os brinquedos!",
    },
    {
        nome: "João P.",
        texto: "Entrega rápida, montagem prática e muita diversão garantida.",
    },
    {
        nome: "Ana L.",
        texto: "Super recomendo! Brinquedos de ótima qualidade.",
    },
];

export default function DepoimentosPage() {
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">
                    O que nossos clientes dizem
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {depoimentos.map((d, i) => (
                        <Card key={i} className="flex flex-col justify-between p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0 mb-4">
                                <p className="italic text-lg">“{d.texto}”</p>
                            </CardContent>
                            <CardFooter className="p-0">
                                <p className="font-semibold text-primary">- {d.nome}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
