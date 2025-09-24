import Link from "next/link";

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6"
        >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Transforme sua festa em um parque de diversão!
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mb-8">
                Aluguel de brinquedos infláveis, cama elástica, tobogã, touro mecânico e muito mais para qualquer ocasião.
            </p>
            <Link
                href="#brinquedos"
                className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
            >
                Ver Brinquedos
            </Link>
        </section>
    );
};

export default Hero;
