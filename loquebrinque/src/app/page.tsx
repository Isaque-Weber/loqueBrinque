import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <h1 className="text-4xl font-bold text-pink-600">Hello Tailwind!</h1>
                {/* Próximas seções: Brinquedos, Como Funciona, Depoimentos, Contato, Footer */}
            </main>
        </>
    );
}
