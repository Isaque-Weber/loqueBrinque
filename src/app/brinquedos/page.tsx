"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogClose,
    DialogTitle,
} from "@/app/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import WhatsAppIcon from "@/app/components/ui/WhatsappIcon";

function ModalTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center relative mx-auto w-fit">
            {/* título com gradiente */}
            <h2
                className="text-3xl md:text-4xl font-extrabold tracking-tight
                   bg-gradient-to-r from-orange-700 via-red-600 to-sky-700
                   text-transparent bg-clip-text select-none"
            >
                {children}
            </h2>

            {/* glow suave atrás do título */}
            <div className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-60
                      bg-gradient-to-r from-orange-100 via-white to-sky-100 rounded-full" />
        </div>
    );
}

const brinquedos = [
    { nome: "Pula-pula (Cama Elástica)", images: ["/Pula-pula.jpg", "/Pula-pula.jpg"] },
    { nome: "Touro Mecânico", images: ["/touro-mecanico.jpg", "/touro-mecanico.jpg"] },
    { nome: "Tobogã Inflável", images: ["/Tobogã.jpg", "/Tobogã.jpg"] },
    { nome: "Piscina de Bolinhas", images: ["/pool-bol.jpg", "/kid-pool-bol.jpg"] },
    { nome: "Futebol de Sabão Inflável", images: ["/futebol-de-sabao.webp", "/futebol-de-sabao.webp"] },
    { nome: "Guerra de Cotonete Inflável", images: ["/cotonete.webp", "/cotonete.webp"] },
    { nome: "Totó", images: ["/pebolim.jpg", "/pebolim.jpg"] },
    { nome: "Playground Inflável", images: ["/OIP.jpg", "/OIP.jpg"] },
];

