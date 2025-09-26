"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import WhatsAppIcon from "@/app/components/ui/WhatsappIcon";
import { Mail } from "lucide-react";

export default function ContatoPage() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLInputElement).value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-sky-100 to-blue-400">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tight text-sky-800 drop-shadow">
                        Entre em Contato
                    </h2>
                    <p className="mt-3 text-lg text-gray-700">
                        Ficou com alguma dúvida? Envie sua mensagem ou fale com a gente no WhatsApp 🎉
                    </p>
                </div>

                <Card className="shadow-xl border-none rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-700">
                            Preencha o formulário
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nome</Label>
                                <Input id="name" name="name" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Telefone</Label>
                                <Input id="phone" name="phone" type="tel" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea id="message" name="message" rows={4} required />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full shadow-md transition-transform hover:scale-105"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                {loading ? "Enviando..." : "Enviar Mensagem"}
                            </Button>
                        </form>

                        {status === "success" && (
                            <p className="mt-4 text-green-600 font-semibold">
                                ✅ Mensagem enviada com sucesso!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-red-600 font-semibold">
                                ❌ Ocorreu um erro. Tente novamente.
                            </p>
                        )}

                        <div className="mt-6">
                            <a
                                href={`https://wa.me/5521964485810?text=${encodeURIComponent(
                                    "Olá! Gostaria de saber mais informações sobre os brinquedos disponíveis para minha festa 🎪🎉"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full h-14 items-center justify-center gap-3 rounded-full bg-green-500 px-6 text-lg font-semibold text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-105"
                            >
                                <WhatsAppIcon className="h-6 w-6" />
                                Fale no WhatsApp
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
