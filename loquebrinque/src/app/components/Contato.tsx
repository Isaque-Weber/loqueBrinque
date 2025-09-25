const Contato = () => {
    return (
        <section id="contato" className="py-20">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 text-blue-600">Entre em Contato</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        className="w-full border rounded-md p-3"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Seu Email"
                        className="w-full border rounded-md p-3"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Seu Telefone"
                        className="w-full border rounded-md p-3"
                        required
                    />
                    <textarea
                        placeholder="Sua Mensagem"
                        className="w-full border rounded-md p-3"
                        rows={4}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        Enviar
                    </button>
                </form>

                {/* Botão WhatsApp */}
                <a
                    href="https://wa.me/5599999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                >
                    Fale no WhatsApp
                </a>
            </div>
        </section>
    );
};

export default Contato;
