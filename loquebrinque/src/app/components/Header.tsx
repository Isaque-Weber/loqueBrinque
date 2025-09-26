"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { sniglet } from "@/lib/fonts";

const Header = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: "/brinquedos", label: "Brinquedos" },
        // { href: "/como-funciona", label: "Como Funciona" },
        { href: "/contato", label: "Contato" },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur ${sniglet.className}`}>
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/Logo.png" alt="LoqueBrinque Logo" width={65} height={40} />
                  {/* <span className="font-bold text-3xl tracking-tight">
                    <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-transparent animated-gradient">
                      Loque
                    </span>
                    <span className="ml-1 bg-gradient-to-r from-pink-500 via-red-500 to-pink-400 bg-clip-text text-transparent inline-block rotate-1 animated-gradient">
                      Brinque!
                    </span>
                  </span> */}
                </Link>


                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex flex-1 justify-center">
                    <NavigationMenuList className="space-x-10">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href={item.href}
                                        className={`font-medium px-3 py-2 rounded-md transition-all duration-200
    ${
                                            pathname === item.href
                                                ? "bg-sky-600 text-white shadow"
                                                : "text-gray-800 hover:bg-blue-100 hover:text-sky-600"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <Link
                                    href="/"
                                    className="flex items-center space-x-2"
                                    onClick={() => setOpen(false)}
                                >
                  <span className="font-bold text-xl text-blue-600">
                    Loque<span className="text-pink-500">Brinque</span>
                  </span>
                                </Link>
                            </SheetTitle>
                        </SheetHeader>

                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                                        pathname === item.href ? "text-blue-600 underline" : "text-gray-700"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
