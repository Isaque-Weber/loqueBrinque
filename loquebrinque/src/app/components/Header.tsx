"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    <Image src="/Logo.jpg" alt="Loque Brinque" width={50} height={50} />
                    <span className="font-bold text-lg">Loque Brinque</span>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <Link href="#hero" className="hover:text-pink-600">Home</Link>
                    <Link href="#brinquedos" className="hover:text-pink-600">Brinquedos</Link>
                    <Link href="#como-funciona" className="hover:text-pink-600">Como Funciona</Link>
                    <Link href="#contato" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
                        Reserve Agora
                    </Link>
                </nav>

                {/* Botão Mobile */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <ul className="flex flex-col p-4 gap-4 font-medium">
                        <li><Link href="#hero" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link href="#brinquedos" onClick={() => setOpen(false)}>Brinquedos</Link></li>
                        <li><Link href="#como-funciona" onClick={() => setOpen(false)}>Como Funciona</Link></li>
                        <li>
                            <Link
                                href="#contato"
                                onClick={() => setOpen(false)}
                                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition"
                            >
                                Reserve Agora
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
