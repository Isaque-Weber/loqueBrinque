import Image from "next/image";

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
        img: "https://img.freepik.com/fotos-gratis/criancas-brincando-no-campo-de-futebol-inflavel-com-agua_23-2149876543.jpg",
    },
    {
        nome: "Guerra de Cotonete Inflável",
        img: "https://img.freepik.com/fotos-premium/jogo-de-luta-inflavel-divertido-com-bastoes-de-espuma_670382-24855.jpg",
    },
    {
        nome: "Totó Humano",
        img: "https://img.freepik.com/fotos-premium/jogo-de-toto-humano-com-pessoas-em-um-campo-inflavel_931559-4980.jpg",
    },
    {
        nome: "Playground Inflável",
        img: "https://img.freepik.com/fotos-premium/playground-inflavel-colorido-para-criancas_931559-4102.jpg",
    },
];

const Brinquedos = () => {
    return (
        <section id="brinquedos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-blue-600">Nossos Brinquedos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {brinquedos.map((b, i) => (
                        <div
                            key={i}
                            className="bg-white shadow rounded-lg overflow-hidden hover:scale-105 transition"
                        >
                            <Image
                                src={b.img}
                                alt={b.nome}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-gray-800">{b.nome}</h3>
                                <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                                    Reserve Agora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brinquedos;
