import { ToyBrick, PartyPopper, Star } from "lucide-react";
import Hero from "@/app/components/Hero";
import {sniglet} from "@/lib/fonts";
import Depoimentos from "@/app/components/Depoimentos";
import WaveDivider from "@/app/components/ui/waveDivider";
import ComoFunciona from "@/app/components/ComoFunciona";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">

                {/* HERO SECTION */}
                <Hero/>

                {/* Divider */}
                <WaveDivider topColor="#60a5fa" bottomColor="#ffffff" variant="wave"/>

                {/* FEATURES */}
                <section id="features" className="relative w-full py-20 bg-white overflow-hidden">
                    <div className="container px-4 md:px-6">
                        {/* Título */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            <h2 className={`text-4xl md:text-5xl font-medium text-red-900 drop-shadow-sm ${sniglet.className}`}>
                                Por que escolher a gente? 🎪
                            </h2>
                            <p className="max-w-2xl text-gray-700 md:text-lg">
                                A melhor experiência em aluguel de brinquedos: qualidade, segurança e MUITA alegria!
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:scale-105 hover:-rotate-1 transition-transform duration-300">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-pink-200 mb-6 shadow-md">
                                    <PartyPopper className="h-10 w-10 text-red-600" />
                                </div>
                                <h3 className={`text-2xl font-medium text-red-600 ${sniglet.className}`}>🎉 Brinquedos Novos</h3>
                                <p className="mt-3 text-gray-600">
                                    Sempre higienizados e seguros, prontos para garantir a diversão da criançada!
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-200 mb-6 shadow-md">
                                    <ToyBrick className="h-10 w-10 text-yellow-600" />
                                </div>
                                <h3 className={`text-2xl font-medium text-yellow-600 ${sniglet.className}`}>🧩 Variedade</h3>
                                <p className="mt-3 text-gray-600">
                                    Diversão para todas as idades com opções de infláveis que agradam a todos!
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:scale-105 hover:-rotate-1 transition-transform duration-300">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-200 mb-6 shadow-md">
                                    <Star className="h-10 w-10 text-blue-500" />
                                </div>
                                <h3 className={`text-2xl font-medium text-blue-500 ${sniglet.className}`}>⭐ Qualidade</h3>
                                <p className="mt-3 text-gray-600">
                                    Atendimento atencioso, entrega rápida e montagem impecável para sua festa.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <WaveDivider topColor="#ffffff" bottomColor="#60A5FA" variant="smooth" />

                <ComoFunciona/>

                {/* Divider */}
                <WaveDivider topColor="#ffffff" bottomColor="#60A5FA" variant="smooth" />

                {/*    Depoimentos*/}
                <Depoimentos/>

            </main>
        </div>
    );
}
