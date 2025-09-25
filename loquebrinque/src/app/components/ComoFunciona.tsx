const steps = [
    { step: "1", text: "Escolha os brinquedos", color: "bg-blue-500" },
    { step: "2", text: "Agende a data", color: "bg-green-500" },
    { step: "3", text: "Entrega e montagem", color: "bg-yellow-400" },
    { step: "4", text: "Diversão garantida!", color: "bg-pink-500" },
];

const ComoFunciona = () => {
    return (
        <section id="como-funciona" className="py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-green-600">Como Funciona</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div
                                className={`${s.color} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl`}
                            >
                                {s.step}
                            </div>
                            <p className="mt-4 text-lg font-medium">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