export default function BrinquedosPage() {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    // ESC fecha o fullscreen
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setFullscreenImage(null);
        };
        if (fullscreenImage) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [fullscreenImage]);

    /** Carrossel para o HERO (preenche 100% da área do topo do modal) */
    const HeroCarousel = ({
                              images,
                              toyName,
                              onOpenFullscreen,
                          }: {
        images: string[];
        toyName: string;
        onOpenFullscreen: (src: string) => void;
    }) => {
        const [current, setCurrent] = useState(0);
        const next = () => setCurrent((p) => (p + 1) % images.length);
        const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

        return (
            <div className="relative w-full h-full">
                <Image
                    key={images[current]}
                    src={images[current]}
                    alt={`${toyName} - Imagem ${current + 1}`}
                    fill
                    priority
                    className="object-cover"
                    onClick={() => onOpenFullscreen(images[current])}
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-3 py-3 rounded-xl shadow ring-1 ring-black/10"
                            aria-label="Imagem anterior"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-800" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-3 py-3 rounded-xl shadow ring-1 ring-black/10"
                            aria-label="Próxima imagem"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-800" />
                        </button>
                    </>
                )}

                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2.5 rounded-full transition-all ${
                                    i === current ? "w-8 bg-white" : "w-2.5 bg-white/60"
                                }`}
                                aria-label={`Ir para imagem ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-100 to-blue-400">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-medium sm:text-5xl mb-12 text-gray-700 drop-shadow-lg">
                        Nossos{" "}
                        <span className="text-3xl font-extrabold sm:text-5xl mb-12 text-gray-700 drop-shadow-lg">
              Brinquedos
            </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {brinquedos.map((b, i) => (
                            <Dialog key={i}>
                                <DialogTrigger asChild>
                                    <Card className="flex flex-col overflow-hidden rounded-3xl bg-orange-500 shadow-xl hover:scale-105 transition-transform cursor-pointer">
                                        <CardHeader className="p-0">
                                            <Image
                                                src={b.images[0]}
                                                alt={b.nome}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 object-cover rounded-t-3xl"
                                            />
                                        </CardHeader>
                                        <CardContent className="p-6 flex flex-col flex-1 items-center justify-between">
                                            <CardTitle className="text-xl font-bold text-gray-700 mb-3 text-center">
                                                {b.nome}
                                            </CardTitle>
                                            <div className="text-sm text-gray-600 bg-white/20 px-3 py-1 rounded-full">
                                                Clique para ver mais
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>

                                {/* ===== MODAL ===== */}
                                <DialogContent
                                    onInteractOutside={(e) => { if (fullscreenImage) e.preventDefault(); }}
                                    onPointerDownOutside={(e) => { if (fullscreenImage) e.preventDefault(); }}
                                    onEscapeKeyDown={(e) => { if (fullscreenImage) e.preventDefault(); }}
                                    className="
                                        w-full max-w-5xl p-0 overflow-hidden bg-white border-0 rounded-2xl shadow-2xl
                                        [&_[aria-label='Close']]:hidden
                                        [&_[data-radix-dialog-close]]:hidden
                                      "
                                >
                                    {/* Limite de altura geral do modal */}
                                    <div className="flex flex-col max-h-[90vh]">
                                        {/* HERO com carrossel ocupando 100% da área */}
                                        <div className="relative w-full h-[42vh] md:h-[48vh] min-h-[260px] flex-shrink-0">
                                            <HeroCarousel
                                                images={b.images}
                                                toyName={b.nome}
                                                onOpenFullscreen={(src) => setFullscreenImage(src)}
                                            />
                                            {/* Fechar */}
                                            <DialogClose asChild>
                                                <button
                                                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/55 text-white hover:bg-black/70 transition"
                                                    aria-label="Fechar modal"
                                                >
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </DialogClose>
                                            {/* transição suave do hero para o conteúdo */}
                                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent" />
                                        </div>

                                        {/* CONTEÚDO: rola dentro do modal, abaixo do hero */}
                                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                                            <DialogTitle className="sr-only">{b.nome}</DialogTitle>
                                            <DialogHeader className="text-center">
                                                <ModalTitle>{b.nome}</ModalTitle>
                                            </DialogHeader>

                                            {/* CTA */}
                                            <div className="flex flex-col items-center space-y-6">
                                                <div className="bg-gradient-to-br from-orange-100 via-white to-sky-100 rounded-3xl p-8 text-center shadow ring-1 ring-black/5 max-w-md w-full">
                                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                                        🎪 Pronto para a diversão?
                                                    </h3>
                                                    <p className="text-gray-700">
                                                        Reserve agora mesmo pelo WhatsApp e{" "}
                                                        <span className="font-semibold text-pink-600">
                              garanta a alegria
                            </span>{" "}
                                                        da sua festa! 🎉
                                                    </p>
                                                </div>

                                                <a
                                                    href={`https://wa.me/5521999258985?text=${encodeURIComponent(
                                                        `Olá! Gostaria de reservar o brinquedo: ${b.nome} para minha festa! 🎉`
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold rounded-full px-16 py-6 shadow-2xl text-xl">
                                                        <WhatsAppIcon className="h-6 w-6" />
                                                        Reservar no WhatsApp
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </section>

            {/* FULLSCREEN IMAGE */}
            {fullscreenImage && (
                <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                    {/* BACKDROP */}
                    <div className="absolute inset-0 z-[121]" onClick={() => setFullscreenImage(null)} />

                    {/* BOTÃO FECHAR */}
                    <button
                        onClick={() => setFullscreenImage(null)}
                        className="absolute top-8 right-8 z-[122] text-white bg-black/60 hover:bg-black/80 rounded-full p-4 transition"
                        aria-label="Fechar imagem"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* IMAGEM */}
                    <div className="relative z-[122] max-w-full max-h-full">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={fullscreenImage}
                                alt="Imagem em tela cheia"
                                width={1400}
                                height={900}
                                className="max-w-full max-h-[85vh] object-contain cursor-zoom-out"
                                onClick={() => setFullscreenImage(null)}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
