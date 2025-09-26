import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/ui/theme-provider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { baloo } from "@/lib/fonts";
import WaveDivider from "@/app/components/ui/waveDivider";

export const metadata: Metadata = {
    title: "Loque Brinque",
    description: "Aluguel de brinquedos infláveis para festas e eventos",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased bg-gradient-to-b from-blue-50 to-white",
                baloo.variable // 👈 global continua Baloo
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header />
            {children}
            <WaveDivider topColor="#60A5FA" bottomColor="#fed7aa" variant="tilt" />
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}

